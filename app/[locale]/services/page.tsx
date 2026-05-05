import SectionHeading from '@/components/ui/SectionHeading'
import type { ReactNode } from 'react'

// ─── Timeline step ────────────────────────────────────────────────────────────

function Step({
  n, title, sub, last = false,
}: { n: number; title: string; sub?: string; last?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-base text-white shadow-md"
          style={{ background: 'var(--color-green-primary)' }}
        >
          {n}
        </div>
        {!last && (
          <div className="w-0.5 flex-1 mt-2" style={{ background: 'var(--color-green-light)' }} />
        )}
      </div>
      <div className={`flex-1 ${last ? 'pb-0' : 'pb-7'}`}>
        <div
          className="rounded-2xl px-5 py-4 border shadow-sm"
          style={{ background: 'white', borderColor: 'var(--color-green-light)' }}
        >
          <p className="font-bold text-sm" style={{ color: 'var(--color-green-dark)' }}>{title}</p>
          {sub && (
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>{sub}</p>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Outcome card row ─────────────────────────────────────────────────────────

function OutcomeCard({
  emoji, label, sub, variant = 'green',
}: { emoji: string; label: string; sub?: string; variant?: 'green' | 'blue' | 'amber' | 'red' }) {
  const styles: Record<string, { bg: string; border: string; text: string }> = {
    green:  { bg: 'var(--color-green-pale)',  border: 'var(--color-green-primary)', text: 'var(--color-green-dark)' },
    blue:   { bg: '#EFF6FF',                  border: '#93C5FD',                   text: '#1E40AF' },
    amber:  { bg: '#FFFBEB',                  border: '#FCD34D',                   text: '#92400E' },
    red:    { bg: '#FEF2F2',                  border: '#FCA5A5',                   text: '#991B1B' },
  }
  const s = styles[variant]
  return (
    <div
      className="flex-1 rounded-2xl p-4 border-2 text-center"
      style={{ background: s.bg, borderColor: s.border }}
    >
      <div className="text-2xl mb-2">{emoji}</div>
      <p className="font-bold text-xs" style={{ color: s.text }}>{label}</p>
      {sub && <p className="text-[10px] mt-1 opacity-70" style={{ color: s.text }}>{sub}</p>}
    </div>
  )
}

// ─── Decision node ────────────────────────────────────────────────────────────

function Decision({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-5 mb-7">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-base text-white shadow-md"
          style={{ background: '#D97706' }}
        >
          ◆
        </div>
        <div className="w-0.5 flex-1 mt-2" style={{ background: 'var(--color-green-light)' }} />
      </div>
      <div className="flex-1">
        <div className="rounded-2xl px-5 py-4 border-2 shadow-sm bg-amber-50 border-amber-300">
          <p className="font-bold text-sm text-amber-800">{children}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function ServiceSection({
  id, emoji, title, subtitle, children,
}: { id: string; emoji: string; title: string; subtitle: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {/* Section header */}
      <div
        className="rounded-3xl px-8 py-6 mb-8 flex items-center gap-5"
        style={{ background: `linear-gradient(135deg, var(--color-green-dark) 0%, var(--color-green-primary) 100%)` }}
      >
        <span className="text-5xl">{emoji}</span>
        <div>
          <h2 className="text-xl font-black text-white">{title}</h2>
          <p className="text-sm mt-0.5" style={{ color: 'var(--color-green-light)' }}>{subtitle}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="pl-2">{children}</div>
    </section>
  )
}

// ─── Locale data ──────────────────────────────────────────────────────────────

const zh = {
  pageTitle: '服務流程說明',
  pageSubtitle: '玩具交換 · 閒置資源交換 · 腦波檢測 · 腦波調頻療程',
  nav: [
    { href: '#toy-exchange',      label: '🪀 玩具交換' },
    { href: '#idle-exchange',     label: '♻️ 閒置資源交換' },
    { href: '#brainwave-check',   label: '🧠 腦波檢測' },
    { href: '#brainwave-therapy', label: '🎵 腦波療程' },
  ],
  toy: {
    title: '玩具交換流程',
    subtitle: '帶來舊玩具，換走綠幣 G-Coin',
    steps: [
      { title: 'LINE 上傳照片預審', sub: '透過 LINE 官方帳號上傳玩具照片，工作人員進行線上初步評估' },
      { title: '核驗結果通知', sub: '合格：收到通知後，攜帶玩具至社區福利中心據點；不合格：收到退件說明，流程結束' },
      { title: '攜帶玩具至據點現場核驗', sub: '工作人員進行實體衛生與品質核驗，確認玩具狀態符合交換標準' },
      { title: 'GCS-IC 計算綠幣數量', sub: '依照玩具對照表計算應發綠幣，數量當場確認' },
      { title: '綠幣即時入帳', sub: '掃碼或報號，G-Coin 立即存入帳戶' },
    ],
    gcoinUsesTitle: '綠幣可用於',
    outcomes: [
      { emoji: '🛍️', label: '折抵嚴選商品' },
      { emoji: '🧘', label: '兌換心靈課程' },
      { emoji: '💰', label: '保留累積使用' },
    ],
  },
  idle: {
    title: '閒置資源交換流程',
    subtitle: '讓閒置物品重新流動，換出生活價值',
    steps: [
      { title: '登記閒置物品', sub: '透過 LINE 或至社區據點填寫物品資訊：名稱、狀態、數量，並上傳照片' },
      { title: '工作人員初步評估', sub: '確認物品品質與可交換性，告知預估綠幣換算區間' },
      { title: '物品上架至社區交換平台', sub: '審核通過後，物品資訊公開至社區公告板或 LINE 群組，等待有需要的鄰里認領' },
      { title: '媒合成功 · 雙方確認', sub: '需求方提出申請後，工作人員協助雙方確認交換條件，安排取件時間與地點' },
      { title: '完成交換 · 綠幣入帳', sub: '物品順利移交後，雙方各獲得對應綠幣獎勵，記錄存入帳戶' },
    ],
    resourcesTitle: '可交換的資源類型',
    resources: [
      { emoji: '📦', label: '生活用品', sub: '家電、器具、衣物' },
      { emoji: '📚', label: '書籍教材', sub: '課本、繪本、雜誌' },
      { emoji: '🌿', label: '農產食材', sub: '自種蔬果、醃漬品' },
    ],
  },
  brainwaveCheck: {
    title: '腦波檢測流程',
    subtitle: '了解當下身心壓力與放鬆狀態',
    steps: [
      { title: '預約報名', sub: '透過 LINE 官方帳號預約，或直接至社區福利中心現場報名' },
      { title: '填寫基本問卷', sub: '記錄近期壓力狀況、睡眠品質、情緒狀態，作為量測參考基準' },
      { title: '佩戴腦波量測設備', sub: '工作人員協助佩戴非侵入式腦波感測器，過程安全無痛' },
      { title: '安靜量測 5–10 分鐘', sub: '靜坐閉眼，自然呼吸，系統同步擷取 α、β、θ、δ 各波段數據' },
      { title: '系統分析 · 出具腦波報告', sub: '量測結束後，系統自動運算並產出個人化腦波分析報告' },
      { title: '一對一解讀諮詢', sub: '工作人員逐項說明各波段狀態，解讀壓力與放鬆指數' },
    ],
    outcomesTitle: '根據結果推薦後續方案',
    outcomes: [
      { emoji: '🎵', label: '腦波調頻療程', sub: '高壓 / 低 α 波', variant: 'blue' as const },
      { emoji: '🌙', label: '深眠音頻療程', sub: '睡眠不足', variant: 'amber' as const },
      { emoji: '📋', label: '自主練習指引', sub: '狀態良好', variant: 'green' as const },
    ],
    gcoinNote: '所有後續方案費用均可使用 G-Coin 折抵',
  },
  brainwaveTherapy: {
    title: '腦波調頻療程流程',
    subtitle: '依檢測結果，引導大腦進入最佳修復波段',
    typesTitle: '療程類型（依腦波報告推薦）',
    types: [
      { emoji: '😌', label: 'α 波引導', sub: '放鬆 · 抗焦慮' },
      { emoji: '🌀', label: 'θ 波引導', sub: '冥想 · 創造力' },
      { emoji: '🌙', label: 'δ 波引導', sub: '深眠修復' },
    ],
    steps: [
      { title: '環境準備', sub: '舒適椅、燈光調暗、精油擴香，打造深度放鬆的療癒空間' },
      { title: '佩戴耳機 · 音頻播放開始', sub: '依選定波段播放對應頻率音頻，工作人員全程陪同' },
      { title: '療程進行 20–40 分鐘', sub: '閉眼、自然呼吸、被動接收頻率引導，無需刻意操作' },
      { title: '療程結束 · 緩慢回神', sub: '音頻漸弱後，留在椅上靜待 2–3 分鐘，讓身體自然甦醒' },
      { title: '填寫回饋問卷', sub: '記錄主觀感受與放鬆程度，作為下次調整依據' },
      { title: '工作人員建議後續方案', sub: '根據本次反應，建議是否安排追蹤或居家練習' },
    ],
    outcomesTitle: '療程後的下一步',
    outcomes: [
      { emoji: '📅', label: '預約下次療程', sub: '持續改善', variant: 'green' as const },
      { emoji: '🏠', label: '居家音頻資源', sub: '自主練習', variant: 'blue' as const },
      { emoji: '🔄', label: '一個月後回測', sub: '追蹤效果', variant: 'amber' as const },
    ],
  },
  cta: {
    title: '所有服務均可使用綠幣（G-Coin）折抵',
    desc: '透過 LINE 預約或詢問詳情',
    button: '📱 LINE 立即詢問',
  },
}

const en = {
  pageTitle: 'Service Process',
  pageSubtitle: 'Toy Exchange · Idle Resource Exchange · Brainwave Detection · Brainwave Tuning Therapy',
  nav: [
    { href: '#toy-exchange',      label: '🪀 Toy Exchange' },
    { href: '#idle-exchange',     label: '♻️ Resource Exchange' },
    { href: '#brainwave-check',   label: '🧠 Brainwave Check' },
    { href: '#brainwave-therapy', label: '🎵 Brainwave Therapy' },
  ],
  toy: {
    title: 'Toy Exchange Process',
    subtitle: 'Bring old toys, earn G-Coins',
    steps: [
      { title: 'Upload Photos via LINE for Pre-check', sub: 'Upload toy photos via LINE official account for preliminary staff assessment' },
      { title: 'Verification Result Notification', sub: 'Pass: bring toys to Community Welfare Center. Fail: receive rejection notice, process ends' },
      { title: 'Bring Toys for On-site Verification', sub: 'Staff conduct physical hygiene and quality check to confirm exchange eligibility' },
      { title: 'GCS-IC Calculates G-Coin Amount', sub: 'G-Coins calculated per the reference table, confirmed on the spot' },
      { title: 'G-Coins Credited Instantly', sub: 'Scan or provide member ID — G-Coins immediately deposited' },
    ],
    gcoinUsesTitle: 'G-Coins can be used for',
    outcomes: [
      { emoji: '🛍️', label: 'Discount on Products' },
      { emoji: '🧘', label: 'Redeem Wellness Courses' },
      { emoji: '💰', label: 'Save & Accumulate' },
    ],
  },
  idle: {
    title: 'Idle Resource Exchange Process',
    subtitle: 'Let idle resources flow, exchange for life value',
    steps: [
      { title: 'Register Idle Items', sub: 'Upload item photos and details via LINE or register in person at the community outlet' },
      { title: 'Staff Initial Review', sub: 'Staff verify item quality and communicate estimated G-Coin range' },
      { title: 'Item Listed on Community Exchange Platform', sub: 'Approved items are posted to the community board and LINE group' },
      { title: 'Match Confirmed by Both Parties', sub: 'Staff coordinate with both parties to confirm exchange terms and pickup' },
      { title: 'Exchange Complete · G-Coins Credited', sub: 'G-Coins credited upon successful transfer' },
    ],
    resourcesTitle: 'Exchangeable Resource Types',
    resources: [
      { emoji: '📦', label: 'Daily Goods', sub: 'Appliances, tools, clothing' },
      { emoji: '📚', label: 'Books & Materials', sub: 'Textbooks, picture books, magazines' },
      { emoji: '🌿', label: 'Agricultural Products', sub: 'Home-grown produce, pickles' },
    ],
  },
  brainwaveCheck: {
    title: 'Brainwave Detection Process',
    subtitle: 'Understand your current mind-body stress and relaxation state',
    steps: [
      { title: 'Book an Appointment', sub: 'Book via LINE official account or register in person at the community outlet' },
      { title: 'Fill in Basic Questionnaire', sub: 'Record recent stress, sleep quality, and emotional state as baseline reference' },
      { title: 'Put on Brainwave Measurement Device', sub: 'Staff assist with non-invasive sensor placement — safe and painless' },
      { title: 'Quiet Measurement 5–10 Minutes', sub: 'Sit quietly with eyes closed, breathe naturally while the system captures α, β, θ, δ wave data' },
      { title: 'System Analysis · Brainwave Report Generated', sub: 'After measurement, the system auto-generates your personalized brainwave report' },
      { title: 'One-on-One Interpretation Consultation', sub: 'Staff explain each wave band\'s status and interpret stress and relaxation indices' },
    ],
    outcomesTitle: 'Recommended follow-up based on results',
    outcomes: [
      { emoji: '🎵', label: 'Brainwave Tuning Therapy', sub: 'High stress / Low α wave', variant: 'blue' as const },
      { emoji: '🌙', label: 'Deep Sleep Audio Therapy', sub: 'Sleep deficiency', variant: 'amber' as const },
      { emoji: '📋', label: 'Self-practice Guide', sub: 'Good condition', variant: 'green' as const },
    ],
    gcoinNote: 'All follow-up costs can be offset with G-Coins',
  },
  brainwaveTherapy: {
    title: 'Brainwave Tuning Therapy Process',
    subtitle: 'Based on test results, guide the brain into optimal recovery frequencies',
    typesTitle: 'Therapy Type (based on brainwave report)',
    types: [
      { emoji: '😌', label: 'α Wave Guidance', sub: 'Relaxation · Anti-anxiety' },
      { emoji: '🌀', label: 'θ Wave Guidance', sub: 'Meditation · Creativity' },
      { emoji: '🌙', label: 'δ Wave Guidance', sub: 'Deep Sleep Recovery' },
    ],
    steps: [
      { title: 'Environment Preparation', sub: 'Comfortable chair, dimmed lights, essential oil diffusion — creating a deep relaxation space' },
      { title: 'Put on Headphones · Audio Begins', sub: 'Corresponding frequency audio plays per selected wave band, staff present throughout' },
      { title: 'Therapy Session 20–40 Minutes', sub: 'Eyes closed, breathe naturally, passively receive frequency guidance — no active effort needed' },
      { title: 'Session Ends · Slowly Return', sub: 'After the audio fades, rest in the chair for 2–3 minutes to allow the body to gently wake' },
      { title: 'Fill in Feedback Questionnaire', sub: 'Record subjective feelings and relaxation level as reference for next adjustment' },
      { title: 'Staff Recommend Follow-up Plan', sub: 'Based on this session\'s response, recommend next steps or home practice' },
    ],
    outcomesTitle: 'Next Steps After Therapy',
    outcomes: [
      { emoji: '📅', label: 'Book Next Session', sub: 'Ongoing improvement', variant: 'green' as const },
      { emoji: '🏠', label: 'Home Audio Resources', sub: 'Self-practice', variant: 'blue' as const },
      { emoji: '🔄', label: 'Retest in One Month', sub: 'Track effects', variant: 'amber' as const },
    ],
  },
  cta: {
    title: 'All services can be offset with G-Coins (G-Coin)',
    desc: 'Book via LINE or ask for details',
    button: '📱 Contact via LINE',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const d = locale === 'zh-TW' ? zh : en

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">

      <SectionHeading title={d.pageTitle} subtitle={d.pageSubtitle} center />

      {/* Quick nav */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {d.nav.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-sm font-semibold px-5 py-2 rounded-full border-2 transition-colors hover:opacity-80"
            style={{
              borderColor: 'var(--color-green-primary)',
              color: 'var(--color-green-primary)',
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-16">

        {/* ══ 1. TOY EXCHANGE ══════════════════════════════════════════════ */}
        <ServiceSection id="toy-exchange" emoji="🪀" title={d.toy.title} subtitle={d.toy.subtitle}>

          {d.toy.steps.map((step, i) => (
            <Step key={i} n={i + 1} title={step.title} sub={step.sub} last={i === d.toy.steps.length - 1} />
          ))}

          {/* G-Coin uses */}
          <div
            className="mt-8 rounded-2xl p-6 border"
            style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
          >
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              {d.toy.gcoinUsesTitle}
            </p>
            <div className="flex gap-3">
              {d.toy.outcomes.map((o) => (
                <OutcomeCard key={o.label} emoji={o.emoji} label={o.label} />
              ))}
            </div>
          </div>

        </ServiceSection>

        {/* ══ 2. IDLE RESOURCE EXCHANGE ══════════════════════════════════ */}
        <ServiceSection id="idle-exchange" emoji="♻️" title={d.idle.title} subtitle={d.idle.subtitle}>

          {d.idle.steps.map((step, i) => (
            <Step key={i} n={i + 1} title={step.title} sub={step.sub} last={i === d.idle.steps.length - 1} />
          ))}

          {/* What can be exchanged */}
          <div
            className="mt-8 rounded-2xl p-6 border"
            style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
          >
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              {d.idle.resourcesTitle}
            </p>
            <div className="flex gap-3">
              {d.idle.resources.map((r, i) => (
                <OutcomeCard key={i} emoji={r.emoji} label={r.label} sub={r.sub} variant={i === 1 ? 'blue' : i === 2 ? 'amber' : 'green'} />
              ))}
            </div>
          </div>

        </ServiceSection>

        {/* ══ 3. BRAINWAVE DETECTION ══════════════════════════════════════ */}
        <ServiceSection id="brainwave-check" emoji="🧠" title={d.brainwaveCheck.title} subtitle={d.brainwaveCheck.subtitle}>

          {d.brainwaveCheck.steps.map((step, i) => (
            <Step key={i} n={i + 1} title={step.title} sub={step.sub} last={i === d.brainwaveCheck.steps.length - 1} />
          ))}

          {/* 3-way outcome */}
          <div className="mt-8">
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              {d.brainwaveCheck.outcomesTitle}
            </p>
            <div className="flex gap-3">
              {d.brainwaveCheck.outcomes.map((o) => (
                <OutcomeCard key={o.label} emoji={o.emoji} label={o.label} sub={o.sub} variant={o.variant} />
              ))}
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-xs" style={{ color: 'var(--color-green-mid)' }}>
              {d.brainwaveCheck.gcoinNote}
            </p>
          </div>

        </ServiceSection>

        {/* ══ 4. BRAINWAVE THERAPY ════════════════════════════════════════ */}
        <ServiceSection id="brainwave-therapy" emoji="🎵" title={d.brainwaveTherapy.title} subtitle={d.brainwaveTherapy.subtitle}>

          {/* Therapy type selector */}
          <div className="mb-8">
            <p className="text-sm font-bold mb-3" style={{ color: 'var(--color-green-dark)' }}>
              {d.brainwaveTherapy.typesTitle}
            </p>
            <div className="flex gap-3">
              {d.brainwaveTherapy.types.map((tp) => (
                <OutcomeCard key={tp.label} emoji={tp.emoji} label={tp.label} sub={tp.sub} variant="blue" />
              ))}
            </div>
          </div>

          {d.brainwaveTherapy.steps.map((step, i) => (
            <Step key={i} n={i + 1} title={step.title} sub={step.sub} last={i === d.brainwaveTherapy.steps.length - 1} />
          ))}

          {/* Outcome */}
          <div className="mt-8">
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              {d.brainwaveTherapy.outcomesTitle}
            </p>
            <div className="flex gap-3">
              {d.brainwaveTherapy.outcomes.map((o) => (
                <OutcomeCard key={o.label} emoji={o.emoji} label={o.label} sub={o.sub} variant={o.variant} />
              ))}
            </div>
          </div>

        </ServiceSection>

        {/* CTA */}
        <div
          className="rounded-3xl p-8 text-center border"
          style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
        >
          <p className="text-base font-black mb-1" style={{ color: 'var(--color-green-dark)' }}>
            {d.cta.title}
          </p>
          <p className="text-sm mb-6" style={{ color: 'var(--color-green-mid)' }}>
            {d.cta.desc}
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-80 shadow-md"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            {d.cta.button}
          </a>
        </div>

      </div>
    </div>
  )
}
