import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders primary variant', () => {
    render(<Button variant="primary">立即加入</Button>)
    const btn = screen.getByRole('button', { name: '立即加入' })
    expect(btn).toBeInTheDocument()
  })

  it('renders outline variant', () => {
    render(<Button variant="outline">了解更多</Button>)
    expect(screen.getByRole('button', { name: '了解更多' })).toBeInTheDocument()
  })

  it('renders accent variant', () => {
    render(<Button variant="accent">立即加入會員</Button>)
    expect(screen.getByRole('button', { name: '立即加入會員' })).toBeInTheDocument()
  })
})
