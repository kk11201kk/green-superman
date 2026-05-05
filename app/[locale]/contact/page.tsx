import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  const channels = locale === 'zh-TW'
    ? [
        { stamp: '線', name: 'LINE 官方帳號', desc: '最即時的溝通管道，預約、諮詢、客服', action: '加入 LINE 好友', href: 'https://line.me' },
        { stamp: '電', name: '電話聯絡', desc: '週一至週六 10:00 — 18:00', action: '撥打電話', href: 'tel:+886000000000', hint: '+886 (0) 0000-0000' },
        { stamp: '信', name: '電子郵件', desc: '商業合作、媒體訪問、其他事務', action: '寄送郵件', href: 'mailto:contact@greensuper.example', hint: 'contact@greensuper.example' },
      ]
    : [
        { stamp: 'L', name: 'LINE Official', desc: 'Fastest channel for booking & support', action: 'Add LINE Friend', href: 'https://line.me' },
        { stamp: 'T', name: 'Telephone', desc: 'Mon–Sat 10:00 — 18:00', action: 'Call Now', href: 'tel:+886000000000', hint: '+886 (0) 0000-0000' },
        { stamp: 'E', name: 'Email', desc: 'Business, media, general inquiries', action: 'Send Email', href: 'mailto:contact@greensuper.example', hint: 'contact@greensuper.example' },
      ]

  const subjects = locale === 'zh-TW'
    ? ['一般諮詢', '會員相關', '玩具交換', '閒置交換', '心靈課程', '商業合作', '其他']
    : ['General', 'Membership', 'Toy Exchange', 'Idle Exchange', 'Wellness', 'Partnership', 'Other']

  const fl = (zh: string, en: string) => locale === 'zh-TW' ? zh : en

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6 flex justify-center">
            <ZenStamp size="lg">{locale === 'zh-TW' ? '聯繫' : 'CONTACT'}</ZenStamp>
          </div>
          <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--color-green-ink)' }}>
            {t('title')}
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p className="max-w-md mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {fl('無論諮詢、預約、合作 · 我們都樂於回覆', 'For inquiries, bookings or partnerships')}
          </p>
        </div>

        {/* 三個聯絡管道 */}
        <ZenSectionHeading stamp={fl('管道', 'CHANNEL')} title={fl('聯絡方式', 'Get in Touch')} center />
        <div className="grid md:grid-cols-3 gap-px mb-24" style={{ background: 'var(--color-zen-rule)' }}>
          {channels.map((c) => (
            <div key={c.name} className="px-7 py-10 flex flex-col" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="mb-6">
                <ZenStamp size="md">{c.stamp}</ZenStamp>
              </div>
              <p className="zen-title mb-3" style={{ fontSize: 16, color: 'var(--color-green-ink)' }}>{c.name}</p>
              <p className="text-xs leading-loose mb-2" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{c.desc}</p>
              {'hint' in c && c.hint && (
                <p className="zen-serif mb-6" style={{ fontSize: 13, color: 'var(--color-zen-stamp)', letterSpacing: '0.05em' }}>{c.hint}</p>
              )}
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block text-xs mt-auto self-start transition-opacity hover:opacity-60"
                style={{
                  color: 'var(--color-green-ink)',
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '0.25em',
                  borderBottom: '1px solid var(--color-green-ink)',
                  paddingBottom: 3,
                }}
              >
                {c.action} →
              </a>
            </div>
          ))}
        </div>

        {/* 表單 */}
        <ZenSectionHeading
          stamp={fl('留言', 'MESSAGE')}
          title={fl('線上諮詢表單', 'Inquiry Form')}
          subtitle={fl('我們將於 1–2 個工作日內回覆', 'We respond within 1–2 business days')}
          center
        />
        <form className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div>
              <label className="block mb-2 text-xs" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}>
                {fl('姓名 NAME', 'NAME')}
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-transparent py-2 text-sm focus:outline-none"
                style={{ borderBottom: '1px solid var(--color-zen-rule)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)' }}
              />
            </div>
            <div>
              <label className="block mb-2 text-xs" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}>
                {fl('電子郵件 EMAIL', 'EMAIL')}
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-transparent py-2 text-sm focus:outline-none"
                style={{ borderBottom: '1px solid var(--color-zen-rule)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)' }}
              />
            </div>
            <div>
              <label className="block mb-2 text-xs" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}>
                {fl('電話 PHONE', 'PHONE')}
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-transparent py-2 text-sm focus:outline-none"
                style={{ borderBottom: '1px solid var(--color-zen-rule)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)' }}
              />
            </div>
            <div>
              <label className="block mb-2 text-xs" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}>
                {fl('諮詢主旨 SUBJECT', 'SUBJECT')}
              </label>
              <select
                name="subject"
                className="w-full bg-transparent py-2 text-sm focus:outline-none cursor-pointer appearance-none"
                style={{ borderBottom: '1px solid var(--color-zen-rule)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)' }}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-12">
            <label className="block mb-2 text-xs" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}>
              {fl('您的訊息 MESSAGE', 'MESSAGE')}
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full bg-transparent py-2 text-sm focus:outline-none resize-none"
              style={{ borderBottom: '1px solid var(--color-zen-rule)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', lineHeight: 1.8 }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-12 py-3.5 text-sm transition-opacity hover:opacity-80"
              style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.3em' }}
            >
              {fl('送 出 訊 息', 'SEND MESSAGE')}
            </button>
            <p className="mt-6 text-xs" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
              {fl('送出即表示您同意我們的隱私權政策', 'By submitting you agree to our privacy policy')}
            </p>
          </div>
        </form>

        {/* 底部資訊 */}
        <div className="text-center mt-24 pt-12" style={{ borderTop: '1px solid var(--color-zen-rule)' }}>
          <p className="zen-display mb-3" style={{ fontSize: 20, color: 'var(--color-green-ink)', letterSpacing: '0.2em' }}>
            {fl('台南示範據點', 'Tainan Center')}
          </p>
          <p className="text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {fl('綠超人福利中心 · 台南市', 'GreenSuper Welfare Center · Tainan')}
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
            {fl('營業時間 · 週一至週六 10:00 — 18:00', 'Mon–Sat 10:00 — 18:00')}
          </p>
        </div>
      </div>
    </div>
  )
}
