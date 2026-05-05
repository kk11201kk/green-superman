import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import ToyExchangeHighlight from '@/components/home/ToyExchangeHighlight'

const messages = {
  toyExchange: {
    badge: '特色服務',
    title: '社區玩具交換站',
    description: '孩子長大了，玩具也該繼續被愛。',
    step1: '帶玩具到據點',
    step2: '現場衛生核驗',
    step3: '綠幣即時入帳',
    cta: '查看交換規則 →',
  },
}

describe('ToyExchangeHighlight', () => {
  it('renders title and all 3 steps', () => {
    render(
      <NextIntlClientProvider locale="zh-TW" messages={messages}>
        <ToyExchangeHighlight />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('社區玩具交換站')).toBeInTheDocument()
    expect(screen.getByText('帶玩具到據點')).toBeInTheDocument()
    expect(screen.getByText('現場衛生核驗')).toBeInTheDocument()
    expect(screen.getByText('綠幣即時入帳')).toBeInTheDocument()
  })
})
