'use client'
import { useLocale } from 'next-intl'
import ZenLine from '@/components/ui/ZenLine'

const zh = {
  label: '我們的使命',
  statement: '創造全人類福祉的綠色環保產品',
  desc: '健康的身心、乾淨的環境、互助的社區——這三者交織而成的美好生活，是綠超人所有行動的起點與終點。',
}

const en = {
  label: 'Our Mission',
  statement: 'Creating green eco-friendly products for the well-being of all humanity',
  desc: 'A healthy mind, a clean environment, a supportive community — this is the life every action we take is working toward.',
}

export default function MissionBanner() {
  const locale = useLocale()
  const d = locale === 'zh-TW' ? zh : en

  return (
    <section
      className="py-16 px-6 text-center"
      style={{ background: 'var(--color-zen-paper-warm)' }}
    >
      <p
        className="text-xs uppercase font-semibold mb-5"
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-zen-stamp)',
          letterSpacing: '0.3em',
        }}
      >
        {d.label}
      </p>
      <div className="max-w-2xl mx-auto mb-5">
        <ZenLine />
      </div>
      <h2
        className="text-2xl md:text-3xl font-black py-5 max-w-2xl mx-auto"
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-green-dark)',
          letterSpacing: '0.06em',
          lineHeight: 1.6,
        }}
      >
        {d.statement}
      </h2>
      <div className="max-w-2xl mx-auto mb-5">
        <ZenLine />
      </div>
      <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--color-green-mid)' }}>
        {d.desc}
      </p>
    </section>
  )
}
