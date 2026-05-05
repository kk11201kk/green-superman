'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function IdleExchangeHighlight() {
  const t = useTranslations('idleExchange')
  const locale = useLocale()

  const steps = [
    { num: 1, label: t('step1') },
    { num: 2, label: t('step2') },
    { num: 3, label: t('step3') },
  ]

  return (
    <section style={{ background: 'var(--color-green-pale)' }} className="py-16 px-4">
      <div className="mx-auto max-w-5xl flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-16">

        {/* Left (visually right on desktop): decorative panel */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl py-12 px-10 text-center flex-shrink-0 w-full md:w-56"
          style={{ backgroundColor: 'white', border: '2px solid var(--color-green-light)' }}
        >
          <span className="text-6xl mb-4">♻️</span>
          <p className="text-base font-semibold leading-snug" style={{ color: 'var(--color-green-primary)' }}>
            {locale === 'zh-TW' ? '登記物品' : 'Register items'}
            <br />
            {locale === 'zh-TW' ? '換走綠幣' : 'earn G-Coins'}
          </p>
        </div>

        {/* Right (visually left on desktop): content */}
        <div className="flex-1">
          <span
            className="inline-block rounded-full border px-3 py-1 text-xs font-semibold mb-4"
            style={{ borderColor: 'var(--color-green-primary)', color: 'var(--color-green-primary)' }}
          >
            {t('badge')}
          </span>

          <h2 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--color-green-dark)' }}>
            <span aria-hidden="true">♻️ </span>
            {t('title')}
          </h2>

          <p className="text-base mb-8" style={{ color: 'var(--color-green-mid)' }}>
            {t('description')}
          </p>

          <div className="flex items-center gap-3 mb-8 flex-wrap">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: 'var(--color-green-primary)' }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="text-xs font-medium text-center max-w-[80px]"
                    style={{ color: 'var(--color-green-dark)' }}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="text-lg font-bold mb-4" style={{ color: 'var(--color-green-light)' }}>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <Link
            href={`/${locale}/idle-exchange`}
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            {t('cta')}
          </Link>
        </div>

      </div>
    </section>
  )
}
