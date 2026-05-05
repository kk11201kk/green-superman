import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'

const zhNewsItems = [
  { id: 1, date: '2025.06.01', tag: '活動', title: '🧸 6月玩具交換日 — 台南首場活動公告', excerpt: '首場社區玩具交換日即將登場，歡迎會員攜帶閒置玩具前來換取綠幣。' },
  { id: 2, date: '2025.05.20', tag: '課程', title: '正念減壓工作坊開放報名', excerpt: '本月心靈環保課程「境隨心轉工坊」開放報名，名額有限。' },
  { id: 3, date: '2025.05.10', tag: '公告', title: '綠超人環保促進會台南示範據點正式啟動', excerpt: '台南首個綠色通路示範區正式投入營運，歡迎加入會員。' },
]

const enNewsItems = [
  { id: 1, date: '2025.06.01', tag: 'Event', title: '🧸 June Toy Exchange Day — First Tainan Event', excerpt: 'The first community toy exchange day is coming. Members are welcome to bring idle toys and earn G-Coins.' },
  { id: 2, date: '2025.05.20', tag: 'Course', title: 'Mindfulness Workshop Now Open for Registration', excerpt: 'This month\'s "Inner Peace Workshop" is open for registration. Limited spots available.' },
  { id: 3, date: '2025.05.10', tag: 'Notice', title: 'Greenman Association Tainan Demo Outlet Officially Launched', excerpt: 'Tainan\'s first green channel demo zone is now operational. Welcome to join as a member.' },
]

const zhTagStyles: Record<string, { bg: string; color: string }> = {
  活動: { bg: 'var(--color-orange-accent)', color: 'white' },
  課程: { bg: 'var(--color-green-light)', color: 'var(--color-green-dark)' },
  公告: { bg: '#EFF6FF', color: '#2563EB' },
}

const enTagStyles: Record<string, { bg: string; color: string }> = {
  Event: { bg: 'var(--color-orange-accent)', color: 'white' },
  Course: { bg: 'var(--color-green-light)', color: 'var(--color-green-dark)' },
  Notice: { bg: '#EFF6FF', color: '#2563EB' },
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'news_page' })

  const newsItems = locale === 'zh-TW' ? zhNewsItems : enNewsItems
  const tagStyles = locale === 'zh-TW' ? zhTagStyles : enTagStyles

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />
      <div className="flex flex-col gap-5">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white border border-[var(--color-green-light)] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: tagStyles[item.tag]?.bg, color: tagStyles[item.tag]?.color }}
              >
                {item.tag}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            <h3 className="font-bold text-[var(--color-green-dark)] mb-1">{item.title}</h3>
            <p className="text-sm text-[var(--color-green-mid)]">{item.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
