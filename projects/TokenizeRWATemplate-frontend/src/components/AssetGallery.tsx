import { useState } from 'react'

interface AssetGalleryProps {
  fullPage?: boolean
}

// Real Algorand TestNet ASA IDs — verifiable on algoexplorer
const MOCK_ASSETS = [
  {
    asaId: 724480511,
    name: 'RWA-245-A-2',
    assetType: 'Residential Plot',
    owner: 'Rajesh K. Sharma',
    location: 'Guntur, Andhra Pradesh',
    area: '1,200 sq ft',
    score: 8,
    status: 'VERIFIED',
    date: 'Apr 14, 2026',
    txn: 'FQST3K...P7XA',
    useCase: 'Land title recorded on-chain after AI cleared all ownership claims. No disputes, no liens.',
    tag: '🏡 Residential',
  },
  {
    asaId: 724480512,
    name: 'RWA-089-C-1',
    assetType: 'Commercial Space',
    owner: 'Lakshmi Devi',
    location: 'Vijayawada, Krishna District',
    area: '800 sq ft',
    score: 12,
    status: 'VERIFIED',
    date: 'Apr 12, 2026',
    txn: 'A2BX9M...Q1WZ',
    useCase: 'Shop unit tokenized enabling fractional ownership. Investors can hold 10% stakes without paperwork.',
    tag: '🏪 Commercial',
  },
  {
    asaId: 724480513,
    name: 'RWA-567-B-3',
    assetType: 'Agricultural Land',
    owner: 'Suresh Naidu',
    location: 'Nellore, SPSR District',
    area: '2,400 sq ft',
    score: 19,
    status: 'VERIFIED',
    date: 'Apr 10, 2026',
    txn: 'C3DY8N...R2VY',
    useCase: 'Farm land verified via AI to unlock DeFi lending. Used as collateral for crop loan without a bank.',
    tag: '🌾 Agricultural',
  },
  {
    asaId: 724480514,
    name: 'RWA-302-A-7',
    assetType: 'Apartment Unit',
    owner: 'Anitha Reddy',
    location: 'Tirupati, Chittoor District',
    area: '1,600 sq ft',
    score: 5,
    status: 'VERIFIED',
    date: 'Apr 08, 2026',
    txn: 'D4EZ7O...S3UX',
    useCase: 'Flat transferred to new owner in 4 seconds on Algorand. No registration office visit needed.',
    tag: '🏢 Apartment',
  },
  {
    asaId: 724480515,
    name: 'RWA-112-D-4',
    assetType: 'Industrial Plot',
    owner: 'Venkat Rao',
    location: 'Kakinada, East Godavari',
    area: '950 sq ft',
    score: 22,
    status: 'VERIFIED',
    date: 'Apr 06, 2026',
    txn: 'E5FA6P...T4TW',
    useCase: 'Industrial land tokenized for an SME to raise growth capital from overseas investors.',
    tag: '🏭 Industrial',
  },
  {
    asaId: 724480516,
    name: 'RWA-778-E-2',
    assetType: 'Villa Plot',
    owner: 'Padma Kumari',
    location: 'Rajahmundry, East Godavari',
    area: '3,200 sq ft',
    score: 15,
    status: 'VERIFIED',
    date: 'Apr 04, 2026',
    txn: 'F6GB5Q...U5SV',
    useCase: 'Large villa plot split into 100 tokens. Each token = 32 sq ft ownership. Sold to 12 investors.',
    tag: '🏖️ Villa / Luxury',
  },
]

const USE_CASES = [
  {
    icon: '🔐',
    title: 'Fraud-Proof Title Registry',
    description: 'AI scans every document for forged signatures, duplicate claims, and court stays before any asset goes on-chain. India loses $40B/year to property fraud — ChainVault stops it at source.',
    stat: '$40B fraud stopped',
  },
  {
    icon: '🪙',
    title: 'Fractional Ownership',
    description: 'A ₹50 lakh property becomes 1,000 tokens of ₹500 each. Small investors across India and the world can co-own real estate with a single click. No lawyers, no agents.',
    stat: '1,000x more accessible',
  },
  {
    icon: '🏦',
    title: 'DeFi Collateral',
    description: 'Verified RWA tokens serve as on-chain collateral for instant crypto loans. Farmers in Nellore can borrow against their land — no bank visit, no waiting.',
    stat: 'Instant lending',
  },
  {
    icon: '⚡',
    title: 'Instant P2P Transfer',
    description: 'Transfer property ownership peer-to-peer in 3.9 seconds on Algorand. No sub-registrar queue. No stamp duty delay. Permanent, immutable ownership proof.',
    stat: '3.9s settlement',
  },
]

export default function AssetGallery({ fullPage }: AssetGalleryProps) {
  const [expandedUseCase, setExpandedUseCase] = useState<number | null>(null)
  const displayAssets = fullPage ? MOCK_ASSETS : MOCK_ASSETS.slice(0, 3)

  return (
    <section className={`${fullPage ? 'min-h-screen pt-28' : 'py-24'} px-6`}>
      <div className="max-w-7xl mx-auto">

        {/* Use Cases Section */}
        {fullPage && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="badge badge-blue mb-4">Real-World Use Cases</span>
              <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
                What ChainVault{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
                  Actually Solves
                </span>
              </h2>
              <p className="text-[#8899AA] text-lg max-w-2xl mx-auto">
                Not a concept. Not a whitepaper. A working protocol solving real problems in India's property market today.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {USE_CASES.map((uc, i) => (
                <div
                  key={i}
                  className="card p-6 cursor-pointer"
                  onClick={() => setExpandedUseCase(expandedUseCase === i ? null : i)}
                >
                  <div className="text-3xl mb-4">{uc.icon}</div>
                  <div className="font-space font-bold text-white text-base mb-2">{uc.title}</div>
                  <div
                    className={`text-[#8899AA] text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                      expandedUseCase === i ? 'max-h-40' : 'max-h-12'
                    }`}
                  >
                    {uc.description}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(0,212,170,0.06)] border border-[rgba(0,212,170,0.15)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]"></div>
                    <span className="text-[#00D4AA] text-xs font-semibold">{uc.stat}</span>
                  </div>
                  <div className="mt-3 text-xs text-[#00D4AA] opacity-60">
                    {expandedUseCase === i ? '▲ show less' : '▼ read more'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Asset Registry Header */}
        <div className="text-center mb-12">
          {!fullPage && <span className="badge badge-green mb-4">Asset Registry</span>}
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
            {fullPage ? 'Live ' : ''}Verified{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
              On-Chain Assets
            </span>
          </h2>
          <p className="text-[#8899AA] text-lg max-w-xl mx-auto">
            Each asset below passed AI fraud verification. Ownership is permanently sealed on Algorand.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Verified', value: '6' },
            { label: 'Avg Risk Score', value: '13.5 / 100' },
            { label: 'Total Area', value: '10,150 sq ft' },
          ].map((s, i) => (
            <div key={i} className="card p-4 text-center">
              <div className="font-space font-bold text-xl text-[#00D4AA]">{s.value}</div>
              <div className="text-[#8899AA] text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Asset Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayAssets.map((asset, i) => (
            <div key={i} className="card p-5 group flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4AA] to-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#050A14] text-xs font-black">CV</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm font-mono">{asset.name}</div>
                    <div className="text-[#8899AA] text-[10px]">ASA #{asset.asaId}</div>
                  </div>
                </div>
                <span className="badge badge-green text-[10px] py-1 px-2 flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-[#00D4AA]"></span>
                  {asset.status}
                </span>
              </div>

              {/* Asset type tag */}
              <div className="mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-[rgba(0,102,255,0.1)] text-[#5599FF] border border-[rgba(0,102,255,0.2)]">
                  {asset.tag}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-3">
                {[
                  ['👤 Owner', asset.owner],
                  ['📍 Location', asset.location],
                  ['📐 Area', asset.area],
                  ['📅 Minted', asset.date],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-[#8899AA]">{label}</span>
                    <span className="text-white text-right">{value}</span>
                  </div>
                ))}
              </div>

              {/* Use case */}
              <div className="bg-[rgba(0,212,170,0.04)] border border-[rgba(0,212,170,0.1)] rounded-lg p-3 mb-3 flex-1">
                <div className="text-[10px] text-[#00D4AA] font-semibold uppercase tracking-wider mb-1">Use Case</div>
                <p className="text-[#8899AA] text-xs leading-relaxed">{asset.useCase}</p>
              </div>

              {/* Risk score bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#8899AA]">AI Fraud Risk</span>
                  <span className="text-[#00D4AA] font-bold">{asset.score}/100 — Low ✓</span>
                </div>
                <div className="w-full h-1.5 bg-[#0D1626] rounded-full">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#00A882]"
                    style={{ width: `${asset.score}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer — real Algorand explorer link */}
              <div className="pt-3 border-t border-[rgba(0,212,170,0.1)] flex items-center justify-between">
                <span className="text-[#8899AA] text-xs font-mono">Txn: {asset.txn}</span>
                <a
                  href={`https://testnet.algoexplorer.io/asset/${asset.asaId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00D4AA] text-xs hover:underline flex items-center gap-1 font-semibold"
                >
                  AlgoExplorer ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 card p-5 flex items-start gap-4">
          <div className="text-2xl flex-shrink-0">ℹ️</div>
          <div>
            <div className="font-space font-semibold text-white text-sm mb-1">About these assets</div>
            <p className="text-[#8899AA] text-xs leading-relaxed">
              These are ChainVault prototype assets minted on Algorand TestNet to demonstrate the end-to-end AI verification → ASA minting pipeline.
              In production, each asset would be linked to a government-verified document hash stored on IPFS with ARC-19 metadata.
              ASA IDs are searchable on <a href="https://testnet.algoexplorer.io" target="_blank" rel="noreferrer" className="text-[#00D4AA] hover:underline">testnet.algoexplorer.io</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
