import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQ from '@/components/toy-exchange/FAQ'

const zhCategories = [
  { emoji: '📦', name: '生活用品', examples: '家電、廚具、器皿、文具、日用品' },
  { emoji: '👚', name: '衣物配件', examples: '衣服、鞋子、包包（狀況良好）' },
  { emoji: '📚', name: '書籍教材', examples: '課本、繪本、雜誌、參考書' },
  { emoji: '🧸', name: '玩具童品', examples: '積木、娃娃、桌遊、益智玩具' },
  { emoji: '🌿', name: '農產食材', examples: '自種蔬果、醃漬品、乾貨' },
  { emoji: '🔧', name: '工具器材', examples: '手工具、DIY 材料、收納器具' },
]

const enCategories = [
  { emoji: '📦', name: 'Daily Goods', examples: 'Home appliances, kitchenware, stationery, daily items' },
  { emoji: '👚', name: 'Clothing & Accessories', examples: 'Clothes, shoes, bags (in good condition)' },
  { emoji: '📚', name: 'Books & Study Materials', examples: 'Textbooks, picture books, magazines, reference books' },
  { emoji: '🧸', name: 'Toys & Children\'s Items', examples: 'Building blocks, dolls, board games, educational toys' },
  { emoji: '🌿', name: 'Agricultural Products', examples: 'Home-grown produce, pickles, dried goods' },
  { emoji: '🔧', name: 'Tools & Equipment', examples: 'Hand tools, DIY materials, storage items' },
]

const zhFaqItems = [
  { q: '哪些物品可以登記交換？', a: '狀況良好、可正常使用的生活用品均可，包含家電、衣物、書籍、玩具、農產品等。物品須乾淨無損壞。' },
  { q: '物品送出後我會得到什麼？', a: '交換成功後，依物品類別與狀況，系統將對應的綠幣（G-Coin）即時入帳至您的會員錢包。' },
  { q: '不被接受的物品有哪些？', a: '損壞、污損、有安全疑慮、過期食品、內衣褲、大型家具（請另行聯絡）等，恕不接受。' },
  { q: '如何知道物品有人想要？', a: '物品審核通過後會公告於社區交換板及 LINE 群組，有需求的鄰里主動申請後，工作人員會通知您安排交接。' },
  { q: '可以同時登記幾件物品？', a: '每次最多登記 10 件，數量較多請事先聯絡據點工作人員安排。' },
  { q: '物品多久後沒人要就下架？', a: '公告期間為 30 天，期間無媒合者將自動下架，物品可自行取回或重新登記。' },
]

const enFaqItems = [
  { q: 'What items can be registered for exchange?', a: 'Any item in good, usable condition including appliances, clothing, books, toys, and produce. Items must be clean and undamaged.' },
  { q: 'What do I receive after a successful exchange?', a: 'G-Coins corresponding to the item type and condition are instantly credited to your member wallet.' },
  { q: 'What items are NOT accepted?', a: 'Damaged, soiled, hazardous, expired food, underwear, and large furniture (please contact us separately) are not accepted.' },
  { q: 'How will I know someone wants my item?', a: 'Once approved, the item is posted to the community board and LINE group. Interested neighbors apply, and staff will notify you to arrange the handover.' },
  { q: 'How many items can I register at once?', a: 'Up to 10 items per registration. For larger quantities, please contact the outlet in advance.' },
  { q: 'What happens if no one claims my item after 30 days?', a: 'Items are automatically unlisted after 30 days. You can retrieve the item or re-register it.' },
]

const zhSteps = [
  { num: '1', title: '登記閒置物品', desc: '透過 LINE 官方帳號上傳物品照片並填寫基本資訊，或直接至社區據點現場登記。' },
  { num: '2', title: '工作人員審核上架', desc: '工作人員確認物品狀況後，公告至社區交換板及 LINE 群組，等待有需要的鄰里申請。' },
  { num: '3', title: '媒合成功 · 完成交換', desc: '確認媒合後安排取件，物品順利移交即獲得對應綠幣，立即存入帳戶。' },
]

const enSteps = [
  { num: '1', title: 'Register Your Items', desc: 'Upload photos and fill in item details via LINE, or register in person at a community outlet.' },
  { num: '2', title: 'Review & Listing', desc: 'Staff verify the item condition and post it to the community exchange board and LINE group for neighbors to browse.' },
  { num: '3', title: 'Match & Exchange', desc: 'Once matched, arrange pickup. G-Coins are credited instantly upon successful transfer.' },
]

const zhInline = {
  categoriesSub: '以下類型物品均可登記，最終由工作人員現場確認',
  gcoinTitle: '交換成功即獲得綠幣（G-Coin）',
  gcoinDesc: '綠幣可折抵嚴選商品購物、兌換心靈課程，或保留累積使用',
  locationSection: '服務據點',
  locationName: '🏪 台南示範據點（綠超人福利中心）',
  locationAddress: '地址：台南市（詳細地址請聯絡取得）',
  locationHours: '開放時間：週一至週六 10:00 – 18:00',
  lineButton: '📱 LINE 登記物品',
}

const enInline = {
  categoriesSub: 'All item types below are eligible — final approval by staff on site',
  gcoinTitle: 'Earn G-Coins Upon Successful Exchange',
  gcoinDesc: 'G-Coins can be used for discounts on curated products, wellness course redemptions, or saved for later use',
  locationSection: 'Service Location',
  locationName: '🏪 Tainan Demo Outlet (Greenman Welfare Center)',
  locationAddress: 'Address: Tainan City (contact us for details)',
  locationHours: 'Hours: Mon–Sat 10:00–18:00',
  lineButton: '📱 Register via LINE',
}

export default async function IdleExchangePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'idleExchange' })

  const categories = locale === 'zh-TW' ? zhCategories : enCategories
  const faqItems = locale === 'zh-TW' ? zhFaqItems : enFaqItems
  const steps = locale === 'zh-TW' ? zhSteps : enSteps
  const il = locale === 'zh-TW' ? zhInline : enInline

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <SectionHeading
        title={t('title')}
        subtitle={t('pageSubtitle')}
      />

      {/* Steps */}
      <div className="flex flex-col md:flex-row gap-4 mb-14">
        {steps.map((s) => (
          <div
            key={s.num}
            className="flex-1 bg-white border rounded-2xl p-5 text-center shadow-sm"
            style={{ borderColor: 'var(--color-green-light)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3 text-white"
              style={{ backgroundColor: 'var(--color-green-primary)' }}
            >
              {s.num}
            </div>
            <h4 className="font-bold mb-2" style={{ color: 'var(--color-green-dark)' }}>{s.title}</h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <SectionHeading title={t('categoriesTitle')} subtitle={il.categoriesSub} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-2xl p-5 border"
            style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
          >
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <p className="font-bold text-sm mb-1" style={{ color: 'var(--color-green-dark)' }}>{cat.name}</p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>{cat.examples}</p>
          </div>
        ))}
      </div>

      {/* G-Coin reminder */}
      <div
        className="rounded-2xl p-6 mb-14 border text-center"
        style={{ background: 'white', borderColor: 'var(--color-green-light)' }}
      >
        <p className="text-2xl mb-2">💰</p>
        <p className="font-bold mb-1" style={{ color: 'var(--color-green-dark)' }}>
          {il.gcoinTitle}
        </p>
        <p className="text-sm" style={{ color: 'var(--color-green-mid)' }}>
          {il.gcoinDesc}
        </p>
      </div>

      {/* Location */}
      <SectionHeading title={il.locationSection} />
      <div
        className="bg-white border rounded-2xl p-6 mb-14 shadow-sm"
        style={{ borderColor: 'var(--color-green-light)' }}
      >
        <p className="font-semibold mb-1" style={{ color: 'var(--color-green-dark)' }}>
          {il.locationName}
        </p>
        <p className="text-sm mb-0.5" style={{ color: 'var(--color-green-mid)' }}>{il.locationAddress}</p>
        <p className="text-sm" style={{ color: 'var(--color-green-mid)' }}>{il.locationHours}</p>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-green-primary)' }}
        >
          {il.lineButton}
        </a>
      </div>

      {/* FAQ */}
      <SectionHeading title={t('faqTitle')} />
      <FAQ items={faqItems} />

    </div>
  )
}
