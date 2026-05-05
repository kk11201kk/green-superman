'use client'
import { useTranslations } from 'next-intl'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'

const CATEGORIES = ['有機無毒食糧', '天然清防護', '生活再生品', '預防保健', '心靈課程', '居家植栽', '健康維護器材', '季節友善農產', '節能智慧家電', '資源重生樣品']

export default function ProductsPreview() {
  const t = useTranslations('products')

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto">
        <ZenSectionHeading stamp="嚴選" title={t('title')} subtitle={t('subtitle')} center />
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-12">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="text-sm"
              style={{
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.2em',
                color: 'var(--color-green-ink)',
                borderBottom: '1px solid var(--color-zen-rule)',
                paddingBottom: 4,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
