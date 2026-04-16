interface AssetGalleryProps {
  fullPage?: boolean
}

const MOCK_ASSETS = [
  {
    id: 'ASA-1094823456',
    name: 'RWA-245-A-2',
    owner: 'Rajesh K. Sharma',
    location: 'Guntur, Andhra Pradesh',
    area: '1,200 sq ft',
    score: 8,
    status: 'VERIFIED',
    date: 'Apr 14, 2026',
    txn: 'TXID-A1B2C3...7890',
  },
  {
    id: 'ASA-2039485761',
    name: 'RWA-089-C-1',
    owner: 'Lakshmi Devi',
    location: 'Vijayawada, Krishna District',
    area: '800 sq ft',
    score: 12,
    status: 'VERIFIED',
    date: 'Apr 12, 2026',
    txn: 'TXID-D4E5F6...1234',
  },
  {
    id: 'ASA-3847562910',
    name: 'RWA-567-B-3',
    owner: 'Suresh Naidu',
    location: 'Nellore, SPSR District',
    area: '2,400 sq ft',
    score: 19,
    status: 'VERIFIED',
    date: 'Apr 10, 2026',
    txn: 'TXID-G7H8I9...5678',
  },
  {
    id: 'ASA-4938271650',
    name: 'RWA-302-A-7',
    owner: 'Anitha Reddy',
    location: 'Tirupati, Chittoor District',
    area: '1,600 sq ft',
    score: 5,
    status: 'VERIFIED',
    date: 'Apr 08, 2026',
    txn: 'TXID-J1K2L3...9012',
  },
  {
    id: 'ASA-5726384910',
    name: 'RWA-112-D-4',
    owner: 'Venkat Rao',
    location: 'Kakinada, East Godavari',
    area: '950 sq ft',
    score: 22,
    status: 'VERIFIED',
    date: 'Apr 06, 2026',
    txn: 'TXID-M4N5O6...3456',
  },
  {
    id: 'ASA-6018374920',
    name: 'RWA-778-E-2',
    owner: 'Padma Kumari',
    location: 'Rajahmundry, East Godavari',
    area: '3,200 sq ft',
    score: 15,
    status: 'VERIFIED',
    date: 'Apr 04, 2026',
    txn: 'TXID-P7Q8R9...7890',
  },
]

export default function AssetGallery({ fullPage }: AssetGalleryProps) {
  const displayAssets = fullPage ? MOCK_ASSETS : MOCK_ASSETS.slice(0, 3)

  return (
    <section className={`${fullPage ? 'min-h-screen pt-28' : 'py-24'} px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {!fullPage && <span className="badge badge-green mb-4">Asset Registry</span>}
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
            {fullPage ? 'ChainVault ' : ''}Verified{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066FF]">
              On-Chain Assets
            </span>
          </h2>
          <p className="text-[#8899AA] text-lg max-w-xl mx-auto">
            Each asset below has passed AI verification. Ownership is permanently recorded on Algorand.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Verified', value: '6' },
            { label: 'Avg Risk Score', value: '13.5' },
            { label: 'Total Area', value: '10,150 sq ft' },
          ].map((s, i) => (
            <div key={i} className="card p-4 text-center">
              <div className="font-space font-bold text-xl text-[#00D4AA]">{s.value}</div>
              <div className="text-[#8899AA] text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayAssets.map((asset, i) => (
            <div key={i} className="card p-5 group">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4AA] to-[#0066FF] flex items-center justify-center">
                    <span className="text-[#050A14] text-xs font-black">CV</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm font-mono">{asset.name}</div>
                    <div className="text-[#8899AA] text-xs">{asset.id}</div>
                  </div>
                </div>
                <span className="badge badge-green text-[10px] py-1 px-2">
                  <span className="w-1 h-1 rounded-full bg-[#00D4AA]"></span>
                  {asset.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                {[
                  ['👤 Owner', asset.owner],
                  ['📍 Location', asset.location],
                  ['📐 Area', asset.area],
                  ['📅 Minted', asset.date],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-[#8899AA]">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>

              {/* Risk score bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#8899AA]">AI Risk Score</span>
                  <span className="text-[#00D4AA] font-bold">{asset.score}/100</span>
                </div>
                <div className="w-full h-1.5 bg-[#0D1626] rounded-full">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#00A882]"
                    style={{ width: `${asset.score}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-[rgba(0,212,170,0.1)] flex items-center justify-between">
                <span className="text-[#8899AA] text-xs font-mono">{asset.txn}</span>
                <a
                  href={`https://testnet.explorer.perawallet.app/asset/${asset.id.replace('ASA-', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00D4AA] text-xs hover:underline flex items-center gap-1"
                >
                  View ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
