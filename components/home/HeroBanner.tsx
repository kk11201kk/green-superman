'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenEnso from '@/components/ui/ZenEnso'
import ZenStamp from '@/components/ui/ZenStamp'

export default function HeroBanner() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section
      className="relative overflow-hidden py-28 px-6 text-center"
      style={{ background: 'var(--color-green-dark)' }}
    >
      {/* Background ensō decorations */}
      <div className="absolute top-8 left-8 pointer-events-none">
        <ZenEnso size={140} opacity={0.07} />
      </div>
      <div className="absolute bottom-16 right-12 pointer-events-none">
        <ZenEnso size={200} opacity={0.05} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <ZenEnso size={400} opacity={0.03} />
      </div>

      {/* Stamp badge */}
      <div className="flex justify-center mb-8">
        <ZenStamp rotate={-1} size="lg">{t('badge')}</ZenStamp>
      </div>

      {/* Title */}
      <h1
        className="mb-5 text-4xl md:text-5xl lg:text-6xl font-black text-white"
        style={{
          fontFamily: 'var(--font-serif)',
          letterSpacing: '0.06em',
          lineHeight: 1.3,
        }}
      >
        {t('title')}
      </h1>

      {/* Subtitle */}
      <p
        className="mx-auto mb-10 max-w-xl text-base md:text-lg"
        style={{ color: 'var(--color-green-light)', lineHeight: 1.8, letterSpacing: '0.04em' }}
      >
        {t('subtitle')}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href={`/${locale}/portal`}
          className="rounded px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-zen-stamp)',
            color: 'var(--color-zen-paper)',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.1em',
          }}
        >
          {t('ctaPrimary')}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="rounded border px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          style={{
            borderColor: 'var(--color-green-light)',
            color: 'var(--color-green-light)',
            letterSpacing: '0.08em',
          }}
        >
          {t('ctaSecondary')}
        </Link>
      </div>

      {/* Paper bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{
          background: 'var(--color-zen-paper)',
          clipPath: 'ellipse(55% 100% at 50% 100%)',
        }}
      />
    </section>
  )
}
