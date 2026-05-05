'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function GreenCoinHighlight() {
  const t = useTranslations('greenCoin')
  const locale = useLocale()

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: 'var(--color-green-pale)' }}
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        {/* Left text content */}
        <div className="flex-1">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ color: 'var(--color-green-dark)' }}
          >
            <span aria-hidden="true">🪙 </span>
            {t('title')}
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-green-primary)' }}
          >
            {t('description')}
          </p>
        </div>

        {/* Right card */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl border-2 py-10 px-8 text-center flex-shrink-0 w-full md:w-52"
          style={{
            borderColor: 'var(--color-green-secondary)',
            backgroundColor: 'white',
          }}
        >
          <span className="text-5xl mb-3">♻️</span>
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: 'var(--color-green-dark)' }}
          >
            以物換物
          </p>
          <Link
            href={`/${locale}/green-coin`}
            className="inline-block rounded-lg px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
