'use client'
import { useTranslations } from 'next-intl'

const STATS = [
  { value: '2,000', labelKey: 'members' as const },
  { value: '30%', labelKey: 'discount' as const },
  { value: '600', labelKey: 'counters' as const },
]

export default function StatsBar() {
  const t = useTranslations('stats')

  return (
    <div style={{ background: 'var(--color-zen-paper)', borderTop: '1px solid var(--color-zen-rule)', borderBottom: '1px solid var(--color-zen-rule)' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x" style={{ borderColor: 'var(--color-zen-rule)' }}>
        {STATS.map((s) => (
          <div key={s.labelKey} className="py-10 px-6 text-center" style={{ borderColor: 'var(--color-zen-rule)' }}>
            <div className="zen-display mb-2" style={{ fontSize: 44, color: 'var(--color-green-ink)' }}>{s.value}</div>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{t(s.labelKey)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
