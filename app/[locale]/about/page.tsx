import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'

const teams = [
  { en: 'Human Resources & PR', zh: '人事公關組' },
  { en: 'Supply Chain Integration', zh: '供應鏈整合組' },
  { en: 'Digital System & IT', zh: '數位系統組' },
  { en: 'Community Outlets', zh: '社區據點組' },
  { en: 'Activity & Promotion', zh: '活動宣導組' },
  { en: 'Business Consulting & SOP', zh: '企管輔導組' },
  { en: 'Preventive Health & Wellness', zh: '預防保健組' },
  { en: 'Finance & Accounting', zh: '財務會計組' },
]

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-6 border border-[var(--color-green-light)] shadow-sm">
          <h3 className="font-bold text-[var(--color-green-dark)] mb-3">🌍 {t('visionTitle')}</h3>
          <p className="text-sm text-[var(--color-green-mid)] leading-relaxed">{t('vision')}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-[var(--color-green-light)] shadow-sm">
          <h3 className="font-bold text-[var(--color-green-dark)] mb-3">🧘 {t('missionTitle')}</h3>
          <p className="text-sm text-[var(--color-green-mid)] leading-relaxed">{t('mission')}</p>
        </div>
      </div>

      <SectionHeading title={t('teamsTitle')} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {teams.map((team, i) => (
          <div key={team.en} className="bg-[var(--color-green-pale)] border border-[var(--color-green-light)] rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-[var(--color-green-primary)] mb-1">{i + 1}</div>
            <p className="text-sm font-semibold text-[var(--color-green-dark)]">{team.zh}</p>
            <p className="text-xs text-[var(--color-green-mid)] mt-1">{team.en}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
