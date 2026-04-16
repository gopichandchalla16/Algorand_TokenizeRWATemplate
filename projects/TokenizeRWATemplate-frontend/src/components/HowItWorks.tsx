export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: '📄',
      title: 'Upload Property Document',
      description: 'Upload any property document — sale deed, registration certificate, or land record. Supports PDF and text formats.',
      tag: 'Input Layer',
      color: '#00D4AA',
    },
    {
      step: '02',
      icon: '🤖',
      title: 'AI Fraud Detection',
      description: 'LangChain + Groq LLM reads your document, extracts key claims, detects inconsistencies, and generates a Fraud Risk Score (0–100).',
      tag: 'AI Layer',
      color: '#0066FF',
    },
    {
      step: '03',
      icon: '⚖️',
      title: 'Verification Decision',
      description: 'Combined AI + pattern analysis produces the final verdict: APPROVED, MANUAL REVIEW, or REJECTED. Only approved docs proceed.',
      tag: 'Decision Engine',
      color: '#9933FF',
    },
    {
      step: '04',
      icon: '🏆',
      title: 'Mint ASA on Algorand',
      description: 'Approved assets are minted as unique Algorand Standard Assets (ASAs) with ARC-19 metadata and AI verification proof in the txn note.',
      tag: 'Algorand Layer',
      color: '#00D4AA',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-green mb-4">How It Works</span>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
            From Document to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
              On-Chain Asset
            </span>
          </h2>
          <p className="text-[#8899AA] text-lg max-w-2xl mx-auto">
            Four steps. Zero trust required. Every verification is permanent and verifiable on Algorand.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="card p-6 relative">
              {/* Step number */}
              <div className="absolute top-4 right-4 font-space font-black text-5xl opacity-5 text-white">
                {step.step}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${step.color}18`, border: `1px solid ${step.color}40` }}
              >
                {step.icon}
              </div>

              {/* Tag */}
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3 inline-block"
                style={{ color: step.color, background: `${step.color}15` }}
              >
                {step.tag}
              </span>

              <h3 className="font-space font-bold text-white text-lg mb-3">{step.title}</h3>
              <p className="text-[#8899AA] text-sm leading-relaxed">{step.description}</p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
