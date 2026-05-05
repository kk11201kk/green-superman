'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenEnso from '@/components/zen/ZenEnso'

export default function HeroBanner() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--color-zen-paper)' }}>
      <ZenEnso size={420} className="absolute -right-20 -top-20" opacity={0.08} />
      <ZenEnso size={280} className="absolute -left-16 bottom-10" opacity={0.06} />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
        <p className="text-[11px] mb-10" style={{ color: 'var(--color-green-mid)', letterSpacing: '0.4em', fontFamily: 'var(--font-serif)' }}>
          {t('badge')}
        </p>

        <h1 className="zen-display mb-1" style={{ fontSize: 'clamp(64px, 11vw, 140px)', color: 'var(--color-green-ink)' }}>
          境隨心轉
        </h1>
        <div className="flex justify-center my-6">
          <div style={{ height: 1, width: 60, background: 'var(--color-zen-rule)' }} />
        </div>
        <h2 className="zen-display mb-10" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--color-green-mid)', fontWeight: 400 }}>
          綠色循環 · 內在富足
        </h2>

        <p className="max-w-xl mx-auto mb-12 text-base leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
          {t('subtitle')}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}/portal`}
            className="px-9 py-3.5 text-sm transition-opacity hover:opacity-85"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="px-9 py-3.5 text-sm transition-colors hover:bg-black/5"
            style={{ border: '1px solid var(--color-green-ink)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>
    </section>
  )
}
