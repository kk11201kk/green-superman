'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'

const ZH = ['登記閒置', '核驗發幣', '折抵商品', '兌換課程']
const EN = ['Register', 'Verify', 'Discount', 'Redeem']

export default function GreenCoinHighlight() {
  const t = useTranslations('greenCoin')
  const locale = useLocale()
  const steps = locale === 'zh-TW' ? ZH : EN

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-zen-paper-warm)' }}>
      <div className="max-w-4xl mx-auto">
        <ZenSectionHeading stamp="綠幣循環" title={t('title')} subtitle={t('description')} center />

        <div className="relative max-w-md mx-auto aspect-square my-12">
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <circle cx="100" cy="100" r="78" fill="none" stroke="var(--color-zen-rule)" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="100" cy="100" r="78" fill="none" stroke="var(--color-green-ink)" strokeWidth="1.5"
              strokeDasharray="40 285" strokeLinecap="round" transform="rotate(-90 100 100)" opacity="0.5" />
          </svg>
          {steps.map((s, i) => {
            const angle = (i * 90 - 90) * (Math.PI / 180)
            const x = 50 + 42 * Math.cos(angle)
            const y = 50 + 42 * Math.sin(angle)
            return (
              <div key={s} className="absolute text-center" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}>
                <div className="zen-serif mb-1" style={{ fontSize: 28, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                  {['一', '二', '三', '四'][i]}
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
                  {s}
                </div>
              </div>
            )
          })}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="zen-display" style={{ fontSize: 36, color: 'var(--color-green-ink)' }}>綠幣</div>
              <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>G·COIN</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/green-coin`}
            className="inline-block px-8 py-3 text-sm transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
