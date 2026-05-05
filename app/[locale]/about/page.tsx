import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'
import ZenEnso from '@/components/zen/ZenEnso'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const pillars = [
    { title: t('pillar1Title'), desc: t('pillar1Desc') },
    { title: t('pillar2Title'), desc: t('pillar2Desc') },
    { title: t('pillar3Title'), desc: t('pillar3Desc') },
  ]

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      {/* Hero 語錄 */}
      <section className="relative overflow-hidden py-28 px-6 text-center" style={{ background: 'var(--color-zen-paper-warm)' }}>
        <ZenEnso size={300} className="absolute -right-12 -top-12" opacity={0.08} />
        <p className="text-[11px] mb-10" style={{ color: 'var(--color-zen-stamp)', letterSpacing: '0.4em', fontFamily: 'var(--font-serif)' }}>
          {t('subtitle')}
        </p>
        <blockquote className="max-w-3xl mx-auto">
          <p className="zen-display mb-8" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-green-ink)', fontWeight: 400, lineHeight: 1.6 }}>
            「{t('heroQuote')}」
          </p>
          <div className="flex justify-center mb-4"><ZenLine width={32} /></div>
          <cite className="text-xs not-italic" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}>
            {t('heroQuoteAuthor')}
          </cite>
        </blockquote>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <ZenSectionHeading stamp="願景" title={t('visionTitle')} center />
        <p className="text-center mb-14 zen-display" style={{ fontSize: 22, color: 'var(--color-green-mid)', fontWeight: 400, letterSpacing: '0.1em', lineHeight: 1.8 }}>
          {t('visionLead')}
        </p>

        <div className="mb-16 space-y-6">
          {t('visionBody').split('\n\n').map((para, i) => {
            if (i === 1) {
              return (
                <div key={i} className="py-12 text-center">
                  <p className="zen-display" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--color-green-ink)', fontWeight: 400, letterSpacing: '0.08em', lineHeight: 1.6 }}>
                    {para}
                  </p>
                </div>
              )
            }
            return (
              <p key={i} className="text-base leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>
                {para}
              </p>
            )
          })}
        </div>

        {/* 三大支柱 — 直書感編號 */}
        <div className="grid md:grid-cols-3 gap-px mb-20" style={{ background: 'var(--color-zen-rule)' }}>
          {pillars.map((p, i) => (
            <div key={p.title} className="p-8" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="zen-serif mb-4" style={{ fontSize: 32, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {['壹', '貳', '參'][i]}
              </div>
              <h3 className="zen-title mb-4" style={{ fontSize: 16, color: 'var(--color-green-ink)' }}>
                {p.title.replace(/^[🌱💛🤝]\s*/, '')}
              </h3>
              <p className="text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 核心使命 */}
        <ZenSectionHeading stamp="使命" title={t('missionTitle')} center />
        <div className="px-8 py-14 mb-8 text-center" style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)' }}>
          <p className="text-[11px] mb-6" style={{ letterSpacing: '0.4em', opacity: 0.7, fontFamily: 'var(--font-serif)' }}>
            {t('missionTag')}
          </p>
          <p className="zen-display" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', letterSpacing: '0.1em', lineHeight: 1.5 }}>
            {t('missionStatement')}
          </p>
        </div>
        <div className="p-8 mb-8" style={{ borderTop: '1px solid var(--color-zen-rule)', borderBottom: '1px solid var(--color-zen-rule)' }}>
          <p className="text-base leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>
            {t('mission')}
          </p>
        </div>
        <div className="text-center py-10">
          <p className="zen-display" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-zen-stamp)', fontWeight: 400, letterSpacing: '0.1em' }}>
            {t('closingStatement')}
          </p>
        </div>
      </div>
    </div>
  )
}
