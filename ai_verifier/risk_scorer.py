"""ChainVault RWA Protocol — Fraud Risk Scoring Engine
Pattern-based risk assessment layer that supplements the LLM verification.
"""

import re
from dataclasses import dataclass
from typing import List


@dataclass
class RiskAssessment:
    score: int                    # 0-100 risk score
    flags: List[str]              # Detected risk factors
    recommendation: str           # APPROVE / MANUAL_REVIEW / REJECT


# Keywords that indicate potential fraud or document issues
HIGH_RISK_PATTERNS = [
    r'dispute',
    r'litigation',
    r'encumbrance',
    r'mortgage',
    r'lien',
    r'court order',
    r'freeze',
    r'attachment',
    r'stay order',
    r'injunction',
]

MEDIUM_RISK_PATTERNS = [
    r'photocopy',
    r'duplicate',
    r'correction',
    r'amendment',
    r'cancelled',
    r'superseded',
]

LOW_RISK_PATTERNS = [
    r'joint owner',
    r'co-owner',
    r'power of attorney',
]


def score_document_text(document_text: str) -> RiskAssessment:
    """
    Run pattern-based risk scoring on document text.
    
    Args:
        document_text: Raw text from property document
        
    Returns:
        RiskAssessment with score and detected flags
    """
    text_lower = document_text.lower()
    flags = []
    score = 0
    
    # Check high risk patterns
    for pattern in HIGH_RISK_PATTERNS:
        if re.search(pattern, text_lower):
            flags.append(f"HIGH RISK: '{pattern}' detected in document")
            score += 20
    
    # Check medium risk patterns
    for pattern in MEDIUM_RISK_PATTERNS:
        if re.search(pattern, text_lower):
            flags.append(f"MEDIUM RISK: '{pattern}' detected")
            score += 10
    
    # Check low risk patterns
    for pattern in LOW_RISK_PATTERNS:
        if re.search(pattern, text_lower):
            flags.append(f"NOTE: '{pattern}' detected — verify ownership chain")
            score += 5
    
    # Cap at 100
    score = min(score, 100)
    
    # Determine recommendation
    if score <= 30:
        recommendation = "APPROVE"
    elif score <= 60:
        recommendation = "MANUAL_REVIEW"
    else:
        recommendation = "REJECT"
    
    return RiskAssessment(
        score=score,
        flags=flags,
        recommendation=recommendation
    )


def combine_scores(ai_score: int, pattern_score: int) -> int:
    """
    Combine AI LLM score with pattern-based score.
    Uses weighted average: AI gets 70% weight, patterns get 30%.
    
    Args:
        ai_score: Score from LLM verification (0-100)
        pattern_score: Score from pattern matching (0-100)
        
    Returns:
        Combined fraud risk score (0-100)
    """
    return round((ai_score * 0.7) + (pattern_score * 0.3))


if __name__ == "__main__":
    sample = "This property has no encumbrances and is free from litigation."
    result = score_document_text(sample)
    print(f"Pattern Risk Score: {result.score}")
    print(f"Flags: {result.flags}")
    print(f"Recommendation: {result.recommendation}")
