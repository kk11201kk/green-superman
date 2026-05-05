'use client'
import { useTranslations } from 'next-intl'

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
    <section
      className="py-16 px-4"
      style={{ backgroundColor: 'var(--color-green-pale)' }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-extrabold mb-2"
            style={{ color: 'var(--color-green-dark)' }}
          >
            {t('title')}
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-green-primary)' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <span
              key={cat.name}
              className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: 'var(--color-green-secondary)',
                color: 'var(--color-green-dark)',
                backgroundColor: 'white',
              }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
