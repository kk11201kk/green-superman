import { getTranslations } from 'next-intl/server'

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'portal' })

  return (
    <div className="max-w-sm mx-auto px-6 py-20 text-center">
      <div className="text-5xl mb-4">🔐</div>
      <h1 className="text-xl font-black text-[var(--color-green-dark)] mb-2">{t('title')}</h1>
      <p className="text-sm text-[var(--color-green-mid)] mb-8">{t('subtitle')}</p>
      <a
        href="https://line.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors inline-block"
        style={{ backgroundColor: 'var(--color-green-primary)' }}
      >
        📱 {t('lineButton')}
      </a>
    </div>
  )
}
