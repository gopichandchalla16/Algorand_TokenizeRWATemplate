import { useState } from 'react'

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: 'home' | 'verify' | 'assets') => void
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#0066FF] flex items-center justify-center glow-green">
            <span className="text-[#050A14] font-black text-sm">CV</span>
          </div>
          <div>
            <div className="font-space font-bold text-white text-lg leading-none">ChainVault</div>
            <div className="text-[10px] text-[#00D4AA] font-medium tracking-widest uppercase">RWA Protocol</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[['home', 'Home'], ['verify', 'AI Verify'], ['assets', 'Assets']].map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'text-[#00D4AA]'
                  : 'text-[#8899AA] hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA + Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00D4AA] pulse-green"></div>
            <span className="text-xs text-[#8899AA]">Algorand TestNet</span>
          </div>
          <button
            className="btn-primary text-sm py-2.5 px-5"
            onClick={() => setActiveTab('verify')}
          >
            Verify Asset
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[rgba(0,212,170,0.15)] pt-4 flex flex-col gap-4">
          {[['home', 'Home'], ['verify', 'AI Verify'], ['assets', 'Assets']].map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab as any); setMenuOpen(false) }}
              className={`text-sm font-medium text-left ${
                activeTab === tab ? 'text-[#00D4AA]' : 'text-[#8899AA]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
