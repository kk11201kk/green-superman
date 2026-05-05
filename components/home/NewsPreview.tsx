'use client'
import { useTranslations } from 'next-intl'
import ZenLine from '@/components/ui/ZenLine'

const NEWS_ITEMS = [
  {
    title: '🧸 6月玩具交換日 — 台南首場活動公告',
    date: '2025.06.01',
  },
  {
    title: '正念減壓工作坊 — 心靈環保課程開放報名',
    date: '2025.05.20',
  },
]

export default function NewsPreview() {
  const t = useTranslations('news')

  return (
    <section className="py-16 px-6" style={{ background: 'var(--color-zen-paper)' }}>
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-2xl font-extrabold mb-3"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.08em' }}
        >
          {t('title')}
        </h2>
        <ZenLine className="mb-6" />

        <ul className="flex flex-col">
          {NEWS_ITEMS.map((item) => (
            <li
              key={item.date}
              className="flex items-center justify-between py-5 gap-4"
              style={{ borderBottom: '1px solid var(--color-zen-rule)' }}
            >
              <span className="text-base font-medium" style={{ color: 'var(--color-green-ink)' }}>
                {item.title}
              </span>
              <span
                className="text-xs whitespace-nowrap flex-shrink-0"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-zen-stamp)', letterSpacing: '0.06em' }}
              >
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
