import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQ from '@/components/toy-exchange/FAQ'

const categories = [
  { emoji: '📦', name: '生活用品', examples: '家電、廚具、器皿、文具、日用品' },
  { emoji: '👚', name: '衣物配件', examples: '衣服、鞋子、包包（狀況良好）' },
  { emoji: '📚', name: '書籍教材', examples: '課本、繪本、雜誌、參考書' },
  { emoji: '🧸', name: '玩具童品', examples: '積木、娃娃、桌遊、益智玩具' },
  { emoji: '🌿', name: '農產食材', examples: '自種蔬果、醃漬品、乾貨' },
  { emoji: '🔧', name: '工具器材', examples: '手工具、DIY 材料、收納器具' },
]

const faqItems = [
  { q: '哪些物品可以登記交換？', a: '狀況良好、可正常使用的生活用品均可，包含家電、衣物、書籍、玩具、農產品等。物品須乾淨無損壞。' },
  { q: '物品送出後我會得到什麼？', a: '交換成功後，依物品類別與狀況，系統將對應的綠幣（G-Coin）即時入帳至您的會員錢包。' },
  { q: '不被接受的物品有哪些？', a: '損壞、污損、有安全疑慮、過期食品、內衣褲、大型家具（請另行聯絡）等，恕不接受。' },
  { q: '如何知道物品有人想要？', a: '物品審核通過後會公告於社區交換板及 LINE 群組，有需求的鄰里主動申請後，工作人員會通知您安排交接。' },
  { q: '可以同時登記幾件物品？', a: '每次最多登記 10 件，數量較多請事先聯絡據點工作人員安排。' },
  { q: '物品多久後沒人要就下架？', a: '公告期間為 30 天，期間無媒合者將自動下架，物品可自行取回或重新登記。' },
]

const steps = [
  { num: '1', title: '登記閒置物品', desc: '透過 LINE 官方帳號上傳物品照片並填寫基本資訊，或直接至社區據點現場登記。' },
  { num: '2', title: '工作人員審核上架', desc: '工作人員確認物品狀況後，公告至社區交換板及 LINE 群組，等待有需要的鄰里申請。' },
  { num: '3', title: '媒合成功 · 完成交換', desc: '確認媒合後安排取件，物品順利移交即獲得對應綠幣，立即存入帳戶。' },
]

export default async function IdleExchangePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'idleExchange' })

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
      <SectionHeading title={t('categoriesTitle')} subtitle="以下類型物品均可登記，最終由工作人員現場確認" />
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
          交換成功即獲得綠幣（G-Coin）
        </p>
        <p className="text-sm" style={{ color: 'var(--color-green-mid)' }}>
          綠幣可折抵嚴選商品購物、兌換心靈課程，或保留累積使用
        </p>
      </div>

      {/* Location */}
      <SectionHeading title="服務據點" />
      <div
        className="bg-white border rounded-2xl p-6 mb-14 shadow-sm"
        style={{ borderColor: 'var(--color-green-light)' }}
      >
        <p className="font-semibold mb-1" style={{ color: 'var(--color-green-dark)' }}>
          🏪 台南示範據點（綠超人福利中心）
        </p>
        <p className="text-sm mb-0.5" style={{ color: 'var(--color-green-mid)' }}>地址：台南市（詳細地址請聯絡取得）</p>
        <p className="text-sm" style={{ color: 'var(--color-green-mid)' }}>開放時間：週一至週六 10:00 – 18:00</p>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-green-primary)' }}
        >
          📱 LINE 登記物品
        </a>
      </div>

      {/* FAQ */}
      <SectionHeading title={t('faqTitle')} />
      <FAQ items={faqItems} />

    </div>
  )
}
