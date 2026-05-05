import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
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
    <div>
      {/* ── Hero ── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: 'var(--color-green-dark)' }}
      >
        <div className="absolute top-6 left-8 pointer-events-none">
          <ZenEnso size={160} opacity={0.06} />
        </div>
        <div className="absolute bottom-8 right-10 pointer-events-none">
          <ZenEnso size={220} opacity={0.04} />
        </div>

        <div className="relative">
          <div className="flex justify-center mb-6">
            <ZenStamp rotate={-1}>{t('subtitle')}</ZenStamp>
          </div>
          <blockquote className="max-w-4xl mx-auto">
            <p
              className="text-xl md:text-2xl font-black text-white leading-snug mb-5 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.06em' }}
            >
              「{t('heroQuote')}」
            </p>
            <cite
              className="text-sm not-italic"
              style={{ color: 'var(--color-zen-stamp)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}
            >
              {t('heroQuoteAuthor')}
            </cite>
          </blockquote>
        </div>

        {/* Paper bottom transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10"
          style={{
            background: 'var(--color-zen-paper)',
            clipPath: 'ellipse(55% 100% at 50% 100%)',
          }}
        />
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── 願景 ── */}
        <SectionHeading title={t('visionTitle')} center />

        <p
          className="text-center text-lg font-semibold mb-14 italic"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-primary)', letterSpacing: '0.04em' }}
        >
          {t('visionLead')}
        </p>

        <hr style={{ borderColor: 'var(--color-zen-rule)' }} className="mb-14" />

        <div className="mb-14 space-y-0">
          {t('visionBody').split('\n\n').map((para, i) => {
            if (i === 1) {
              return (
                <div key={i} className="py-10 text-center">
                  <p
                    className="text-2xl md:text-3xl font-black leading-snug"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.06em' }}
                  >
                    {para}
                  </p>
                </div>
              )
            }
            return (
              <p key={i} className="text-base leading-relaxed mb-8 last:mb-0" style={{ color: 'var(--color-green-mid)' }}>
                {para}
              </p>
            )
          })}
        </div>

        {/* 三大支柱 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-6 border"
              style={{ background: 'var(--color-zen-paper-warm)', borderColor: 'var(--color-zen-rule)' }}
            >
              <h3
                className="font-black text-base mb-3"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-dark)', letterSpacing: '0.06em' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── 核心使命 ── */}
        <SectionHeading title={t('missionTitle')} center />

        {/* 使命宣言 */}
        <div
          className="rounded-2xl px-8 py-10 mb-6 text-center relative overflow-hidden"
          style={{ background: 'var(--color-green-dark)' }}
        >
          <div className="absolute -right-6 -top-6 pointer-events-none">
            <ZenEnso size={120} opacity={0.07} />
          </div>
          <div className="relative">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-4"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-zen-stamp)', letterSpacing: '0.25em' }}
            >
              {t('missionTag')}
            </p>
            <p
              className="text-2xl md:text-3xl font-black text-white"
              style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.06em' }}
            >
              {t('missionStatement')}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl p-8 mb-6 border"
          style={{ background: 'var(--color-zen-paper-warm)', borderColor: 'var(--color-zen-rule)' }}
        >
          <p className="text-base leading-loose" style={{ color: 'var(--color-green-mid)' }}>
            {t('mission')}
          </p>
        </div>

        {/* 結尾宣言 */}
        <div className="text-center py-10">
          <p
            className="text-xl md:text-2xl font-black"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-green-primary)', letterSpacing: '0.06em' }}
          >
            {t('closingStatement')}
          </p>
        </div>

      </div>
    </div>
  )
}
