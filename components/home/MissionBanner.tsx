'use client'
import { useLocale } from 'next-intl'
import ZenLine from '@/components/zen/ZenLine'

const zh = {
  label: '使命',
  statement: '創造全人類福祉的綠色環保產品',
  desc: '健康的身心、乾淨的環境、互助的社區——三者交織而成的美好生活。',
}
const en = {
  label: 'Mission',
  statement: 'Creating green eco-products for the well-being of all humanity',
  desc: 'A healthy mind, a clean environment, a supportive community.',
}

export default function MissionBanner() {
  const locale = useLocale()
  const d = locale === 'zh-TW' ? zh : en

  return (
    <section className="py-24 px-6 text-center" style={{ background: 'var(--color-zen-paper-warm)' }}>
      <p className="mb-6" style={{ fontSize: 11, letterSpacing: '0.4em', color: 'var(--color-zen-stamp)', fontFamily: 'var(--font-serif)' }}>
        {d.label}
      </p>
      <h2 className="zen-display max-w-3xl mx-auto mb-8" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-green-ink)', fontWeight: 400 }}>
        {d.statement}
      </h2>
      <div className="flex justify-center mb-8">
        <ZenLine width={48} />
      </div>
      <p className="max-w-xl mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
        {d.desc}
      </p>
    </section>
  )
}
