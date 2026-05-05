'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import ZenStamp from '@/components/ui/ZenStamp'
import ZenEnso from '@/components/ui/ZenEnso'

const zh = {
  badge: '會員方案',
  title: '加入綠超人會員',
  price: '年費 NT$3,600',
  desc: '解鎖嚴選折扣、綠幣儲值、玩具與閒置資源交換、心靈課程、腦波服務——讓環保成為你每天的日常與資產。',
  learnMore: '了解會員方案 →',
  apply: '📱 LINE 立即申請',
}

const en = {
  badge: 'Membership Plan',
  title: 'Join Greenman',
  price: 'Annual Fee NT$3,600',
  desc: 'Unlock curated discounts, G-Coin savings, toy & resource exchanges, wellness courses, and brainwave services — make eco-living your daily life.',
  learnMore: 'Learn More →',
  apply: '📱 Apply via LINE',
}

export default function MembershipCta() {
  const locale = useLocale()
  const d = locale === 'zh-TW' ? zh : en

  return (
    <section className="py-20 px-6" style={{ background: 'var(--color-zen-paper-warm)' }}>
      <div
        className="max-w-4xl mx-auto rounded-2xl px-10 py-14 text-center relative overflow-hidden"
        style={{ background: 'var(--color-green-dark)' }}
      >
        {/* Background ensō */}
        <div className="absolute -top-8 -right-8 pointer-events-none">
          <ZenEnso size={200} opacity={0.06} />
        </div>
        <div className="absolute -bottom-12 -left-12 pointer-events-none">
          <ZenEnso size={250} opacity={0.04} />
        </div>

        <div className="relative">
          <div className="flex justify-center mb-5">
            <ZenStamp size="lg" rotate={-1}>{d.badge}</ZenStamp>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-3"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.06em' }}
          >
            {d.title}
          </h2>
          <p
            className="text-xl font-black mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-zen-stamp)', letterSpacing: '0.08em' }}
          >
            {d.price}
          </p>
          <p className="text-sm max-w-lg mx-auto mb-8 leading-relaxed" style={{ color: 'var(--color-green-light)' }}>
            {d.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/membership`}
              className="rounded px-8 py-3.5 text-base font-black transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-zen-stamp)',
                color: 'var(--color-zen-paper)',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.08em',
              }}
            >
              {d.learnMore}
            </Link>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded px-8 py-3.5 text-base font-semibold border transition-colors hover:bg-white/10"
              style={{ borderColor: 'var(--color-green-light)', color: 'var(--color-green-light)' }}
            >
              {d.apply}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
