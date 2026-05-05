'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="py-16 px-6 text-center" style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)' }}>
      <p className="zen-display mb-6" style={{ fontSize: 28, letterSpacing: '0.15em' }}>境隨心轉</p>
      <div className="flex justify-center mb-6">
        <div style={{ height: 1, width: 32, background: 'var(--color-zen-paper)', opacity: 0.3 }} />
      </div>
      <p className="text-sm mb-3" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.2em', opacity: 0.85 }}>
        {t('mission')}
      </p>
      <p className="text-xs" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em', opacity: 0.55 }}>
        {t('rights')}
      </p>
    </footer>
  )
}
