"""ChainVault RWA Protocol — Pydantic Models
Data schemas for AI verification results and Algorand ASA metadata.
"""

from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any


class RWAVerificationResult(BaseModel):
    """Result from the AI document verification agent."""
    owner_name: str = Field(description="Full name of the property owner")
    survey_number: str = Field(description="Survey/Plot number from the document")
    area: str = Field(description="Property area with units")
    location: str = Field(description="District, State, Country")
    registration_date: Optional[str] = Field(None, description="Document registration date")
    fraud_risk_score: int = Field(ge=0, le=100, description="AI-assessed fraud risk 0-100")
    risk_factors: List[str] = Field(default=[], description="Detected risk factors")
    verification_status: str = Field(description="APPROVED / REJECTED / MANUAL_REVIEW")
    ai_summary: str = Field(description="Human-readable verification summary")


class MintDecision(BaseModel):
    """Final minting decision after full verification pipeline."""
    owner_name: str
    survey_number: str
    area: str
    location: str
    ai_fraud_score: int = Field(ge=0, le=100)
    pattern_fraud_score: int = Field(ge=0, le=100)
    combined_score: int = Field(ge=0, le=100)
    risk_factors: List[str]
    decision: str  # MINT_APPROVED / MANUAL_REVIEW / MINT_REJECTED
    message: str
    algorand_metadata: Dict[str, Any]


class AlgorandASAMetadata(BaseModel):
    """ARC-19 compliant metadata for ChainVault RWA tokens."""
    asset_name: str = Field(description="e.g. RWA-GNT-245-A-2")
    unit_name: str = Field(default="CVRWA", description="ChainVault RWA token")
    total: int = Field(default=1, description="1 for unique property NFT")
    decimals: int = Field(default=0)
    ai_verified: bool = Field(description="Whether AI approved this asset")
    fraud_risk_score: int = Field(ge=0, le=100)
    location: str
    owner: str
    survey_number: str
    ipfs_doc_hash: Optional[str] = Field(None, description="IPFS hash of verified document")
    algorand_txn_id: Optional[str] = Field(None, description="Verification proof txn ID")


class VerificationRequest(BaseModel):
    """API request model for document verification."""
    document_text: str = Field(description="Raw text from property document")
    applicant_wallet: str = Field(description="Algorand wallet address of applicant")


class VerificationResponse(BaseModel):
    """API response model after verification."""
    decision: str
    combined_score: int
    message: str
    algorand_metadata: Dict[str, Any]
    ready_to_mint: bool
