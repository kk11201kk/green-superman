'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

export default function ToyExchangeHighlight() {
  const t = useTranslations('toyExchange')
  const locale = useLocale()
  const steps = [t('step1'), t('step2'), t('step3')]
  const chars = ['攜', '核', '幣']

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-zen-paper-warm)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <ZenStamp>玩具交換</ZenStamp>
          </div>
          <h2 className="zen-display mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--color-green-ink)' }}>
            {t('title')}
          </h2>
          <div className="flex justify-center mb-6">
            <ZenLine width={40} />
          </div>
          <p className="max-w-lg mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {chars.map((c, i) => (
            <div key={c} className="text-center">
              <div className="zen-display mb-4" style={{ fontSize: 64, color: 'var(--color-green-ink)' }}>{c}</div>
              <div className="flex justify-center mb-3">
                <ZenLine width={24} />
              </div>
              <p className="text-xs" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}>
                {steps[i]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/toy-exchange`}
            className="inline-block px-8 py-3 text-sm transition-opacity hover:opacity-70"
            style={{ border: '1px solid var(--color-green-ink)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
