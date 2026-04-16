import { useState } from 'react'

type VerificationState = 'idle' | 'scanning' | 'done'
type Decision = 'MINT_APPROVED' | 'MANUAL_REVIEW' | 'MINT_REJECTED'

interface VerificationResult {
  owner_name: string
  survey_number: string
  area: string
  location: string
  combined_score: number
  decision: Decision
  message: string
  risk_factors: string[]
  algorand_metadata: Record<string, any>
}

const SAMPLE_DOCS = [
  {
    label: '✅ Clean Property (Low Risk)',
    text: `PROPERTY REGISTRATION DOCUMENT\n\nOwner: Rajesh Kumar Sharma\nSurvey Number: 245/A/2\nLocation: Guntur District, Andhra Pradesh, India\nArea: 1200 sq ft\nRegistration Date: 15-March-2022\nSub-Registrar Office: Guntur Urban\nDocument No: GNT-2022-REG-004521\n\nThis property is free from all encumbrances and legal disputes as of the date of registration. The seller confirms sole ownership with no pending litigation.`,
  },
  {
    label: '⚠️ Disputed Property (High Risk)',
    text: `PROPERTY SALE DEED\n\nOwner: Suresh Rao\nSurvey Number: 122/B\nArea: 2400 sqft\nLocation: Vijayawada, Krishna District, Andhra Pradesh\n\nNOTE: This property has an existing mortgage lien. There is a stay order from Vijayawada Civil Court dated 12-Jan-2022. The previous owner has filed a dispute regarding boundary encroachment. Property is currently under litigation.`,
  },
  {
    label: '🔍 Review Required (Medium Risk)',
    text: `SALE DEED - PHOTOCOPY\n\nVendor: M. Narayana Rao\nSurvey No: 89/C (correction applied)\nArea: 800 sq ft (amended)\nLocation: Nellore District, AP\nDate: 08-Feb-2021\n\nNote: This is a duplicate copy. Original registered at Nellore Sub-registrar office. Joint owner: Mrs. Sarada Devi (Power of Attorney holder).`,
  },
]

export default function AIVerifier() {
  const [docText, setDocText] = useState('')
  const [state, setState] = useState<VerificationState>('idle')
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState('')

  const runVerification = async () => {
    if (!docText.trim()) return
    setState('scanning')
    setProgress(0)
    setResult(null)

    const steps = [
      { msg: 'Extracting document text...', progress: 15 },
      { msg: 'Running AI claim extraction...', progress: 35 },
      { msg: 'Analyzing fraud risk patterns...', progress: 55 },
      { msg: 'Calculating combined risk score...', progress: 75 },
      { msg: 'Preparing Algorand metadata...', progress: 90 },
      { msg: 'Finalizing verification...', progress: 100 },
    ]

    for (const step of steps) {
      setCurrentStep(step.msg)
      setProgress(step.progress)
      await new Promise(r => setTimeout(r, 600))
    }

    // Simulate AI result based on text content
    const text = docText.toLowerCase()
    const hasHighRisk = text.includes('mortgage') || text.includes('litigation') || text.includes('dispute') || text.includes('stay order') || text.includes('lien')
    const hasMediumRisk = text.includes('photocopy') || text.includes('duplicate') || text.includes('correction') || text.includes('power of attorney')

    let score = 8
    let decision: Decision = 'MINT_APPROVED'
    let riskFactors: string[] = []

    if (hasHighRisk) {
      score = 78
      decision = 'MINT_REJECTED'
      riskFactors = [
        'Mortgage/lien detected in document',
        'Active court litigation found',
        'Stay order present — transfer blocked by court',
      ]
    } else if (hasMediumRisk) {
      score = 44
      decision = 'MANUAL_REVIEW'
      riskFactors = [
        'Document is a photocopy — original not submitted',
        'Correction/amendment detected in text',
        'Joint ownership requires additional verification',
      ]
    }

    // Extract basic info
    const ownerMatch = docText.match(/Owner[:\s]+([^\n]+)/i)
    const surveyMatch = docText.match(/Survey\s*(?:Number|No\.?)[:\s]+([^\n]+)/i)
    const areaMatch = docText.match(/Area[:\s]+([^\n]+)/i)
    const locationMatch = docText.match(/Location[:\s]+([^\n]+)/i)

    const mockResult: VerificationResult = {
      owner_name: ownerMatch?.[1]?.trim() || 'Extracted from document',
      survey_number: surveyMatch?.[1]?.trim() || 'Parsed from text',
      area: areaMatch?.[1]?.trim() || 'See document',
      location: locationMatch?.[1]?.trim() || 'See document',
      combined_score: score,
      decision,
      message:
        decision === 'MINT_APPROVED' ? '✅ Asset approved for Algorand ASA minting' :
        decision === 'MANUAL_REVIEW' ? '⚠️ Human review required before minting' :
        '❌ Asset rejected — high fraud risk detected',
      risk_factors: riskFactors,
      algorand_metadata: {
        asset_name: `RWA-${(surveyMatch?.[1]?.replace(/[^a-zA-Z0-9]/g, '-') || 'PROP').slice(0, 12).toUpperCase()}`,
        unit_name: 'CVRWA',
        total: 1,
        decimals: 0,
        ai_verified: decision === 'MINT_APPROVED',
        fraud_risk_score: score,
        chain: 'Algorand TestNet',
      },
    }

    setResult(mockResult)
    setState('done')
  }

  const reset = () => {
    setState('idle')
    setResult(null)
    setDocText('')
    setProgress(0)
  }

  const scoreColor =
    result?.combined_score !== undefined
      ? result.combined_score <= 30 ? '#00D4AA'
      : result.combined_score <= 60 ? '#FFAA44'
      : '#FF4455'
      : '#00D4AA'

  return (
    <div className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge badge-green mb-4">AI Verification Engine</span>
          <h2 className="font-space font-black text-4xl md:text-5xl text-white mb-4">
            Verify Before You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">Mint</span>
          </h2>
          <p className="text-[#8899AA] text-lg max-w-xl mx-auto">
            Paste your property document text. Our AI agent will analyze it in seconds and decide if it's safe to tokenize on Algorand.
          </p>
        </div>

        {state === 'idle' && (
          <>
            {/* Sample docs */}
            <div className="mb-4">
              <p className="text-xs text-[#8899AA] mb-3 font-medium uppercase tracking-wider">Try a sample document:</p>
              <div className="flex flex-wrap gap-3">
                {SAMPLE_DOCS.map((doc, i) => (
                  <button
                    key={i}
                    onClick={() => setDocText(doc.text)}
                    className="text-xs px-4 py-2 rounded-lg border border-[rgba(0,212,170,0.2)] text-[#8899AA] hover:text-[#00D4AA] hover:border-[rgba(0,212,170,0.5)] transition-all"
                  >
                    {doc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="card p-1 mb-4">
              <textarea
                className="w-full bg-transparent text-white text-sm p-5 resize-none outline-none placeholder-[#445566] leading-relaxed"
                rows={12}
                placeholder="Paste property document text here...\n\nExample: Owner name, survey number, location, registration date, property status..."
                value={docText}
                onChange={e => setDocText(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-[#8899AA]">{docText.length} characters</p>
              <button
                className="btn-primary flex items-center gap-2"
                onClick={runVerification}
                disabled={!docText.trim()}
                style={{ opacity: docText.trim() ? 1 : 0.5 }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Run AI Verification
              </button>
            </div>
          </>
        )}

        {state === 'scanning' && (
          <div className="card p-12 text-center">
            <div className="w-20 h-20 rounded-full border-2 border-[#00D4AA] border-t-transparent animate-spin mx-auto mb-6"></div>
            <h3 className="font-space font-bold text-xl text-white mb-2">{currentStep}</h3>
            <p className="text-[#8899AA] text-sm mb-8">ChainVault AI is analyzing your document...</p>
            <div className="w-full bg-[#0D1626] rounded-full h-2 mb-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#0066FF] transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-[#8899AA]">{progress}% complete</p>
          </div>
        )}

        {state === 'done' && result && (
          <div className="space-y-6">
            {/* Decision banner */}
            <div
              className="card p-6 border-2"
              style={{
                borderColor:
                  result.decision === 'MINT_APPROVED' ? 'rgba(0,212,170,0.5)' :
                  result.decision === 'MANUAL_REVIEW' ? 'rgba(255,170,68,0.5)' :
                  'rgba(255,68,85,0.5)',
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-space font-bold text-2xl text-white mb-1">{result.message}</div>
                  <div className="text-[#8899AA] text-sm">ChainVault AI Verification Complete</div>
                </div>
                {/* Risk score circle */}
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-full border-4 flex items-center justify-center"
                    style={{ borderColor: scoreColor }}
                  >
                    <div>
                      <div className="font-black text-2xl" style={{ color: scoreColor }}>{result.combined_score}</div>
                      <div className="text-[10px] text-[#8899AA]">/ 100</div>
                    </div>
                  </div>
                  <div className="text-xs mt-1" style={{ color: scoreColor }}>Risk Score</div>
                </div>
              </div>
            </div>

            {/* Extracted data */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h4 className="font-space font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00D4AA20] text-[#00D4AA] text-xs flex items-center justify-center">AI</span>
                  Extracted Property Data
                </h4>
                <div className="space-y-3">
                  {[
                    ['Owner', result.owner_name],
                    ['Survey No.', result.survey_number],
                    ['Area', result.area],
                    ['Location', result.location],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-[#8899AA]">{label}</span>
                      <span className="text-white font-medium text-right max-w-[60%] truncate">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-space font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-lg">⛓️</span>
                  Algorand ASA Metadata
                </h4>
                <div className="space-y-3">
                  {Object.entries(result.algorand_metadata).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-[#8899AA] capitalize">{key.replace(/_/g, ' ')}</span>
                      <span className="text-white font-medium font-mono">{String(val)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk factors */}
            {result.risk_factors.length > 0 && (
              <div className="card p-6 border border-[rgba(255,68,85,0.2)]">
                <h4 className="font-space font-bold text-white mb-4">⚠️ Risk Factors Detected</h4>
                <div className="space-y-2">
                  {result.risk_factors.map((factor, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-[#FF4455] mt-0.5">✗</span>
                      <span className="text-[#FFAA44]">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {result.decision === 'MINT_APPROVED' && (
                <button className="btn-primary flex items-center gap-2">
                  <span>⛓️</span> Mint on Algorand TestNet
                </button>
              )}
              <button className="btn-secondary" onClick={reset}>← Verify Another Document</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
