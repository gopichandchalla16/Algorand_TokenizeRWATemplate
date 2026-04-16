export default function WhyAlgorand() {
  const reasons = [
    {
      icon: '⚡',
      title: '3.9s Finality',
      description: 'Property transfers confirmed near-instantly. No waiting, no uncertainty.',
      metric: '3.9 seconds',
    },
    {
      icon: '💸',
      title: '$0.001 Fees',
      description: 'Accessible to small landowners in rural India — not just wealthy investors.',
      metric: '0.001 ALGO',
    },
    {
      icon: '🛡️',
      title: 'ARC-19 Standard',
      description: 'Mutable metadata standard perfect for document upgrades and regulatory compliance.',
      metric: 'ARC-19 / ASA',
    },
    {
      icon: '🌿',
      title: 'Carbon Neutral',
      description: "Algorand's pure proof-of-stake aligns with India's green infrastructure push.",
      metric: 'Net Zero Chain',
    },
    {
      icon: '🔧',
      title: 'AlgoKit',
      description: 'Production-grade developer tooling that enabled rapid, reliable development.',
      metric: 'v2.0 Toolchain',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Build once on Algorand. Deploy to users in 100+ countries without friction.',
      metric: '100+ Countries',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge badge-blue mb-4">Built on Algorand</span>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
              Algorand
            </span>{' '}
            for RWA?
          </h2>
          <p className="text-[#8899AA] text-lg max-w-2xl mx-auto">
            Not every blockchain is built for real-world assets. Algorand's unique properties make it the only logical choice for ChainVault.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="card p-6 group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">{r.icon}</div>
              <div className="font-space font-bold text-white text-lg mb-2">{r.title}</div>
              <p className="text-[#8899AA] text-sm leading-relaxed mb-4">{r.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(0,212,170,0.06)] border border-[rgba(0,212,170,0.15)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]"></div>
                <span className="text-[#00D4AA] text-xs font-mono font-semibold">{r.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
