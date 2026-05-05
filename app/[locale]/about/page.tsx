import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'


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
      {/* ── 開場語錄 Hero ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: `linear-gradient(160deg, var(--color-green-dark) 0%, var(--color-green-primary) 100%)` }}
      >
        <p className="text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--color-green-light)' }}>
          {t('subtitle')}
        </p>
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-black text-white leading-snug mb-5">
            「{t('heroQuote')}」
          </p>
          <cite className="text-sm not-italic" style={{ color: 'var(--color-orange-accent)' }}>
            {t('heroQuoteAuthor')}
          </cite>
        </blockquote>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── 願景 ── */}
        <SectionHeading title={t('visionTitle')} center />

        {/* 引言 */}
        <p className="text-center text-lg font-semibold mb-14 italic" style={{ color: 'var(--color-green-primary)' }}>
          {t('visionLead')}
        </p>

        <hr style={{ borderColor: 'var(--color-green-light)' }} className="mb-14" />

        {/* 主文 */}
        <div className="mb-14 space-y-0">
          {t('visionBody').split('\n\n').map((para, i) => {
            if (i === 1) {
              return (
                <div key={i} className="py-10 text-center">
                  <p className="text-2xl md:text-3xl font-black leading-snug" style={{ color: 'var(--color-green-dark)' }}>
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
              className="rounded-2xl p-6 border shadow-sm"
              style={{ background: 'white', borderColor: 'var(--color-green-light)' }}
            >
              <h3 className="font-black text-base mb-3" style={{ color: 'var(--color-green-dark)' }}>
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
        <div
          className="rounded-2xl p-8 mb-6 border shadow-sm"
          style={{ background: 'white', borderColor: 'var(--color-green-light)' }}
        >
          <p className="text-base leading-loose" style={{ color: 'var(--color-green-mid)' }}>
            {t('mission')}
          </p>
        </div>

        {/* 結尾宣言 */}
        <div className="text-center py-10">
          <p className="text-xl md:text-2xl font-black" style={{ color: 'var(--color-green-primary)' }}>
            {t('closingStatement')}
          </p>
        </div>


      </div>
    </div>
  )
}
