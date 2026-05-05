import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import ExchangeTable from '@/components/toy-exchange/ExchangeTable'
import FAQ from '@/components/toy-exchange/FAQ'

const zhFaqItems = [
  { q: '哪些玩具可以接受？', a: '完好無缺件、可清洗的玩具均可，包含積木、娃娃、交通工具、桌遊、電動玩具、圖書繪本等。' },
  { q: '不接受哪些玩具？', a: '損壞、缺件、有安全疑慮（尖銳破損）、含有害材質、有嚴重污損或異味的玩具，恕不接受。' },
  { q: '綠幣多久入帳？', a: '現場核驗通過後，GCS-IC 系統即時發放綠幣至您的會員錢包，無需等待。' },
  { q: '需要事先預約嗎？', a: '建議透過 LINE 拍照預審，可加快現場核驗速度，但非強制。' },
  { q: '一次可以帶幾件？', a: '每次最多帶 10 件，若數量較多請事先聯絡據點安排。' },
]

const enFaqItems = [
  { q: 'What toys are accepted?', a: 'Complete, washable toys in good condition including building blocks, dolls, vehicles, board games, electronic toys, and picture books.' },
  { q: 'What toys are NOT accepted?', a: 'Damaged, incomplete, sharp or hazardous, toxic material, heavily soiled or odorous toys are not accepted.' },
  { q: 'How soon are G-Coins credited?', a: 'G-Coins are instantly credited to your member wallet by the GCS-IC system upon on-site verification. No waiting required.' },
  { q: 'Is pre-booking required?', a: 'We recommend pre-submitting photos via LINE for faster on-site verification, but it is not mandatory.' },
  { q: 'How many items can I bring per visit?', a: 'Up to 10 items per visit. For larger quantities, please contact the outlet in advance.' },
]

const zhStepDescs = [
  '透過 LINE 官方帳號上傳玩具照片，由工作人員初步評估可接受項目。',
  '攜帶玩具至社區福利中心，由經營者依「資源重生核驗標準」現場核對。',
  '核驗合格後，系統依「綠幣價值對照表」即時發放綠幣至您的會員錢包。',
]

const enStepDescs = [
  'Upload toy photos via LINE official account. Staff will do a preliminary assessment of acceptable items.',
  'Bring toys to the Community Welfare Center. Staff will inspect them according to the Resource Regeneration Verification Standards.',
  'Upon passing inspection, the system instantly credits G-Coins to your member wallet based on the G-Coin Value Reference Table.',
]

const zhStrings = {
  subtitle: '孩子長大了，玩具也該繼續被愛 — 帶來舊玩具，換走綠幣',
  tableTitle: '綠幣換算參考表',
  tableSub: '實際綠幣數量由現場核驗人員依玩具狀況決定',
  locationTitle: '服務據點',
  locationName: '🏪 台南示範據點（綠超人福利中心）',
  locationAddress: '地址：台南市（詳細地址請聯絡取得）',
  locationHours: '開放時間：週一至週六 10:00 - 18:00',
  lineButton: '📱 LINE 預約帶件',
  faqTitle: '常見問題',
}

const enStrings = {
  subtitle: 'Your child has grown, but toys deserve more love — bring old toys, earn G-Coins',
  tableTitle: 'G-Coin Reference Table',
  tableSub: 'Actual G-Coin amounts are determined by staff based on toy condition',
  locationTitle: 'Service Location',
  locationName: '🏪 Tainan Demo Outlet (Greenman Welfare Center)',
  locationAddress: 'Address: Tainan City (contact us for details)',
  locationHours: 'Hours: Mon–Sat 10:00–18:00',
  lineButton: '📱 Book via LINE',
  faqTitle: 'FAQ',
}

export default async function ToyExchangePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'toyExchange' })

  const faqItems = locale === 'zh-TW' ? zhFaqItems : enFaqItems
  const stepDescs = locale === 'zh-TW' ? zhStepDescs : enStepDescs
  const s = locale === 'zh-TW' ? zhStrings : enStrings

  const steps = [
    { num: '1', title: t('step1'), desc: stepDescs[0] },
    { num: '2', title: t('step2'), desc: stepDescs[1] },
    { num: '3', title: t('step3'), desc: stepDescs[2] },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeading
        title={t('title')}
        subtitle={s.subtitle}
      />

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        {steps.map((step) => (
          <div key={step.num} className="flex-1 bg-white border border-[var(--color-green-light)] rounded-2xl p-5 text-center shadow-sm">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3 text-white" style={{ backgroundColor: 'var(--color-green-primary)' }}>
              {step.num}
            </div>
            <h4 className="font-bold text-[var(--color-green-dark)] mb-2">{step.title}</h4>
            <p className="text-xs text-[var(--color-green-mid)] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <SectionHeading title={s.tableTitle} subtitle={s.tableSub} />
      <div className="mb-12 rounded-xl overflow-hidden border border-[var(--color-green-light)] shadow-sm">
        <ExchangeTable />
      </div>

      <SectionHeading title={s.locationTitle} />
      <div className="bg-white border border-[var(--color-green-light)] rounded-2xl p-6 mb-12 shadow-sm">
        <p className="font-semibold text-[var(--color-green-dark)] mb-1">{s.locationName}</p>
        <p className="text-sm text-[var(--color-green-mid)]">{s.locationAddress}</p>
        <p className="text-sm text-[var(--color-green-mid)]">{s.locationHours}</p>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          style={{ backgroundColor: 'var(--color-green-primary)' }}
        >
          {s.lineButton}
        </a>
      </div>

      <SectionHeading title={s.faqTitle} />
      <FAQ items={faqItems} />
    </div>
  )
}
