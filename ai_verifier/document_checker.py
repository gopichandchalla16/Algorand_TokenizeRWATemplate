"""ChainVault RWA Protocol — AI Document Verification Agent
Uses LangChain + Groq LLM to verify property documents before Algorand ASA minting.
"""

import os
import json
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain.prompts import ChatPromptTemplate
from langchain.schema import HumanMessage, SystemMessage
from models.rwa_asset import RWAVerificationResult

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

llm = ChatGroq(
    model="llama3-70b-8192",
    api_key=GROQ_API_KEY,
    temperature=0.1  # Low temp for consistent verification
)

SYSTEM_PROMPT = """
You are ChainVault's AI property verification agent. Your job is to analyze property 
documents and assess their authenticity before they are tokenized on the Algorand blockchain.

You must extract and verify:
1. Owner's full name
2. Survey/Plot number
3. Property area (sq ft or acres)
4. Location (district, state)
5. Registration date
6. Any red flags or inconsistencies

Return a JSON object with this exact structure:
{
  "owner_name": "string",
  "survey_number": "string",
  "area": "string",
  "location": "string",
  "registration_date": "string or null",
  "fraud_risk_score": 0-100,
  "risk_factors": ["list of detected issues"],
  "verification_status": "APPROVED" or "REJECTED" or "MANUAL_REVIEW",
  "ai_summary": "1-2 sentence human-readable summary"
}

Fraud risk score guide:
- 0-30: Low risk → APPROVED for minting
- 31-60: Medium risk → MANUAL_REVIEW required  
- 61-100: High risk → REJECTED

Only return the JSON object. No other text.
"""

def verify_property_document(document_text: str) -> RWAVerificationResult:
    """
    Verify a property document using AI before Algorand ASA minting.
    
    Args:
        document_text: Raw text extracted from the property document
        
    Returns:
        RWAVerificationResult with fraud score and verification status
    """
    messages = [
        SystemMessage(content=SYSTEM_PROMPT),
        HumanMessage(content=f"Analyze this property document:\n\n{document_text}")
    ]
    
    response = llm.invoke(messages)
    
    try:
        result_dict = json.loads(response.content)
        return RWAVerificationResult(**result_dict)
    except json.JSONDecodeError:
        # Fallback: extract JSON from response
        import re
        json_match = re.search(r'\{.*\}', response.content, re.DOTALL)
        if json_match:
            result_dict = json.loads(json_match.group())
            return RWAVerificationResult(**result_dict)
        raise ValueError(f"AI returned invalid JSON: {response.content}")


def verify_from_file(file_path: str) -> RWAVerificationResult:
    """
    Verify a property document from a PDF or text file.
    
    Args:
        file_path: Path to the document file
        
    Returns:
        RWAVerificationResult
    """
    if file_path.endswith('.pdf'):
        import PyPDF2
        text = ""
        with open(file_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text()
    else:
        with open(file_path, 'r') as f:
            text = f.read()
    
    return verify_property_document(text)


if __name__ == "__main__":
    # Test with a sample property description
    sample_doc = """
    PROPERTY REGISTRATION DOCUMENT
    
    Owner: Rajesh Kumar Sharma
    Survey Number: 245/A/2
    Location: Guntur District, Andhra Pradesh, India
    Area: 1200 sq ft (Plot)
    Registration Date: 15-March-2020
    Sub-Registrar Office: Guntur Urban
    Document Number: GNT-2020-REG-004521
    
    This property is free from all encumbrances and legal disputes
    as of the date of registration. The seller confirms sole ownership
    with no pending litigation.
    """
    
    print("🔍 ChainVault AI Verification Agent")
    print("=" * 40)
    
    result = verify_property_document(sample_doc)
    
    print(f"Owner: {result.owner_name}")
    print(f"Location: {result.location}")
    print(f"Survey No: {result.survey_number}")
    print(f"Fraud Risk Score: {result.fraud_risk_score}/100")
    print(f"Status: {result.verification_status}")
    print(f"Summary: {result.ai_summary}")
    
    if result.verification_status == "APPROVED":
        print("\n✅ Document APPROVED — Ready for Algorand ASA minting")
    elif result.verification_status == "MANUAL_REVIEW":
        print("\n⚠️  Manual review required before minting")
    else:
        print("\n❌ Document REJECTED — Minting blocked")
