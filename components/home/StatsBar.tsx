'use client'
import { useTranslations } from 'next-intl'

const STATS = [
  { value: '2,000', labelKey: 'members' as const },
  { value: '30%', labelKey: 'discount' as const },
  { value: '10', labelKey: 'counters' as const },
  { value: '0.25%', labelKey: 'profit' as const },
]

export default function StatsBar() {
  const t = useTranslations('stats')

  return (
    <div
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center divide-y divide-gray-200 sm:flex-row sm:divide-x sm:divide-y-0">
        {STATS.map((stat) => (
          <div
            key={stat.labelKey}
            className="flex flex-1 flex-col items-center py-5 px-6 text-center"
          >
            <span
              className="text-3xl font-extrabold leading-none"
              style={{ color: 'var(--color-orange-accent)' }}
            >
              {stat.value}
            </span>
            <span
              className="mt-1 text-sm font-medium"
              style={{ color: 'var(--color-green-primary)' }}
            >
              {t(stat.labelKey)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
