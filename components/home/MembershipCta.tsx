'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function MembershipCta() {
  const locale = useLocale()

  return (
    <section className="py-20 px-6">
      <div
        className="max-w-4xl mx-auto rounded-3xl px-10 py-14 text-center"
        style={{ background: `linear-gradient(135deg, var(--color-green-dark) 0%, var(--color-green-primary) 100%)` }}
      >
        <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--color-green-light)' }}>
          會員方案
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          加入綠超人會員
        </h2>
        <p className="text-lg font-black mb-2" style={{ color: 'var(--color-orange-accent)' }}>
          年費 NT$3,600
        </p>
        <p className="text-sm max-w-lg mx-auto mb-8" style={{ color: 'var(--color-green-light)' }}>
          解鎖嚴選折扣、綠幣儲值、玩具與閒置資源交換、心靈課程、腦波服務——讓環保成為你每天的日常與資產。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/${locale}/membership`}
            className="rounded-xl px-8 py-3.5 text-base font-black transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--color-orange-accent)', color: 'var(--color-green-dark)' }}
          >
            了解會員方案 →
          </Link>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-8 py-3.5 text-base font-semibold border-2 transition-colors hover:bg-white/10"
            style={{ borderColor: 'var(--color-green-light)', color: 'var(--color-green-light)' }}
          >
            📱 LINE 立即申請
          </a>
        </div>
      </div>
    </section>
  )
}
