export default function StatsSection() {
  const stats = [
    { icon: '🏛️', number: '640+', label: 'Indian Districts', detail: 'with fragmented land records' },
    { icon: '🤖', number: '< 10s', label: 'AI Verification', detail: 'from upload to decision' },
    { icon: '🔗', number: '100%', label: 'On-Chain Proof', detail: 'immutable audit trail' },
    { icon: '🌍', number: '$326T', label: 'Global RWA Market', detail: 'waiting to be tokenized' },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="card p-6 text-center group">
              <div className="text-4xl mb-3 float">{stat.icon}</div>
              <div className="font-space font-black text-3xl text-[#00D4AA] mb-1">{stat.number}</div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-[#8899AA] text-xs">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
