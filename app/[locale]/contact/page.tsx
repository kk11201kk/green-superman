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
          <h3 className="font-bold text-[var(--color-green-dark)] mb-4">🏪 台南示範據點</h3>
          <p className="text-sm text-[var(--color-green-mid)] mb-1">📍 台南市（詳細地址加入會員後提供）</p>
          <p className="text-sm text-[var(--color-green-mid)] mb-1">🕙 週一至週六 10:00 - 18:00</p>
          <p className="text-sm text-[var(--color-green-mid)]">📵 週日及國定假日公休</p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            📱 LINE 官方帳號
          </a>
        </div>

        <div className="bg-white border border-[var(--color-green-light)] rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-[var(--color-green-dark)] mb-4">✉️ 線上詢問</h3>
          <form className="flex flex-col gap-3">
            <label htmlFor="contact-name" className="sr-only">姓名</label>
            <input
              id="contact-name"
              type="text"
              placeholder="您的姓名"
              className="border border-[var(--color-green-light)] rounded-lg px-4 py-2.5 text-sm focus:outline-none"
              style={{ '--tw-ring-color': 'var(--color-green-primary)' } as React.CSSProperties}
            />
            <label htmlFor="contact-email" className="sr-only">電子郵件</label>
            <input
              id="contact-email"
              type="email"
              placeholder="電子郵件"
              className="border border-[var(--color-green-light)] rounded-lg px-4 py-2.5 text-sm focus:outline-none"
            />
            <label htmlFor="contact-message" className="sr-only">詢問內容</label>
            <textarea
              id="contact-message"
              placeholder="詢問內容"
              rows={4}
              className="border border-[var(--color-green-light)] rounded-lg px-4 py-2.5 text-sm focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: 'var(--color-green-primary)' }}
            >
              送出詢問
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
