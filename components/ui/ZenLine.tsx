interface ZenLineProps {
  vertical?: boolean
  className?: string
}

export default function ZenLine({ vertical = false, className = '' }: ZenLineProps) {
  if (vertical) {
    return (
      <div
        style={{ width: 1, background: 'var(--color-zen-rule)', alignSelf: 'stretch' }}
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
