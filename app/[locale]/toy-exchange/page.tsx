import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

const zhRows = [
  { type: '積木 / 拼圖', condition: '完整無缺件', coins: '50–150' },
  { type: '娃娃 / 布偶', condition: '乾淨可清洗', coins: '30–80' },
  { type: '交通工具玩具', condition: '功能正常', coins: '40–120' },
  { type: '桌遊 / 益智遊戲', condition: '配件齊全', coins: '80–200' },
  { type: '電動玩具', condition: '可正常運作', coins: '100–300' },
  { type: '圖書 / 繪本', condition: '無破損塗鴉', coins: '20–60' },
]
const enRows = [
  { type: 'Building Blocks', condition: 'Complete', coins: '50–150' },
  { type: 'Dolls', condition: 'Clean & washable', coins: '30–80' },
  { type: 'Vehicle Toys', condition: 'Functional', coins: '40–120' },
  { type: 'Board Games', condition: 'All parts included', coins: '80–200' },
  { type: 'Electronic Toys', condition: 'Operates normally', coins: '100–300' },
  { type: 'Picture Books', condition: 'No tears', coins: '20–60' },
]
const zhFaq = [
  { q: '哪些玩具可以接受？', a: '完好無缺件、可清洗的玩具均可，包含積木、娃娃、交通工具、桌遊、電動玩具、圖書繪本等。' },
  { q: '不接受哪些玩具？', a: '損壞、缺件、有安全疑慮、含有害材質、有嚴重污損或異味的玩具，恕不接受。' },
  { q: '綠幣多久入帳？', a: '現場核驗通過後，即時發放綠幣至您的會員錢包。' },
  { q: '需要事先預約嗎？', a: '建議透過 LINE 拍照預審，可加快現場核驗速度，但非強制。' },
  { q: '一次可以帶幾件？', a: '每次最多帶 10 件，若數量較多請事先聯絡據點安排。' },
]
const enFaq = [
  { q: 'What toys are accepted?', a: 'Complete, washable toys in good condition.' },
  { q: 'What toys are NOT accepted?', a: 'Damaged, incomplete, hazardous, or odorous toys.' },
  { q: 'How soon are G-Coins credited?', a: 'Instantly upon on-site verification.' },
  { q: 'Pre-booking required?', a: 'Recommended via LINE but not mandatory.' },
  { q: 'How many items per visit?', a: 'Up to 10 items per visit.' },
]

export default async function ToyExchangePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'toyExchange' })
  const rows = locale === 'zh-TW' ? zhRows : enRows
  const faq = locale === 'zh-TW' ? zhFaq : enFaq
  const chars = locale === 'zh-TW' ? ['攜', '核', '幣'] : ['1', '2', '3']
  const stepDescs = locale === 'zh-TW'
    ? ['LINE 上傳照片預審，工作人員初步評估', '攜至社區福利中心現場核驗', '核驗合格即時發放綠幣至會員錢包']
    : ['Pre-check via LINE', 'On-site verification', 'G-Coins credited instantly']

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <ZenStamp size="lg">{locale === 'zh-TW' ? '玩具交換' : 'TOYS'}</ZenStamp>
          </div>
          <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--color-green-ink)' }}>
            {t('title')}
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p className="max-w-lg mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {locale === 'zh-TW' ? '孩子長大了，玩具也該繼續被愛 — 帶來舊玩具，換走綠幣' : 'Bring old toys, earn G-Coins'}
          </p>
        </div>

        {/* 三步 */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {chars.map((c, i) => (
            <div key={i} className="text-center">
              <div className="zen-display mb-4" style={{ fontSize: 64, color: 'var(--color-green-ink)' }}>{c}</div>
              <div className="flex justify-center mb-3">
                <ZenLine width={24} />
              </div>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
                {stepDescs[i]}
              </p>
            </div>
          ))}
        </div>

        {/* 對照表 */}
        <ZenSectionHeading
          stamp={locale === 'zh-TW' ? '對照' : 'TABLE'}
          title={locale === 'zh-TW' ? '綠幣換算參考表' : 'G-Coin Reference'}
          subtitle={locale === 'zh-TW' ? '實際綠幣數量由現場核驗人員依玩具狀況決定' : 'Final amount determined by staff'}
        />
        <table className="w-full mb-20">
          <thead>
            <tr style={{ borderTop: '1px solid var(--color-green-ink)', borderBottom: '1px solid var(--color-green-ink)' }}>
              <th className="text-left py-3 zen-title" style={{ fontSize: 12, color: 'var(--color-green-ink)' }}>
                {locale === 'zh-TW' ? '類型' : 'Type'}
              </th>
              <th className="text-left py-3 zen-title" style={{ fontSize: 12, color: 'var(--color-green-ink)' }}>
                {locale === 'zh-TW' ? '條件' : 'Condition'}
              </th>
              <th className="text-right py-3 zen-title" style={{ fontSize: 12, color: 'var(--color-zen-stamp)' }}>
                {locale === 'zh-TW' ? '綠幣' : 'G-Coins'}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.type} style={{ borderBottom: '1px solid var(--color-zen-rule)' }}>
                <td className="py-4 text-sm" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
                  {r.type}
                </td>
                <td className="py-4 text-sm" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>
                  {r.condition}
                </td>
                <td className="py-4 text-right zen-serif" style={{ fontSize: 16, color: 'var(--color-zen-stamp)', letterSpacing: '0.05em' }}>
                  {r.coins}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
            {locale === 'zh-TW' ? 'LINE 預約帶件' : 'Book via LINE'}
          </a>
        </div>

        {/* FAQ */}
        <ZenSectionHeading stamp={locale === 'zh-TW' ? '問答' : 'FAQ'} title={locale === 'zh-TW' ? '常見問題' : 'FAQ'} />
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
