import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

const zhPosts = [
  { slug: 'launch', date: '2025.01.15', cat: '公告', title: '綠超人福利平台正式上線', excerpt: '結合物質環保與心靈環保，邀請社區共同參與，開啟循環新生活。' },
  { slug: 'tainan-center', date: '2025.02.03', cat: '據點', title: '台南示範據點開幕', excerpt: '位於台南的綠超人福利中心正式營運，提供玩具與閒置物品交換服務。' },
  { slug: 'wellness-program', date: '2025.02.20', cat: '課程', title: '心靈環保課程系列開課', excerpt: '腦波檢測、八週正念減壓課程，協助現代人重新與自己對話。' },
  { slug: 'community-event', date: '2025.03.10', cat: '活動', title: '社區共學活動 · 環保與心靈', excerpt: '邀請在地居民共同參與工作坊，分享物質與心靈環保的實踐經驗。' },
  { slug: 'green-coin-update', date: '2025.03.25', cat: '更新', title: '綠幣換算系統升級公告', excerpt: '優化綠幣換算機制，提供更透明、即時的價值認定流程。' },
]
const enPosts = [
  { slug: 'launch', date: '2025.01.15', cat: 'News', title: 'GreenSuper Welfare Platform Launches', excerpt: 'Combining material and mental sustainability for community-wide impact.' },
  { slug: 'tainan-center', date: '2025.02.03', cat: 'Center', title: 'Tainan Demonstration Center Opens', excerpt: 'GreenSuper Welfare Center now operating with toy and idle exchange services.' },
  { slug: 'wellness-program', date: '2025.02.20', cat: 'Course', title: 'Mental Wellness Program Series Begins', excerpt: 'Brainwave assessment and 8-week mindfulness program now enrolling.' },
  { slug: 'community-event', date: '2025.03.10', cat: 'Event', title: 'Community Learning · Eco & Mind', excerpt: 'Workshops for local residents to share sustainability practice.' },
  { slug: 'green-coin-update', date: '2025.03.25', cat: 'Update', title: 'G-Coin System Upgrade', excerpt: 'Optimized exchange mechanism for more transparent value recognition.' },
]

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'news' })
  const posts = locale === 'zh-TW' ? zhPosts : enPosts

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6 flex justify-center">
            <ZenStamp size="lg">{locale === 'zh-TW' ? '最新' : 'NEWS'}</ZenStamp>
          </div>
          <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--color-green-ink)' }}>
            {t('title')}
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p className="text-sm" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
            {locale === 'zh-TW' ? '社區動態 · 課程公告 · 活動紀錄' : 'Community · Courses · Events'}
          </p>
        </div>

        {/* Posts list */}
        <div style={{ borderTop: '1px solid var(--color-green-ink)' }}>
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/news/${p.slug}`}
              className="group block py-10 transition-opacity hover:opacity-75"
              style={{ borderBottom: '1px solid var(--color-zen-rule)' }}
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* 日期欄 */}
                <div className="col-span-12 md:col-span-3">
                  <p className="zen-serif" style={{ fontSize: 14, color: 'var(--color-zen-stamp)', letterSpacing: '0.15em' }}>
                    {p.date}
                  </p>
                  <p className="text-xs mt-2" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}>
                    · {p.cat} ·
                  </p>
                </div>

                {/* 內容欄 */}
                <div className="col-span-12 md:col-span-9">
                  <h2
                    className="zen-title mb-3"
                    style={{ fontSize: 18, color: 'var(--color-green-ink)', lineHeight: 1.6 }}
                  >
                    {p.title}
                  </h2>
                  <p className="text-sm leading-loose mb-4" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>
                    {p.excerpt}
                  </p>
                  <span
                    className="inline-block text-xs"
                    style={{
                      color: 'var(--color-zen-stamp)',
                      fontFamily: 'var(--font-serif)',
                      letterSpacing: '0.25em',
                      borderBottom: '1px solid var(--color-zen-stamp)',
                      paddingBottom: 2,
                    }}
                  >
                    {locale === 'zh-TW' ? '閱讀全文 →' : 'READ MORE →'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部禪語 */}
        <div className="text-center mt-24 mb-8">
          <p className="zen-display" style={{ fontSize: 20, color: 'var(--color-green-mid)', letterSpacing: '0.2em' }}>
            {locale === 'zh-TW' ? '日日是好日' : 'Every day a good day'}
          </p>
        </div>
      </div>
    </div>
  )
}
