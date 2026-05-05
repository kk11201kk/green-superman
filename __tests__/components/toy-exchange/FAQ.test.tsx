import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '@/components/toy-exchange/FAQ'

const faqs = [
  { q: '哪些玩具可以交換？', a: '完好無缺、可清洗的玩具均可。' },
  { q: '綠幣多久入帳？', a: '核驗通過後即時入帳。' },
]

describe('FAQ', () => {
  it('renders all questions', () => {
    render(<FAQ items={faqs} />)
    expect(screen.getByText('哪些玩具可以交換？')).toBeInTheDocument()
    expect(screen.getByText('綠幣多久入帳？')).toBeInTheDocument()
  })

  it('expands answer on click', async () => {
    render(<FAQ items={faqs} />)
    expect(screen.queryByText('完好無缺、可清洗的玩具均可。')).not.toBeVisible()
    await userEvent.click(screen.getByText('哪些玩具可以交換？'))
    expect(screen.getByText('完好無缺、可清洗的玩具均可。')).toBeVisible()
  })
})
