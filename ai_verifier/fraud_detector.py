"""ChainVault RWA Protocol — Fraud Detection Pipeline
Orchestrates AI verification + pattern scoring for final mint decision.
"""

from document_checker import verify_property_document
from risk_scorer import score_document_text, combine_scores
from models.rwa_asset import RWAVerificationResult, MintDecision


def run_full_verification(document_text: str) -> MintDecision:
    """
    Run the complete ChainVault verification pipeline.
    
    Pipeline:
    1. AI LLM verification (LangChain + Groq)
    2. Pattern-based risk scoring
    3. Combined score calculation
    4. Final mint decision
    
    Args:
        document_text: Raw property document text
        
    Returns:
        MintDecision with final verdict and Algorand-ready metadata
    """
    print("🔍 Step 1: Running AI document verification...")
    ai_result = verify_property_document(document_text)
    
    print("📊 Step 2: Running pattern-based risk analysis...")
    pattern_result = score_document_text(document_text)
    
    print("⚖️  Step 3: Calculating combined risk score...")
    final_score = combine_scores(
        ai_score=ai_result.fraud_risk_score,
        pattern_score=pattern_result.score
    )
    
    # Final decision
    if final_score <= 30:
        decision = "MINT_APPROVED"
        message = "✅ Asset approved for Algorand ASA minting"
    elif final_score <= 60:
        decision = "MANUAL_REVIEW"
        message = "⚠️  Human review required before minting"
    else:
        decision = "MINT_REJECTED"
        message = "❌ Asset rejected — high fraud risk detected"
    
    print(f"\n{message}")
    print(f"Final Risk Score: {final_score}/100")
    
    return MintDecision(
        owner_name=ai_result.owner_name,
        survey_number=ai_result.survey_number,
        area=ai_result.area,
        location=ai_result.location,
        ai_fraud_score=ai_result.fraud_risk_score,
        pattern_fraud_score=pattern_result.score,
        combined_score=final_score,
        risk_factors=ai_result.risk_factors + pattern_result.flags,
        decision=decision,
        message=message,
        algorand_metadata={
            "asset_name": f"RWA-{ai_result.survey_number.replace('/', '-')}",
            "unit_name": "CVRWA",
            "total": 1,
            "decimals": 0,
            "ai_verified": decision == "MINT_APPROVED",
            "fraud_risk_score": final_score,
            "location": ai_result.location,
            "owner": ai_result.owner_name,
        }
    )


if __name__ == "__main__":
    test_doc = """
    PROPERTY SALE DEED
    Vendor: Suresh Rao, Survey No: 122/B, Area: 2400 sqft
    Location: Vijayawada, Krishna District, Andhra Pradesh
    Registered: 10-Jan-2022, Document No: KRN-2022-00892
    Status: Clear title, no pending litigation or encumbrances.
    """
    
    result = run_full_verification(test_doc)
    print("\n--- Algorand Metadata Ready ---")
    import json
    print(json.dumps(result.algorand_metadata, indent=2))
