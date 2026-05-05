import HeroBanner from '@/components/home/HeroBanner'
import MissionBanner from '@/components/home/MissionBanner'
import StatsBar from '@/components/home/StatsBar'
import ProductsPreview from '@/components/home/ProductsPreview'
import ToyExchangeHighlight from '@/components/home/ToyExchangeHighlight'
import IdleExchangeHighlight from '@/components/home/IdleExchangeHighlight'
import GreenCoinHighlight from '@/components/home/GreenCoinHighlight'
import MembershipCta from '@/components/home/MembershipCta'
import NewsPreview from '@/components/home/NewsPreview'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionBanner />
      <StatsBar />
      <ProductsPreview />
      <ToyExchangeHighlight />
      <IdleExchangeHighlight />
      <GreenCoinHighlight />
      <MembershipCta />
      <NewsPreview />
    </>
  )
}
