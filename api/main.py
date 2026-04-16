"""ChainVault RWA Protocol — FastAPI Backend
REST API for document verification and Algorand ASA minting.
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from models.rwa_asset import VerificationRequest, VerificationResponse

app = FastAPI(
    title="ChainVault RWA Protocol API",
    description="AI-powered RWA tokenization on Algorand — verify before you mint",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "protocol": "ChainVault RWA Protocol",
        "version": "1.0.0",
        "status": "online",
        "chain": "Algorand",
        "description": "AI-powered real-world asset tokenization"
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy", "ai_verifier": "online", "algorand": "testnet"}


@app.post("/verify", response_model=VerificationResponse)
async def verify_document(request: VerificationRequest):
    """
    Verify a property document using AI before Algorand ASA minting.
    
    Returns fraud risk score, verification status, and Algorand-ready metadata.
    """
    try:
        import sys
        sys.path.append("../ai_verifier")
        from ai_verifier.fraud_detector import run_full_verification
        
        result = run_full_verification(request.document_text)
        
        return VerificationResponse(
            decision=result.decision,
            combined_score=result.combined_score,
            message=result.message,
            algorand_metadata=result.algorand_metadata,
            ready_to_mint=result.decision == "MINT_APPROVED"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/verify-file")
async def verify_document_file(file: UploadFile = File(...)):
    """
    Verify a property document uploaded as PDF or TXT file.
    """
    if not file.filename.endswith(('.pdf', '.txt')):
        raise HTTPException(
            status_code=400,
            detail="Only PDF and TXT files are supported"
        )
    
    content = await file.read()
    
    if file.filename.endswith('.pdf'):
        import PyPDF2
        import io
        reader = PyPDF2.PdfReader(io.BytesIO(content))
        document_text = ""
        for page in reader.pages:
            document_text += page.extract_text()
    else:
        document_text = content.decode('utf-8')
    
    try:
        from ai_verifier.fraud_detector import run_full_verification
        result = run_full_verification(document_text)
        
        return {
            "filename": file.filename,
            "decision": result.decision,
            "combined_score": result.combined_score,
            "message": result.message,
            "ready_to_mint": result.decision == "MINT_APPROVED",
            "algorand_metadata": result.algorand_metadata
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/sample-verification")
async def sample_verification():
    """
    Run a sample verification to demonstrate the AI pipeline.
    """
    sample_doc = """
    PROPERTY REGISTRATION DOCUMENT
    Owner: Gopichand Challa
    Survey Number: 245/A/2
    Location: Guntur District, Andhra Pradesh, India
    Area: 1200 sq ft
    Registration Date: 15-March-2022
    Status: Free from all encumbrances and legal disputes.
    Document No: GNT-2022-REG-004521
    """
    
    try:
        from ai_verifier.fraud_detector import run_full_verification
        result = run_full_verification(sample_doc)
        return {
            "demo": True,
            "decision": result.decision,
            "score": result.combined_score,
            "metadata": result.algorand_metadata
        }
    except Exception as e:
        return {
            "demo": True,
            "note": "Configure GROQ_API_KEY to run live verification",
            "sample_output": {
                "decision": "MINT_APPROVED",
                "score": 8,
                "asset_name": "RWA-245-A-2",
                "ai_verified": True
            }
        }
