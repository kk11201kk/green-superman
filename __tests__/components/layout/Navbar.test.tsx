import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import Navbar from '@/components/layout/Navbar'

const messages = {
  nav: {
    about: '關於我們', products: '嚴選商品', greenCoin: '綠幣系統',
    toyExchange: '玩具交換', wellness: '心靈課程', news: '最新消息',
    portal: '會員入口', lang: 'EN', contact: '聯絡我們',
  },
}

describe('Navbar', () => {
  it('renders brand name', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <Navbar />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('Greenman')).toBeInTheDocument()
  })

  it('renders toy exchange link', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <Navbar />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('玩具交換')).toBeInTheDocument()
  })

  it('renders portal button', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <Navbar />
      </NextIntlClientProvider>
    )
    expect(screen.getAllByText('會員入口').length).toBeGreaterThan(0)
  })
})
