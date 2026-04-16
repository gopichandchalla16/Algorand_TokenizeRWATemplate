import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import AIVerifier from './components/AIVerifier'
import StatsSection from './components/StatsSection'
import WhyAlgorand from './components/WhyAlgorand'
import AssetGallery from './components/AssetGallery'
import RoadmapSection from './components/RoadmapSection'
import FooterSection from './components/FooterSection'

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'verify' | 'assets'>('home')

  return (
    <div className="gradient-bg grid-pattern min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'home' && (
        <>
          <HeroSection setActiveTab={setActiveTab} />
          <StatsSection />
          <HowItWorks />
          <WhyAlgorand />
          <AssetGallery />
          <RoadmapSection />
          <FooterSection />
        </>
      )}
      {activeTab === 'verify' && <AIVerifier />}
      {activeTab === 'assets' && <AssetGallery fullPage />}
    </div>
  )
}
