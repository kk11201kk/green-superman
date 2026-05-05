import ZenStamp from './ZenStamp'
import ZenLine from './ZenLine'

interface ZenSectionHeadingProps {
  title: string
  subtitle?: string
  stamp?: string
  center?: boolean
}

export default function ZenSectionHeading({ title, subtitle, stamp, center = false }: ZenSectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {stamp && (
        <div className={`mb-6 ${center ? 'flex justify-center' : ''}`}>
          <ZenStamp>{stamp}</ZenStamp>
        </div>
      )}
      <h2
        className="zen-display mb-4"
        style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-green-ink)', fontWeight: 400 }}
      >
        {title}
      </h2>
      <div className={`mb-6 ${center ? 'flex justify-center' : ''}`}>
        <ZenLine width={40} />
      </div>
      {subtitle && (
        <p
          className="text-sm leading-loose"
          style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
