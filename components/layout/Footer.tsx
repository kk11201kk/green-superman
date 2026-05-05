'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  return (
    <footer style={{ background: 'var(--color-green-dark)' }} className="py-8 text-center">
      <p className="text-base font-bold mb-2" style={{ color: 'var(--color-orange-accent)' }}>
        {t('mission')}
      </p>
      <p className="text-xs" style={{ color: 'var(--color-green-light)' }}>{t('rights')}</p>
    </footer>
  )
}
