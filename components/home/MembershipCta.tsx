'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import ZenStamp from '@/components/zen/ZenStamp'

const zh = {
  badge: '會員方案',
  title: '加入綠超人',
  price: '年費 NT$3,600',
  desc: '解鎖嚴選折扣、綠幣儲值、玩具與閒置資源交換、心靈課程、腦波服務。',
  learnMore: '了解會員方案',
  apply: 'LINE 立即申請',
}
const en = {
  badge: 'Membership',
  title: 'Join Greenman',
  price: 'NT$3,600 / yr',
  desc: 'Unlock curated discounts, G-Coin savings, toy & resource exchanges, wellness courses.',
  learnMore: 'Learn More',
  apply: 'Apply via LINE',
}

export default function MembershipCta() {
  const locale = useLocale()
  const d = locale === 'zh-TW' ? zh : en

  return (
    <section className="py-28 px-6" style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <ZenStamp size="lg">{d.badge}</ZenStamp>
        </div>
        <h2 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
          {d.title}
        </h2>
        <div className="flex justify-center mb-8">
          <div style={{ height: 1, width: 48, background: 'var(--color-zen-paper)', opacity: 0.4 }} />
        </div>
        <p className="zen-serif mb-3" style={{ fontSize: 24, letterSpacing: '0.1em', color: 'var(--color-zen-paper)' }}>
          {d.price}
        </p>
        <p className="text-sm leading-loose mb-12 max-w-lg mx-auto" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em', opacity: 0.75 }}>
          {d.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/membership`}
            className="px-8 py-3 text-sm transition-opacity hover:opacity-85"
            style={{ background: 'var(--color-zen-paper)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {d.learnMore}
          </Link>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-sm transition-opacity hover:opacity-85"
            style={{ border: '1px solid var(--color-zen-paper)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {d.apply}
          </a>
        </div>
      </div>
    </section>
  )
}
