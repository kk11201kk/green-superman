interface ZenEnsoProps {
  size?: number
  opacity?: number
  className?: string
}

export default function ZenEnso({ size = 80, opacity = 0.12, className = '' }: ZenEnsoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M 50 8 A 42 42 0 1 1 40 9.8"
        stroke="var(--color-green-dark)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
