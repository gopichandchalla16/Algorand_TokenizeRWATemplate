"""ChainVault RWA Protocol — Algorand ASA Writer
Mints verified RWA tokens on Algorand with AI verification proof.
"""

import os
import json
import hashlib
from dotenv import load_dotenv
from algosdk import account, transaction
from algosdk.v2client import algod
from algosdk.transaction import AssetConfigTxn
from models.rwa_asset import MintDecision, AlgorandASAMetadata

load_dotenv()

# Algorand client setup
ALGOD_ADDRESS = os.getenv("ALGORAND_ALGOD_URL", "https://testnet-api.algonode.cloud")
ALGOD_TOKEN = os.getenv("ALGORAND_ALGOD_TOKEN", "")


def get_algod_client() -> algod.AlgodClient:
    """Return an Algorand algod client connected to TestNet."""
    return algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)


def hash_verification_result(mint_decision: MintDecision) -> str:
    """
    Create a SHA256 hash of the AI verification result.
    This hash will be stored in the Algorand transaction note as proof.
    """
    verification_data = json.dumps({
        "owner": mint_decision.owner_name,
        "survey": mint_decision.survey_number,
        "score": mint_decision.combined_score,
        "decision": mint_decision.decision,
        "location": mint_decision.location,
    }, sort_keys=True)
    
    return hashlib.sha256(verification_data.encode()).hexdigest()


def mint_verified_rwa_asa(
    mint_decision: MintDecision,
    creator_private_key: str,
    creator_address: str
) -> dict:
    """
    Mint a verified RWA token as an Algorand Standard Asset (ASA).
    
    Only call this if mint_decision.decision == 'MINT_APPROVED'
    
    Args:
        mint_decision: Result from fraud_detector.run_full_verification()
        creator_private_key: Algorand account private key
        creator_address: Algorand wallet address
        
    Returns:
        Dict with asset_id and transaction_id
    """
    if mint_decision.decision != "MINT_APPROVED":
        raise ValueError(
            f"Cannot mint: document status is {mint_decision.decision}. "
            f"Only MINT_APPROVED assets can be tokenized."
        )
    
    client = get_algod_client()
    
    # Create verification proof hash
    verification_hash = hash_verification_result(mint_decision)
    note = f"ChainVault-Verified:{verification_hash[:16]}".encode()
    
    # Get suggested transaction params
    params = client.suggested_params()
    
    # Build ASA metadata from verification result
    metadata = mint_decision.algorand_metadata
    
    # Create Asset Config Transaction (ASA creation)
    txn = AssetConfigTxn(
        sender=creator_address,
        sp=params,
        total=metadata.get("total", 1),
        default_frozen=False,
        unit_name=metadata.get("unit_name", "CVRWA"),
        asset_name=metadata.get("asset_name", "ChainVault-RWA"),
        decimals=metadata.get("decimals", 0),
        note=note,
        manager=creator_address,
        reserve=creator_address,
        freeze=creator_address,
        clawback=creator_address,
    )
    
    # Sign the transaction
    signed_txn = txn.sign(creator_private_key)
    
    # Submit to Algorand
    txn_id = client.send_transaction(signed_txn)
    
    # Wait for confirmation
    confirmed = transaction.wait_for_confirmation(client, txn_id, wait_rounds=4)
    asset_id = confirmed["asset-index"]
    
    print(f"\n✅ RWA ASA Minted Successfully!")
    print(f"   Asset ID: {asset_id}")
    print(f"   Transaction ID: {txn_id}")
    print(f"   Verification Hash: {verification_hash}")
    print(f"   Explorer: https://testnet.explorer.perawallet.app/asset/{asset_id}")
    
    return {
        "asset_id": asset_id,
        "transaction_id": txn_id,
        "verification_hash": verification_hash,
        "explorer_url": f"https://testnet.explorer.perawallet.app/asset/{asset_id}",
        "asset_metadata": metadata
    }


if __name__ == "__main__":
    # Demo: shows what would happen with a real account
    print("ChainVault Algorand Writer — Demo Mode")
    print("To mint a real ASA, provide your Algorand private key and address.")
    print("Use Algorand TestNet dispenser: https://bank.testnet.algorand.network/")
