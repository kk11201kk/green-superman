'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenLine from '@/components/ui/ZenLine'

export default function GreenCoinHighlight() {
  const t = useTranslations('greenCoin')
  const locale = useLocale()

  return (
    <section className="py-16 px-6" style={{ background: 'var(--color-zen-paper)' }}>
      <div className="mx-auto max-w-5xl flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        {/* Left text content */}
        <div className="flex-1">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.06em' }}
          >
            {t('title')}
          </h2>
          <ZenLine className="mb-5" />
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>
            {t('description')}
          </p>
        </div>

        {/* Right card */}
        <div
          className="flex flex-col items-center justify-center rounded-xl py-10 px-8 text-center flex-shrink-0 w-full md:w-52"
          style={{
            background: 'var(--color-zen-paper-warm)',
            border: '1px solid var(--color-zen-rule)',
          }}
        >
          <span className="text-5xl mb-3">♻️</span>
          <p
            className="text-sm font-semibold mb-5"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.08em' }}
          >
            {locale === 'zh-TW' ? '以物換物' : 'Exchange & earn'}
          </p>
          <Link
            href={`/${locale}/green-coin`}
            className="inline-block rounded px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'var(--color-green-dark)',
              color: 'var(--color-zen-paper)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.06em',
            }}
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
