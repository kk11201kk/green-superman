import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import HeroBanner from '@/components/home/HeroBanner'

const messages = {
  hero: {
    badge: 'Green Superman · 數位綠色通路',
    title: '境隨心轉 · 綠色循環',
    subtitle: '掌握通路，就是贏家',
    ctaPrimary: '立即加入會員',
    ctaSecondary: '了解更多',
  },
}

describe('HeroBanner', () => {
  it('renders the brand title', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <HeroBanner />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('境隨心轉 · 綠色循環')).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <HeroBanner />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('立即加入會員')).toBeInTheDocument()
    expect(screen.getByText('了解更多')).toBeInTheDocument()
  })
})
