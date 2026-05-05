'use client'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenLine from '@/components/zen/ZenLine'

const ZH = ['登記閒置', '核驗發幣', '折抵商品', '兌換課程']
const EN = ['Register', 'Verify', 'Discount', 'Redeem']

export default function GreenCoinHighlight() {
  const t = useTranslations('greenCoin')
  const locale = useLocale()
  const steps = locale === 'zh-TW' ? ZH : EN
  const nums = locale === 'zh-TW' ? ['一', '二', '三', '四'] : ['1', '2', '3', '4']

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-zen-paper-warm)' }}>
      <div className="max-w-4xl mx-auto">
        <ZenSectionHeading
          stamp={locale === 'zh-TW' ? '綠幣循環' : 'G·COIN'}
          title={t('title')}
          subtitle={t('description')}
          center
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px my-12" style={{ background: 'var(--color-zen-rule)' }}>
          {steps.map((s, i) => (
            <div key={s} className="px-6 py-10 text-center" style={{ background: 'var(--color-zen-paper-warm)' }}>
              <div className="zen-serif mb-4" style={{ fontSize: 36, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {nums[i]}
              </div>
              <div className="flex justify-center mb-4">
                <ZenLine width={20} />
              </div>
              <div style={{ fontSize: 13, color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
                {s}
              </div>
            </div>
          ))}
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
