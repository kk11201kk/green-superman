'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'

const ITEMS = [
  { title: '六月玩具交換日 — 台南首場活動公告', date: '2025.06.01' },
  { title: '正念減壓工作坊 — 心靈環保課程開放報名', date: '2025.05.20' },
  { title: '綠超人台南示範據點正式啟動', date: '2025.05.10' },
]

export default function NewsPreview() {
  const t = useTranslations('news')
  const locale = useLocale()

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-3xl mx-auto">
        <ZenSectionHeading stamp="消息" title={t('title')} center />
        <ul className="flex flex-col">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-baseline justify-between gap-6 py-6"
              style={{ borderBottom: '1px solid var(--color-zen-rule)' }}
            >
              <span className="text-sm" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
                {item.title}
              </span>
              <span className="text-xs flex-shrink-0" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
                {item.date}
              </span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-10">
          <Link
            href={`/${locale}/news`}
            className="text-sm pb-1 transition-opacity hover:opacity-70"
            style={{ borderBottom: '1px solid var(--color-green-ink)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {locale === 'zh-TW' ? '所有消息' : 'All News'}
          </Link>
        </div>
      </div>
    </section>
  )
}
