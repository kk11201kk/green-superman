import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import StatsBar from '@/components/home/StatsBar'

const messages = {
  stats: {
    members: '180天目標會員',
    discount: '最高生活折扣',
    counters: '嚴選商品專櫃',
    profit: '投資者每日分潤',
  },
}

describe('StatsBar', () => {
  it('renders all 4 stat labels', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <StatsBar />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('180天目標會員')).toBeInTheDocument()
    expect(screen.getByText('最高生活折扣')).toBeInTheDocument()
    expect(screen.getByText('嚴選商品專櫃')).toBeInTheDocument()
    expect(screen.getByText('投資者每日分潤')).toBeInTheDocument()
  })

  it('renders the stat values', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <StatsBar />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('2,000')).toBeInTheDocument()
    expect(screen.getByText('30%')).toBeInTheDocument()
  })
})
