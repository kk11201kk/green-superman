import SectionHeading from '@/components/ui/SectionHeading'

const courses = [
  {
    category: '正念減壓模組',
    emoji: '🧘',
    items: [
      { name: '呼吸覺察', desc: '引導在日常生活中透過呼吸重拾專注。' },
      { name: '身體掃描', desc: '緩解因壓力產生的肌肉緊張與物理疼痛。' },
    ],
  },
  {
    category: '情緒管理與能量轉化',
    emoji: '💫',
    items: [
      { name: '情緒排毒', desc: '學習識別負面情緒，並將焦慮轉化為正面行動力。' },
      { name: '境隨心轉工坊', desc: '探討內在穩定如何影響外在環境的選擇。' },
    ],
  },
  {
    category: '自然療法與物理保健',
    emoji: '🌿',
    items: [
      { name: '氣功動療', desc: '推廣易學有效的社區氣功與伸展運動。' },
      { name: '香療與音療', desc: '利用天然精油與頻率波長達成深度放鬆。' },
    ],
  },
]

export default function WellnessPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeading title="🧘 心靈環保課程" subtitle="境隨心轉 — 內在安定是永續生活的起點" />
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((cat) => (
          <div key={cat.category} className="bg-white border border-[var(--color-green-light)] rounded-2xl p-5 shadow-sm">
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <h3 className="font-bold text-[var(--color-green-dark)] text-sm mb-4">{cat.category}</h3>
            {cat.items.map((item) => (
              <div key={item.name} className="mb-3">
                <p className="font-semibold text-sm text-[var(--color-green-primary)]">{item.name}</p>
                <p className="text-xs text-[var(--color-green-mid)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-10 bg-[var(--color-green-pale)] border border-[var(--color-green-light)] rounded-2xl p-6 text-center">
        <p className="text-[var(--color-green-dark)] font-semibold mb-3">課程可用綠幣（G-Coin）完整兌換或折抵</p>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors inline-block"
          style={{ backgroundColor: 'var(--color-green-primary)' }}
        >
          📱 透過 LINE 報名課程
        </a>
      </div>
    </div>
  )
}
