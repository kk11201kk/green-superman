import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  return (
    <footer style={{ background: 'var(--color-green-dark)' }} className="py-5 text-center">
      <p className="text-xs" style={{ color: 'var(--color-green-light)' }}>{t('rights')}</p>
    </footer>
  )
}
