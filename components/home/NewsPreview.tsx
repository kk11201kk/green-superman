'use client'
import { useTranslations } from 'next-intl'

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
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2
          className="text-3xl font-extrabold mb-8"
          style={{ color: 'var(--color-green-dark)' }}
        >
          {t('title')}
        </h2>

        {/* News items */}
        <ul className="flex flex-col gap-0 divide-y divide-gray-100">
          {NEWS_ITEMS.map((item) => (
            <li
              key={item.date}
              className="flex items-center justify-between py-5 gap-4"
            >
              <span
                className="text-base font-medium"
                style={{ color: 'var(--color-green-dark)' }}
              >
                {item.title}
              </span>
              <span
                className="text-sm whitespace-nowrap flex-shrink-0"
                style={{ color: 'var(--color-green-secondary)' }}
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
