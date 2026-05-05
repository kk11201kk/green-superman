'use client'
import { useTranslations } from 'next-intl'
import ZenLine from '@/components/ui/ZenLine'

const CATEGORIES = [
  { emoji: '🌾', name: '有機無毒食糧' },
  { emoji: '🧴', name: '天然清防護' },
  { emoji: '♻️', name: '生活再生品' },
  { emoji: '💊', name: '預防保健' },
  { emoji: '🧘', name: '心靈課程' },
  { emoji: '🌱', name: '居家植栽' },
  { emoji: '🏋️', name: '健康維護器材' },
  { emoji: '🌽', name: '季節友善農產' },
  { emoji: '💡', name: '節能智慧家電' },
  { emoji: '🔄', name: '資源重生樣品' },
]

export default function ProductsPreview() {
  const t = useTranslations('products')

  return (
    <section className="py-16 px-6" style={{ background: 'var(--color-zen-paper-warm)' }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-extrabold mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.06em' }}
          >
            {t('title')}
          </h2>
          <ZenLine className="max-w-xs mx-auto mb-3" />
          <p className="text-sm" style={{ color: 'var(--color-green-mid)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <span
              key={cat.name}
              className="flex items-center gap-2 rounded px-4 py-2 text-sm font-medium"
              style={{
                border: '1px solid var(--color-zen-rule)',
                color: 'var(--color-green-dark)',
                background: 'var(--color-zen-paper)',
              }}
            >
              <span>{cat.emoji}</span>
              <span style={{ letterSpacing: '0.04em' }}>{cat.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
