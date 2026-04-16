export default function FooterSection() {
  return (
    <footer className="border-t border-[rgba(0,212,170,0.1)] py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">

        {/* Product Mission Banner */}
        <div
          className="card p-10 mb-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,102,255,0.08) 100%)',
            borderColor: 'rgba(0,212,170,0.3)',
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="relative z-10">
            {/* Mission statement */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#00D4AA] pulse-green"></div>
              <span className="text-[#00D4AA] text-xs font-bold uppercase tracking-widest">Our Mission</span>
            </div>
            <h2 className="font-space font-black text-3xl md:text-4xl text-white mb-4">
              Bring 640 Million Indians<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
                Into Verifiable Property Ownership
              </span>
            </h2>
            <p className="text-[#8899AA] text-base mb-6 max-w-2xl mx-auto leading-relaxed">
              India has 640+ districts with fragmented, paper-based land records. 30% of all civil court cases are property disputes.
              ChainVault is the AI verification layer that makes on-chain property ownership safe, fast, and accessible — for everyone.
            </p>

            {/* Protocol stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { value: '< 10s', label: 'AI Verification' },
                { value: '100%', label: 'On-Chain Proof' },
                { value: 'ARC-19', label: 'Algorand Standard' },
                { value: 'Open', label: 'Source Protocol' },
              ].map((s, i) => (
                <div key={i} className="bg-[rgba(0,0,0,0.2)] rounded-xl p-3">
                  <div className="font-space font-bold text-[#00D4AA] text-lg">{s.value}</div>
                  <div className="text-[#8899AA] text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/gopichandchalla16/Algorand_TokenizeRWATemplate"
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Source on GitHub
              </a>
              <a
                href="https://testnet.algoexplorer.io"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                🔗 Algorand Explorer
              </a>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#0066FF] flex items-center justify-center">
                <span className="text-[#050A14] font-black text-sm">CV</span>
              </div>
              <div>
                <div className="font-space font-bold text-white text-lg">ChainVault</div>
                <div className="text-[10px] text-[#00D4AA] tracking-widest uppercase">RWA Protocol</div>
              </div>
            </div>
            <p className="text-[#8899AA] text-sm leading-relaxed">
              AI-powered real-world asset verification and tokenization on Algorand.
              Solving India's $40B property fraud problem with blockchain.
            </p>
          </div>

          <div>
            <h4 className="font-space font-semibold text-white mb-4">Protocol</h4>
            <ul className="space-y-2 text-sm text-[#8899AA]">
              <li className="hover:text-[#00D4AA] cursor-pointer transition-colors">🔍 AI Verification Engine</li>
              <li className="hover:text-[#00D4AA] cursor-pointer transition-colors">🗃️ Asset Registry</li>
              <li className="hover:text-[#00D4AA] cursor-pointer transition-colors">🔗 Algorand Integration</li>
              <li className="hover:text-[#00D4AA] cursor-pointer transition-colors">📋 ARC-19 Metadata</li>
              <li className="hover:text-[#00D4AA] cursor-pointer transition-colors">🗺️ Roadmap</li>
            </ul>
          </div>

          <div>
            <h4 className="font-space font-semibold text-white mb-4">Builder</h4>
            <div className="space-y-3">
              {[
                { label: 'GitHub — gopichandchalla16', href: 'https://github.com/gopichandchalla16', icon: '🐙' },
                { label: 'X / Twitter', href: 'https://x.com/GopichandAI', icon: '🐦' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/gopichandchalla', icon: '💼' },
                { label: 'AlgoExplorer TestNet', href: 'https://testnet.algoexplorer.io', icon: '🔗' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[#8899AA] hover:text-[#00D4AA] transition-colors"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — clean, product-focused */}
        <div className="border-t border-[rgba(0,212,170,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8899AA]">
          <div>© 2026 ChainVault Protocol · Open Source · Built in Guntur, India 🇮🇳</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] pulse-green"></div>
              <span>Algorand TestNet — Active</span>
            </div>
            <span className="text-[rgba(0,212,170,0.3)]">|</span>
            <span>v2.0 · AI Verification Layer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
