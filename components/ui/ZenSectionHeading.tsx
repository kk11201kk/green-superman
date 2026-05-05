import ZenLine from './ZenLine'
import ZenStamp from './ZenStamp'

interface ZenSectionHeadingProps {
  title: string
  subtitle?: string
  stamp?: string
  center?: boolean
}

export default function ZenSectionHeading({ title, subtitle, stamp, center = false }: ZenSectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {stamp && (
        <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
          <ZenStamp>{stamp}</ZenStamp>
        </div>
      )}
      <h2
        className="text-2xl font-bold mb-3"
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-green-dark)',
          letterSpacing: '0.1em',
        }}
      >
        {title}
      </h2>
      <ZenLine />
      {subtitle && (
        <p className="text-sm mt-3" style={{ color: 'var(--color-green-mid)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
