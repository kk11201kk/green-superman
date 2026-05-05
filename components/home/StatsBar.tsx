'use client'
import { useTranslations } from 'next-intl'

const STATS = [
  { value: '2,000', labelKey: 'members' as const },
  { value: '30%', labelKey: 'discount' as const },
  { value: '600+', labelKey: 'counters' as const },
]

export default function StatsBar() {
  const t = useTranslations('stats')

  return (
    <div
      style={{
        background: 'var(--color-zen-paper)',
        borderTop: '1px solid var(--color-zen-rule)',
        borderBottom: '1px solid var(--color-zen-rule)',
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-stretch sm:flex-row">
        {STATS.map((stat, i) => (
          <div key={stat.labelKey} className="flex items-stretch flex-1">
            {i > 0 && (
              <div
                className="hidden sm:block self-stretch"
                style={{ width: 1, background: 'var(--color-zen-rule)', margin: '16px 0' }}
              />
            )}
            <div className="flex flex-1 flex-col items-center py-8 px-6 text-center">
              <span
                className="text-3xl font-extrabold leading-none mb-1"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-zen-stamp)' }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: 'var(--color-green-mid)', letterSpacing: '0.1em' }}
              >
                {t(stat.labelKey)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
