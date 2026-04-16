interface HeroProps {
  setActiveTab: (tab: 'home' | 'verify' | 'assets') => void
}

export default function HeroSection({ setActiveTab }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4AA] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066FF] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="badge badge-green">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] pulse-green"></span>
            Algorand Web3 Masterclasses 2026
          </span>
          <span className="badge badge-blue">$20K Prize Pool</span>
        </div>

        {/* Headline */}
        <h1 className="font-space font-black text-5xl md:text-7xl leading-tight mb-6">
          <span className="text-white">The World's First</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF] text-glow">
            AI-Verified RWA
          </span>
          <br />
          <span className="text-white">Protocol on Algorand</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#8899AA] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload your property document. Our AI agent detects fraud in seconds.
          Verified assets are minted as Algorand ASAs — trustless, transparent, immutable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            className="btn-primary flex items-center gap-2 text-base"
            onClick={() => setActiveTab('verify')}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Verify a Property
          </button>
          <button
            className="btn-secondary flex items-center gap-2 text-base"
            onClick={() => setActiveTab('assets')}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View Asset Registry
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '$1.3T', label: 'India Real Estate', sub: 'addressable market' },
            { value: '$40B', label: 'Property Fraud', sub: 'lost annually in India' },
            { value: '3.9s', label: 'Algorand Finality', sub: 'near-instant settlement' },
            { value: '$0.001', label: 'Txn Fee', sub: 'accessible to all' },
          ].map((stat, i) => (
            <div key={i} className="card p-4 text-center">
              <div className="font-space font-bold text-2xl text-[#00D4AA]">{stat.value}</div>
              <div className="text-white text-sm font-semibold mt-1">{stat.label}</div>
              <div className="text-[#8899AA] text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-[#8899AA] tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#00D4AA] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
