import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * ChainVault Protocol - Home Page
 * Trusted infrastructure for real-world asset tokenization on Algorand
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-white dark:bg-indigo-950">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Institutional RWA Infrastructure
          </div>

          <h1 className="mt-6 text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Tokenize Your Assets
            <span className="block text-indigo-600 dark:text-indigo-400">On-Chain. Today.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ChainVault Protocol provides trusted infrastructure for real-world asset tokenization.
            Create Algorand Standard Assets with institutional-grade compliance features, instantly and at scale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-semibold transition text-white ${
                activeAddress
                  ? 'bg-indigo-600 hover:bg-indigo-700 shadow-md'
                  : 'bg-slate-400 cursor-not-allowed'
              }`}
            >
              Launch Protocol
            </Link>

            <a
              className="px-8 py-3 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Learn about ASAs
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-slate-600 dark:text-slate-400 text-sm">
              Connect your wallet in the top-right to get started with your tokenization pilot.
            </p>
          )}

          {/* Trust Row */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
              <span>3-second finality on Algorand</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
              <span>Sub-cent transaction costs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
              <span>Compliance-ready features</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            From Concept to Blockchain in 4 Steps
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A streamlined workflow designed for institutional users and blockchain pioneers.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Step 1 */}
          <div className="group rounded-xl border border-slate-200 dark:border-indigo-800/40 bg-slate-50 dark:bg-indigo-900/20 backdrop-blur p-8 hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition">
            <div className="flex items-start gap-4">
              <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                1
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Connect Wallet</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pera, Defly, Exodus, or KMD. One-click authentication with your keys secured locally.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-indigo-800/40 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Authentication</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Instant</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group rounded-xl border border-slate-200 dark:border-indigo-800/40 bg-slate-50 dark:bg-indigo-900/20 backdrop-blur p-8 hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition">
            <div className="flex items-start gap-4">
              <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                2
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Define Your Asset</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Configure name, symbol, supply, decimals, and compliance roles. Fully customizable.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-indigo-800/40 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Configuration</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Flexible</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group rounded-xl border border-slate-200 dark:border-indigo-800/40 bg-slate-50 dark:bg-indigo-900/20 backdrop-blur p-8 hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition">
            <div className="flex items-start gap-4">
              <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                3
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Mint on TestNet</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  One blockchain transaction. Your Algorand Standard Asset is live instantly.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-indigo-800/40 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>On-chain</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Immutable</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group rounded-xl border border-slate-200 dark:border-indigo-800/40 bg-slate-50 dark:bg-indigo-900/20 backdrop-blur p-8 hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition">
            <div className="flex items-start gap-4">
              <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                4
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transfer & Trade</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Send ALGO, USDC, or your custom ASA using our integrated transfer module.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-indigo-800/40 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Exchange</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Seamless</span>
            </div>
          </div>

        </div>
      </div>

      {/* Compliance Features — Full width background */}
      <div className="bg-indigo-50 dark:bg-indigo-900/10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                Built for Compliance & Control
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Manager Role</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Update asset configuration and metadata anytime</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Freeze Account Authority</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Restrict transfers for regulatory compliance</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Clawback Mechanism</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Recover tokens when legally required</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Metadata Support</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Link to off-chain legal documents and compliance metadata</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Layer 1 Native</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">No smart contract risk. Pure Algorand Standard Asset.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Terminal Config Card */}
            <div className="bg-slate-900 dark:bg-slate-950 rounded-xl border border-slate-800 p-8 font-mono text-sm">
              <p className="text-slate-400 mb-6 text-xs uppercase tracking-wider">Asset Configuration Example</p>
              <div className="space-y-3">
                <div>
                  <span className="text-slate-500 text-xs">Name</span>
                  <span className="text-amber-400 block">Real Estate Fund Token (Pilot)</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">Symbol</span>
                  <span className="text-amber-400 block">REFUND</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">Total Supply</span>
                  <span className="text-amber-400 block">100,000,000</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">Decimals</span>
                  <span className="text-amber-400 block">2</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">Manager</span>
                  <span className="text-amber-400 block">Your Wallet Address</span>
                </div>
                <div className="border-t border-slate-700 pt-3 mt-3">
                  <span className="text-slate-500 text-xs">Network</span>
                  <span className="text-green-400 block">✅ Algorand TestNet</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* POC Notice Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-4 text-center text-sm text-amber-900 dark:text-amber-300">
          🔬 This is a proof-of-concept demo built during the Algorand Web3 Masterclasses Batch 3 — Session 4 &amp; 5. Algorand TestNet only. Not for production use.
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-900 dark:to-indigo-950 border border-indigo-500/30 dark:border-indigo-800 p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Pilot ChainVault Protocol?</h2>
          <p className="text-lg text-indigo-100 dark:text-indigo-300 mb-10 max-w-2xl mx-auto">
            Connect your Algorand wallet and deploy your first real-world asset token in seconds.
            Zero setup complexity. TestNet ready.
          </p>
          <Link
            to="/tokenize"
            className={`inline-block px-10 py-3 rounded-lg font-semibold transition ${
              activeAddress
                ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                : 'bg-indigo-400 text-white cursor-not-allowed'
            }`}
          >
            Launch Protocol
          </Link>
        </div>
      </div>

    </div>
  )
}