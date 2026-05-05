import HeroBanner from '@/components/home/HeroBanner'
import StatsBar from '@/components/home/StatsBar'
import ProductsPreview from '@/components/home/ProductsPreview'
import ToyExchangeHighlight from '@/components/home/ToyExchangeHighlight'
import GreenCoinHighlight from '@/components/home/GreenCoinHighlight'
import NewsPreview from '@/components/home/NewsPreview'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <StatsBar />
      <ProductsPreview />
      <ToyExchangeHighlight />
      <GreenCoinHighlight />
      <NewsPreview />
    </>
  )
}
