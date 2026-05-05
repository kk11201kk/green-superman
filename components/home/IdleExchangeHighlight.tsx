'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

export default function IdleExchangeHighlight() {
  const t = useTranslations('idleExchange')
  const locale = useLocale()
  const steps = [t('step1'), t('step2'), t('step3')]

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-6">
            <ZenStamp rotate={2}>閒置交換</ZenStamp>
          </div>
          <h2 className="zen-display mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--color-green-ink)' }}>
            {t('title')}
          </h2>
          <ZenLine width={40} />
          <p className="mt-6 mb-8 text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {t('description')}
          </p>
          <Link
            href={`/${locale}/idle-exchange`}
            className="inline-block text-sm pb-1 transition-opacity hover:opacity-70"
            style={{ borderBottom: '1px solid var(--color-green-ink)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('cta')}
          </Link>
        </div>

        <ol className="flex flex-col gap-5">
          {steps.map((s, i) => (
            <li key={i} className="flex items-baseline gap-5 pb-5" style={{ borderBottom: '1px solid var(--color-zen-rule)' }}>
              <span className="zen-serif" style={{ fontSize: 32, color: 'var(--color-zen-stamp)', fontWeight: 300, minWidth: 40 }}>
                {['一', '二', '三'][i]}
              </span>
              <span className="text-sm" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
