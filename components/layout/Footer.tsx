'use client'
import { useTranslations } from 'next-intl'
import ZenLine from '@/components/ui/ZenLine'

export default function Footer() {
  const t = useTranslations('footer')
  return (
    <footer style={{ background: 'var(--color-green-dark)' }} className="py-10 text-center px-6">
      <div className="max-w-xs mx-auto mb-5 opacity-30">
        <ZenLine />
      </div>
      <p
        className="text-base font-bold mb-3"
        style={{
          color: 'var(--color-zen-stamp)',
          fontFamily: 'var(--font-serif)',
          letterSpacing: '0.08em',
        }}
      >
        {t('mission')}
      </p>
      <p className="text-xs" style={{ color: 'var(--color-green-light)', letterSpacing: '0.06em' }}>
        {t('rights')}
      </p>
    </footer>
  )
}
