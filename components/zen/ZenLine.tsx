interface ZenLineProps {
  vertical?: boolean
  width?: number
  className?: string
}

export default function ZenLine({ vertical = false, width, className = '' }: ZenLineProps) {
  if (vertical) {
    return (
      <div
        style={{ width: 1, background: 'var(--color-zen-rule)', alignSelf: 'stretch' }}
        className={className}
      />
    )
  }
  if (width) {
    return (
      <div
        style={{ height: 1, width, background: 'var(--color-zen-rule)' }}
        className={className}
      />
    )
  }
  return (
    <div
      style={{ height: 1, background: 'var(--color-zen-rule)' }}
      className={`w-full ${className}`}
    />
  )
}
