'use client'
import { useLocale } from 'next-intl'

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
      style={{ background: 'var(--color-green-pale)', borderTop: '1px solid var(--color-green-light)', borderBottom: '1px solid var(--color-green-light)' }}
    >
      <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--color-green-mid)' }}>
        {d.label}
      </p>
      <h2 className="text-2xl md:text-3xl font-black mb-5 max-w-2xl mx-auto" style={{ color: 'var(--color-green-dark)' }}>
        {d.statement}
      </h2>
      <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--color-green-mid)' }}>
        {d.desc}
      </p>
    </section>
  )
}
