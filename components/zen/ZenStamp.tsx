interface ZenStampProps {
  children: React.ReactNode
  rotate?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function ZenStamp({ children, rotate = -2, size = 'md' }: ZenStampProps) {
  const sizes = {
    sm: { px: 8, py: 4, fs: 10 },
    md: { px: 10, py: 6, fs: 11 },
    lg: { px: 14, py: 8, fs: 13 },
  }
  const s = sizes[size]

  return (
    <span
      style={{
        display: 'inline-block',
        background: 'var(--color-zen-stamp)',
        color: 'var(--color-zen-paper)',
        fontFamily: 'var(--font-serif)',
        letterSpacing: '0.15em',
        padding: `${s.py}px ${s.px}px`,
        fontSize: s.fs,
        borderRadius: 2,
        transform: `rotate(${rotate}deg)`,
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 1px 0 rgba(0,0,0,0.1)',
        lineHeight: 1.5,
        userSelect: 'none',
      }}
    >
      {children}
    </span>
  )
}
