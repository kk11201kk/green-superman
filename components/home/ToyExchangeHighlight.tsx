'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenStamp from '@/components/ui/ZenStamp'
import ZenLine from '@/components/ui/ZenLine'

export default function ToyExchangeHighlight() {
  const t = useTranslations('toyExchange')
  const locale = useLocale()

  const steps = [
    { num: 1, label: t('step1') },
    { num: 2, label: t('step2') },
    { num: 3, label: t('step3') },
  ]

  return (
    <section className="py-16 px-6" style={{ background: 'var(--color-zen-paper)' }}>
      <div className="mx-auto max-w-5xl flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        {/* Left panel */}
        <div className="flex-1">
          <div className="mb-5">
            <ZenStamp rotate={-1}>{t('badge')}</ZenStamp>
          </div>

          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.06em' }}
          >
            {t('title')}
          </h2>

          <ZenLine className="mb-5" />

          <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>
            {t('description')}
          </p>

          {/* Steps */}
          <div className="flex items-start gap-4 mb-8 flex-wrap">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1.5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded text-sm font-bold"
                    style={{
                      background: 'var(--color-green-dark)',
                      color: 'var(--color-zen-paper)',
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="text-xs font-medium text-center max-w-[72px]"
                    style={{ color: 'var(--color-green-mid)' }}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="text-base mb-5" style={{ color: 'var(--color-zen-rule)' }}>→</span>
                )}
              </div>
            ))}
          </div>

          <Link
            href={`/${locale}/toy-exchange`}
            className="inline-block rounded px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
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

        {/* Right decorative panel */}
        <div
          className="flex flex-col items-center justify-center rounded-xl py-12 px-10 text-center flex-shrink-0 w-full md:w-56"
          style={{
            background: 'var(--color-zen-paper-warm)',
            border: '1px solid var(--color-zen-rule)',
          }}
        >
          <span className="text-6xl mb-4">🧸</span>
          <p
            className="text-sm font-semibold leading-loose"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.08em' }}
          >
            {locale === 'zh-TW' ? '帶來舊玩具\n換走綠幣' : 'Bring old toys\nearn G-Coins'}
          </p>
        </div>
      </div>
    </section>
  )
}
