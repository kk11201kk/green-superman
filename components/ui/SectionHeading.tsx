interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${center ? 'text-center' : ''}`}>
      <h2 className="text-xl font-bold text-[var(--color-green-dark)]">{title}</h2>
      {subtitle && <p className="text-sm text-[var(--color-green-mid)] mt-1">{subtitle}</p>}
    </div>
  )
}
