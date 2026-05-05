import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders primary variant with green background class', () => {
    render(<Button variant="primary">立即加入</Button>)
    const btn = screen.getByRole('button', { name: '立即加入' })
    expect(btn).toBeInTheDocument()
    expect(btn.className).toContain('bg-[var(--color-green-primary)]')
  })

  it('renders outline variant', () => {
    render(<Button variant="outline">了解更多</Button>)
    expect(screen.getByRole('button', { name: '了解更多' })).toBeInTheDocument()
  })

  it('renders accent variant with orange background class', () => {
    render(<Button variant="accent">立即加入會員</Button>)
    const btn = screen.getByRole('button', { name: '立即加入會員' })
    expect(btn).toBeInTheDocument()
    expect(btn.className).toContain('bg-[var(--color-orange-accent)]')
  })

  it('fires onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>點我</Button>)
    fireEvent.click(screen.getByRole('button', { name: '點我' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
