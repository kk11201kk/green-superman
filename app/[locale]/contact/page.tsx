import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border border-[var(--color-green-light)] rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-[var(--color-green-dark)] mb-4">{t('locationTitle')}</h3>
          <p className="text-sm text-[var(--color-green-mid)] mb-1">{t('locationAddress')}</p>
          <p className="text-sm text-[var(--color-green-mid)] mb-1">{t('locationHours')}</p>
          <p className="text-sm text-[var(--color-green-mid)]">{t('locationClosed')}</p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            {t('lineButton')}
          </a>
        </div>

        <div className="bg-white border border-[var(--color-green-light)] rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-[var(--color-green-dark)] mb-4">{t('onlineTitle')}</h3>
          <form className="flex flex-col gap-3">
            <label htmlFor="contact-name" className="sr-only">{t('namePlaceholder')}</label>
            <input
              id="contact-name"
              type="text"
              placeholder={t('namePlaceholder')}
              className="border border-[var(--color-green-light)] rounded-lg px-4 py-2.5 text-sm focus:outline-none"
              style={{ '--tw-ring-color': 'var(--color-green-primary)' } as React.CSSProperties}
            />
            <label htmlFor="contact-email" className="sr-only">{t('emailPlaceholder')}</label>
            <input
              id="contact-email"
              type="email"
              placeholder={t('emailPlaceholder')}
              className="border border-[var(--color-green-light)] rounded-lg px-4 py-2.5 text-sm focus:outline-none"
            />
            <label htmlFor="contact-message" className="sr-only">{t('messagePlaceholder')}</label>
            <textarea
              id="contact-message"
              placeholder={t('messagePlaceholder')}
              rows={4}
              className="border border-[var(--color-green-light)] rounded-lg px-4 py-2.5 text-sm focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: 'var(--color-green-primary)' }}
            >
              {t('submitButton')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
