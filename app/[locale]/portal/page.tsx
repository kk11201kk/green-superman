import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'

export default async function MemberPortalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const features = locale === 'zh-TW'
    ? [
        { stamp: '幣', title: '綠幣錢包', desc: '即時查詢綠幣餘額、累積與消費紀錄' },
        { stamp: '物', title: '我的物資', desc: '追蹤已登記、已交換、已上架的物品狀態' },
        { stamp: '課', title: '課程預約', desc: '預約心靈環保課程、查看上課紀錄' },
        { stamp: '購', title: '訂單管理', desc: '查看嚴選商品訂單、配送進度與綠幣折抵' },
      ]
    : [
        { stamp: 'C', title: 'G-Coin Wallet', desc: 'Check balance and transaction history' },
        { stamp: 'I', title: 'My Items', desc: 'Track registered and exchanged items' },
        { stamp: 'L', title: 'Course Booking', desc: 'Book wellness courses and view records' },
        { stamp: 'O', title: 'Order Center', desc: 'Track product orders and G-Coin discounts' },
      ]

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <ZenStamp size="lg">會員</ZenStamp>
          </div>
          <h1
            className="zen-display mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--color-green-ink)' }}
          >
            {locale === 'zh-TW' ? '會員入口' : 'Member Portal'}
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p
            className="text-sm"
            style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}
          >
            {locale === 'zh-TW' ? '靜待 · 即將開放' : 'Coming Soon'}
          </p>
        </div>

        {/* 中央詩意句 */}
        <div
          className="text-center px-8 py-16 mb-20"
          style={{ borderTop: '1px solid var(--color-zen-rule)', borderBottom: '1px solid var(--color-zen-rule)' }}
        >
          <p
            className="zen-display mb-6"
            style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', color: 'var(--color-green-ink)', letterSpacing: '0.15em', lineHeight: 1.8 }}
          >
            {locale === 'zh-TW' ? '線上服務 · 即將上線' : 'Online Services · Launching Soon'}
          </p>
          <p
            className="text-sm leading-loose max-w-md mx-auto mb-8"
            style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}
          >
            {locale === 'zh-TW'
              ? '會員專屬登入功能正在精心打磨中，目前歡迎透過 LINE 與我們聯繫，享受同樣完整的服務。'
              : 'Member login is in development. Meanwhile please reach us via LINE for full service.'}
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 text-sm transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.3em' }}
          >
            {locale === 'zh-TW' ? '透 過 LINE 聯 繫' : 'CONTACT VIA LINE'}
          </a>
        </div>

        {/* 功能預覽 */}
        <ZenSectionHeading
          stamp="預告"
          title={locale === 'zh-TW' ? '即將開放的功能' : 'Upcoming Features'}
          subtitle={locale === 'zh-TW' ? '會員系統上線後，您將可使用以下功能' : 'After launch, members will access:'}
          center
        />
        <div className="grid grid-cols-2 gap-px mb-20" style={{ background: 'var(--color-zen-rule)' }}>
          {features.map((f) => (
            <div key={f.title} className="px-7 py-10" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="mb-5">
                <ZenStamp size="md">{f.stamp}</ZenStamp>
              </div>
              <p className="zen-title mb-3" style={{ fontSize: 15, color: 'var(--color-green-ink)' }}>
                {f.title}
              </p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 底部聯絡管道 */}
        <div className="text-center pt-8" style={{ borderTop: '1px solid var(--color-zen-rule)' }}>
          <p className="zen-serif mb-2" style={{ fontSize: 13, color: 'var(--color-zen-stamp)', letterSpacing: '0.25em' }}>
            {locale === 'zh-TW' ? '目前服務管道' : 'CURRENT CHANNELS'}
          </p>
          <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {locale === 'zh-TW'
              ? 'LINE 官方帳號 · 電話 · 電子郵件 · 台南示範據點'
              : 'LINE · Phone · Email · Tainan Center'}
          </p>
        </div>
      </div>
    </div>
  )
}
