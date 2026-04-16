export default function RoadmapSection() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'ASA Tokenization Template',
      status: 'done',
      items: ['Algorand Standard Asset creation', 'Web3Auth + Pera wallet auth', 'AlgoKit setup + one-click deploy', 'TestNet integration'],
    },
    {
      phase: 'Phase 2',
      title: 'AI Verification Layer',
      status: 'active',
      items: ['LangChain + Groq LLM agent', 'Fraud Risk Scoring (0-100)', 'Pattern-based detection engine', 'ARC-19 metadata + on-chain proof'],
    },
    {
      phase: 'Phase 3',
      title: 'India Stack Integration',
      status: 'upcoming',
      items: ['Digilocker API — official document fetch', 'Aadhaar-linked ownership verification', 'Sub-registrar office integration', 'District land record API (AP, Telangana)'],
    },
    {
      phase: 'Phase 4',
      title: 'DeFi & Lending',
      status: 'upcoming',
      items: ['Verified RWA as DeFi collateral', 'P2P property transfer protocol', 'Multi-country RWA support', 'Algorand mainnet launch'],
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge badge-blue mb-4">Roadmap</span>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
            The Path to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
              $16T RWA Market
            </span>
          </h2>
          <p className="text-[#8899AA] text-lg max-w-2xl mx-auto">
            We're not building a demo. We're building the verification infrastructure that enables global RWA tokenization on Algorand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`card p-6 ${
                phase.status === 'active'
                  ? 'border-[rgba(0,212,170,0.5)] glow-green'
                  : phase.status === 'done'
                  ? 'border-[rgba(0,212,170,0.25)]'
                  : 'border-[rgba(255,255,255,0.06)]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#8899AA] uppercase tracking-wider">{phase.phase}</span>
                {phase.status === 'done' && (
                  <span className="badge badge-green text-[10px] py-0.5 px-2">Done ✓</span>
                )}
                {phase.status === 'active' && (
                  <span className="badge badge-green text-[10px] py-0.5 px-2 pulse-green">Live 🔥</span>
                )}
                {phase.status === 'upcoming' && (
                  <span className="badge badge-blue text-[10px] py-0.5 px-2">Soon</span>
                )}
              </div>

              <h3 className="font-space font-bold text-white text-base mb-4">{phase.title}</h3>

              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-[#8899AA]">
                    <span
                      className={`mt-0.5 flex-shrink-0 ${
                        phase.status === 'done' ? 'text-[#00D4AA]' : 'text-[#8899AA]'
                      }`}
                    >
                      {phase.status === 'done' ? '✓' : '○'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
