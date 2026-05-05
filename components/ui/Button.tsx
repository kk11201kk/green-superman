'use client'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'accent'

interface ButtonProps {
  variant?: Variant
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = 'px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors'
  const variants = {
    primary: 'bg-[var(--color-green-primary)] text-white hover:bg-[var(--color-green-secondary)]',
    outline: 'border-2 border-[var(--color-green-primary)] text-[var(--color-green-primary)] hover:bg-[var(--color-green-light)]',
    accent: 'bg-[var(--color-orange-accent)] text-[var(--color-green-dark)] hover:opacity-90',
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
