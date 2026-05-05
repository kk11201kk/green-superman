import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

const zhCategories = [
  { name: '生活用品', examples: '家電、廚具、器皿、文具、日用品' },
  { name: '衣物配件', examples: '衣服、鞋子、包包（狀況良好）' },
  { name: '書籍教材', examples: '課本、繪本、雜誌、參考書' },
  { name: '玩具童品', examples: '積木、娃娃、桌遊、益智玩具' },
  { name: '農產食材', examples: '自種蔬果、醃漬品、乾貨' },
  { name: '工具器材', examples: '手工具、DIY 材料、收納器具' },
]
const enCategories = [
  { name: 'Daily Goods', examples: 'Appliances, kitchenware, stationery' },
  { name: 'Clothing', examples: 'Clothes, shoes, bags' },
  { name: 'Books', examples: 'Textbooks, picture books, magazines' },
  { name: 'Toys', examples: 'Blocks, dolls, board games' },
  { name: 'Produce', examples: 'Home-grown veg, pickles' },
  { name: 'Tools', examples: 'Hand tools, DIY materials' },
]
const zhFaq = [
  { q: '哪些物品可以登記交換？', a: '狀況良好、可正常使用的生活用品均可。物品須乾淨無損壞。' },
  { q: '物品送出後我會得到什麼？', a: '交換成功後，依物品類別與狀況，系統將對應綠幣即時入帳至會員錢包。' },
  { q: '不被接受的物品有哪些？', a: '損壞、污損、有安全疑慮、過期食品、內衣褲、大型家具等，恕不接受。' },
  { q: '如何知道物品有人想要？', a: '審核通過後會公告於社區交換板及 LINE 群組，工作人員會通知您安排交接。' },
  { q: '可以同時登記幾件物品？', a: '每次最多登記 10 件，數量較多請事先聯絡。' },
  { q: '物品多久後沒人要就下架？', a: '公告期間為 30 天，期間無媒合者將自動下架。' },
]
const enFaq = [
  { q: 'What items can be exchanged?', a: 'Any item in good, usable condition.' },
  { q: 'What do I receive?', a: 'G-Coins credited instantly to your wallet.' },
  { q: 'What is NOT accepted?', a: 'Damaged, hazardous, expired food, underwear, large furniture.' },
  { q: 'How will I know someone wants it?', a: 'Posted to community board, staff notify you.' },
  { q: 'How many items at once?', a: 'Up to 10 per registration.' },
  { q: 'What if no one claims?', a: '30-day listing then auto-unlisted.' },
]

export default async function IdleExchangePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'idleExchange' })
  const cats = locale === 'zh-TW' ? zhCategories : enCategories
  const faq = locale === 'zh-TW' ? zhFaq : enFaq
  const stepNums = locale === 'zh-TW' ? ['一', '二', '三'] : ['1', '2', '3']
  const stepDescs = locale === 'zh-TW'
    ? [
        { t: '登記閒置物品', d: '透過 LINE 上傳照片並填寫資訊' },
        { t: '審核上架', d: '工作人員確認後公告至社區' },
        { t: '媒合完成 · 獲幣', d: '物品移交即獲對應綠幣' },
      ]
    : [
        { t: 'Register Items', d: 'Upload photos via LINE' },
        { t: 'Review & List', d: 'Posted to community board' },
        { t: 'Match · Earn', d: 'G-Coins credited on transfer' },
      ]
  const catNums = locale === 'zh-TW'
    ? ['壹', '貳', '參', '肆', '伍', '陸']
    : ['01', '02', '03', '04', '05', '06']

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <ZenStamp size="lg">{locale === 'zh-TW' ? '閒置交換' : 'IDLE'}</ZenStamp>
          </div>
          <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--color-green-ink)' }}>
            {t('title')}
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p className="max-w-lg mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {t('pageSubtitle')}
          </p>
        </div>

        {/* 三步 */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {stepDescs.map((s, i) => (
            <div key={i} className="text-center">
              <div className="zen-display mb-4" style={{ fontSize: 56, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {stepNums[i]}
              </div>
              <div className="flex justify-center mb-4">
                <ZenLine width={24} />
              </div>
              <p className="zen-title mb-2" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{s.t}</p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{s.d}</p>
            </div>
          ))}
        </div>

        {/* 種類 */}
        <ZenSectionHeading
          stamp={locale === 'zh-TW' ? '種類' : 'TYPES'}
          title={t('categoriesTitle')}
          subtitle={locale === 'zh-TW' ? '以下類型物品均可登記，最終由工作人員現場確認' : 'Listed types accepted — subject to staff review'}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px mb-20" style={{ background: 'var(--color-zen-rule)' }}>
          {cats.map((c, i) => (
            <div key={c.name} className="p-6" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="zen-serif mb-3" style={{ fontSize: 22, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {catNums[i]}
              </div>
              <p className="zen-title mb-2" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{c.name}</p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{c.examples}</p>
            </div>
          ))}
        </div>

        {/* G-Coin 說明 */}
        <div className="px-8 py-12 mb-20 text-center" style={{ background: 'var(--color-zen-paper-warm)' }}>
          <p className="zen-display mb-3" style={{ fontSize: 28, color: 'var(--color-green-ink)' }}>
            {locale === 'zh-TW' ? '交換成功 · 獲得綠幣' : 'Exchange · Earn G-Coins'}
          </p>
          <p className="text-sm" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {locale === 'zh-TW'
              ? '綠幣可折抵嚴選商品購物、兌換心靈課程，或保留累積使用'
              : 'Use G-Coins for eco-products, wellness courses, or save them'}
          </p>
        </div>

        {/* 據點 */}
        <ZenSectionHeading stamp={locale === 'zh-TW' ? '據點' : 'PLACE'} title={locale === 'zh-TW' ? '服務據點' : 'Location'} />
        <div className="px-8 py-10 mb-20" style={{ background: 'var(--color-zen-paper-warm)' }}>
          <p className="zen-title mb-2" style={{ fontSize: 16, color: 'var(--color-green-ink)' }}>
            {locale === 'zh-TW' ? '台南示範據點 · 綠超人福利中心' : 'Tainan Demo Outlet · Greenman Welfare Center'}
          </p>
          <p className="text-sm mb-1" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>
            {locale === 'zh-TW' ? '地址 · 台南市（詳細地址請聯絡取得）' : 'Address provided upon contact'}
          </p>
          <p className="text-sm mb-6" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>
            {locale === 'zh-TW' ? '時段 · 週一至週六 10:00 — 18:00' : 'Mon–Sat 10:00–18:00'}
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 text-sm transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {locale === 'zh-TW' ? 'LINE 登記物品' : 'Register via LINE'}
          </a>
        </div>

        {/* FAQ */}
        <ZenSectionHeading stamp={locale === 'zh-TW' ? '問答' : 'FAQ'} title={t('faqTitle')} />
        <div>
          {faq.map((f) => (
            <details key={f.q} className="py-5" style={{ borderBottom: '1px solid var(--color-zen-rule)' }}>
              <summary className="cursor-pointer text-sm" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
