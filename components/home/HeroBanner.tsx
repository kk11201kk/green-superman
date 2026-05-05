'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function HeroBanner() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section
      className="relative overflow-hidden py-24 px-4 text-center"
      style={{
        background: `linear-gradient(135deg, var(--color-green-dark) 0%, var(--color-green-primary) 50%, var(--color-green-mid) 100%)`,
      }}
    >
      {/* Badge */}
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-widest"
        style={{ color: 'var(--color-green-light)' }}
      >
        {t('badge')}
      </p>

      {/* Title */}
      <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
        {t('title')}
      </h1>

      {/* Subtitle */}
      <p
        className="mx-auto mb-10 max-w-xl text-base md:text-lg"
        style={{ color: 'var(--color-green-light)' }}
      >
        {t('subtitle')}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href={`/${locale}/portal`}
          className="rounded-lg px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-orange-accent)', color: 'var(--color-green-dark)' }}
        >
          {t('ctaPrimary')}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="rounded-lg border-2 px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          style={{
            borderColor: 'var(--color-green-light)',
            color: 'var(--color-green-light)',
          }}
        >
          {t('ctaSecondary')}
        </Link>
      </div>

      {/* Curved bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 rounded-t-[50%]"
        style={{ backgroundColor: 'var(--color-green-pale)' }}
      />
    </section>
  )
}
