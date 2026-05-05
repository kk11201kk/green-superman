import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'
import ZenEnso from '@/components/zen/ZenEnso'

const zhCourses = [
  {
    cat: '正念減壓',
    items: [
      { name: '呼吸覺察', desc: '在日常生活中透過呼吸重拾專注' },
      { name: '身體掃描', desc: '緩解壓力造成的肌肉緊張' },
    ],
  },
  {
    cat: '情緒轉化',
    items: [
      { name: '情緒排毒', desc: '識別負面情緒，轉化為正面行動' },
      { name: '境隨心轉工坊', desc: '探討內在穩定如何影響外在選擇' },
    ],
  },
  {
    cat: '自然療法',
    items: [
      { name: '氣功動療', desc: '社區氣功與伸展運動' },
      { name: '香療與音療', desc: '天然精油與頻率達成深度放鬆' },
    ],
  },
  {
    cat: '腦波服務',
    items: [
      { name: '腦波狀態檢測', desc: '量測個人腦波，了解身心壓力' },
      { name: '腦波調頻療程', desc: '頻率音頻引導大腦進入修復波段' },
    ],
  },
]
const enCourses = [
  {
    cat: 'Mindfulness',
    items: [
      { name: 'Breath Awareness', desc: 'Regain focus through daily breathing' },
      { name: 'Body Scan', desc: 'Relieve stress-induced tension' },
    ],
  },
  {
    cat: 'Emotion',
    items: [
      { name: 'Emotional Detox', desc: 'Transform anxiety into positive action' },
      { name: 'Inner Peace Workshop', desc: 'Inner stability shaping outer choices' },
    ],
  },
  {
    cat: 'Natural Therapy',
    items: [
      { name: 'Qigong Movement', desc: 'Community qigong & stretching' },
      { name: 'Aroma & Sound', desc: 'Deep relaxation via oils & frequencies' },
    ],
  },
  {
    cat: 'Brainwave',
    items: [
      { name: 'Brainwave Check', desc: 'Measure stress & relaxation state' },
      { name: 'Tuning Therapy', desc: 'Guide brain to recovery frequencies' },
    ],
  },
]

export default async function WellnessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'wellness_page' })
  const courses = locale === 'zh-TW' ? zhCourses : enCourses

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      {/* Hero 哲學 */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        <ZenEnso
          size={400}
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{ transform: 'translate(-50%,-50%)' }}
          opacity={0.1}
        />
        <div className="relative">
          <div className="mb-8 flex justify-center">
            <ZenStamp size="lg">心靈環保</ZenStamp>
          </div>
          <h1 className="zen-display mb-8" style={{ fontSize: 'clamp(56px, 10vw, 128px)', color: 'var(--color-green-ink)' }}>
            境隨心轉
          </h1>
          <div className="flex justify-center mb-8">
            <ZenLine width={48} />
          </div>
          <p className="max-w-xl mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {t('subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <ZenSectionHeading stamp="課程" title={t('title')} center />
        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--color-zen-rule)' }}>
          {courses.map((cat, i) => (
            <div key={cat.cat} className="p-8" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="zen-serif" style={{ fontSize: 24, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                  {['壹', '貳', '參', '肆'][i]}
                </span>
                <h3 className="zen-title" style={{ fontSize: 16, color: 'var(--color-green-ink)' }}>{cat.cat}</h3>
              </div>
              {cat.items.map((it) => (
                <div key={it.name} className="mb-5 pb-5" style={{ borderBottom: '1px solid var(--color-zen-rule)' }}>
                  <p className="zen-title mb-1" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{it.name}</p>
                  <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{it.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 px-8 py-12 text-center" style={{ background: 'var(--color-zen-paper-warm)' }}>
          <p className="zen-serif mb-6" style={{ fontSize: 18, color: 'var(--color-green-ink)', letterSpacing: '0.15em' }}>
            {t('gcoinNote')}
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-3.5 text-sm transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('lineEnroll')}
          </a>
        </div>
      </div>
    </div>
  )
}
