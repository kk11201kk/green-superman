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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  await params

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">

      <SectionHeading title="服務流程說明" subtitle="玩具交換 · 閒置資源交換 · 腦波檢測 · 腦波調頻療程" center />

      {/* Quick nav */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[
          { href: '#toy-exchange',      label: '🪀 玩具交換' },
          { href: '#idle-exchange',     label: '♻️ 閒置資源交換' },
          { href: '#brainwave-check',   label: '🧠 腦波檢測' },
          { href: '#brainwave-therapy', label: '🎵 腦波療程' },
        ].map(({ href, label }) => (
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
        <ServiceSection id="toy-exchange" emoji="🪀" title="玩具交換流程" subtitle="帶來舊玩具，換走綠幣 G-Coin">

          <Step n={1} title="LINE 上傳照片預審" sub="透過 LINE 官方帳號上傳玩具照片，工作人員進行線上初步評估" />
          <Step n={2} title="核驗結果通知" sub="合格：收到通知後，攜帶玩具至社區福利中心據點；不合格：收到退件說明，流程結束" />
          <Step n={3} title="攜帶玩具至據點現場核驗" sub="工作人員進行實體衛生與品質核驗，確認玩具狀態符合交換標準" />
          <Step n={4} title="GCS-IC 計算綠幣數量" sub="依照玩具對照表計算應發綠幣，數量當場確認" />
          <Step n={5} title="綠幣即時入帳" sub="掃碼或報號，G-Coin 立即存入帳戶" last />

          {/* G-Coin uses */}
          <div
            className="mt-8 rounded-2xl p-6 border"
            style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
          >
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              綠幣可用於
            </p>
            <div className="flex gap-3">
              <OutcomeCard emoji="🛍️" label="折抵嚴選商品" />
              <OutcomeCard emoji="🧘" label="兌換心靈課程" />
              <OutcomeCard emoji="💰" label="保留累積使用" />
            </div>
          </div>

        </ServiceSection>

        {/* ══ 2. IDLE RESOURCE EXCHANGE ══════════════════════════════════ */}
        <ServiceSection id="idle-exchange" emoji="♻️" title="閒置資源交換流程" subtitle="讓閒置物品重新流動，換出生活價值">

          <Step n={1} title="登記閒置物品" sub="透過 LINE 或至社區據點填寫物品資訊：名稱、狀態、數量，並上傳照片" />
          <Step n={2} title="工作人員初步評估" sub="確認物品品質與可交換性，告知預估綠幣換算區間" />
          <Step n={3} title="物品上架至社區交換平台" sub="審核通過後，物品資訊公開至社區公告板或 LINE 群組，等待有需要的鄰里認領" />
          <Step n={4} title="媒合成功 · 雙方確認" sub="需求方提出申請後，工作人員協助雙方確認交換條件，安排取件時間與地點" />
          <Step n={5} title="完成交換 · 綠幣入帳" sub="物品順利移交後，雙方各獲得對應綠幣獎勵，記錄存入帳戶" last />

          {/* What can be exchanged */}
          <div
            className="mt-8 rounded-2xl p-6 border"
            style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
          >
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              可交換的資源類型
            </p>
            <div className="flex gap-3">
              <OutcomeCard emoji="📦" label="生活用品" sub="家電、器具、衣物" variant="green" />
              <OutcomeCard emoji="📚" label="書籍教材" sub="課本、繪本、雜誌" variant="blue" />
              <OutcomeCard emoji="🌿" label="農產食材" sub="自種蔬果、醃漬品" variant="amber" />
            </div>
          </div>

        </ServiceSection>

        {/* ══ 3. BRAINWAVE DETECTION ══════════════════════════════════════ */}
        <ServiceSection id="brainwave-check" emoji="🧠" title="腦波檢測流程" subtitle="了解當下身心壓力與放鬆狀態">

          <Step n={1} title="預約報名" sub="透過 LINE 官方帳號預約，或直接至社區福利中心現場報名" />
          <Step n={2} title="填寫基本問卷" sub="記錄近期壓力狀況、睡眠品質、情緒狀態，作為量測參考基準" />
          <Step n={3} title="佩戴腦波量測設備" sub="工作人員協助佩戴非侵入式腦波感測器，過程安全無痛" />
          <Step n={4} title="安靜量測 5–10 分鐘" sub="靜坐閉眼，自然呼吸，系統同步擷取 α、β、θ、δ 各波段數據" />
          <Step n={5} title="系統分析 · 出具腦波報告" sub="量測結束後，系統自動運算並產出個人化腦波分析報告" />
          <Step n={6} title="一對一解讀諮詢" sub="工作人員逐項說明各波段狀態，解讀壓力與放鬆指數" last />

          {/* 3-way outcome */}
          <div className="mt-8">
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              根據結果推薦後續方案
            </p>
            <div className="flex gap-3">
              <OutcomeCard emoji="🎵" label="腦波調頻療程" sub="高壓 / 低 α 波" variant="blue" />
              <OutcomeCard emoji="🌙" label="深眠音頻療程" sub="睡眠不足" variant="amber" />
              <OutcomeCard emoji="📋" label="自主練習指引" sub="狀態良好" variant="green" />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-xs" style={{ color: 'var(--color-green-mid)' }}>
              所有後續方案費用均可使用 G-Coin 折抵
            </p>
          </div>

        </ServiceSection>

        {/* ══ 3. BRAINWAVE THERAPY ════════════════════════════════════════ */}
        <ServiceSection id="brainwave-therapy" emoji="🎵" title="腦波調頻療程流程" subtitle="依檢測結果，引導大腦進入最佳修復波段">

          {/* Therapy type selector */}
          <div className="mb-8">
            <p className="text-sm font-bold mb-3" style={{ color: 'var(--color-green-dark)' }}>
              療程類型（依腦波報告推薦）
            </p>
            <div className="flex gap-3">
              <OutcomeCard emoji="😌" label="α 波引導" sub="放鬆 · 抗焦慮" variant="blue" />
              <OutcomeCard emoji="🌀" label="θ 波引導" sub="冥想 · 創造力" variant="blue" />
              <OutcomeCard emoji="🌙" label="δ 波引導" sub="深眠修復" variant="blue" />
            </div>
          </div>

          <Step n={1} title="環境準備" sub="舒適椅、燈光調暗、精油擴香，打造深度放鬆的療癒空間" />
          <Step n={2} title="佩戴耳機 · 音頻播放開始" sub="依選定波段播放對應頻率音頻，工作人員全程陪同" />
          <Step n={3} title="療程進行 20–40 分鐘" sub="閉眼、自然呼吸、被動接收頻率引導，無需刻意操作" />
          <Step n={4} title="療程結束 · 緩慢回神" sub="音頻漸弱後，留在椅上靜待 2–3 分鐘，讓身體自然甦醒" />
          <Step n={5} title="填寫回饋問卷" sub="記錄主觀感受與放鬆程度，作為下次調整依據" />
          <Step n={6} title="工作人員建議後續方案" sub="根據本次反應，建議是否安排追蹤或居家練習" last />

          {/* Outcome */}
          <div className="mt-8">
            <p className="text-sm font-bold text-center mb-4" style={{ color: 'var(--color-green-dark)' }}>
              療程後的下一步
            </p>
            <div className="flex gap-3">
              <OutcomeCard emoji="📅" label="預約下次療程" sub="持續改善" variant="green" />
              <OutcomeCard emoji="🏠" label="居家音頻資源" sub="自主練習" variant="blue" />
              <OutcomeCard emoji="🔄" label="一個月後回測" sub="追蹤效果" variant="amber" />
            </div>
          </div>

        </ServiceSection>

        {/* CTA */}
        <div
          className="rounded-3xl p-8 text-center border"
          style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
        >
          <p className="text-base font-black mb-1" style={{ color: 'var(--color-green-dark)' }}>
            所有服務均可使用綠幣（G-Coin）折抵
          </p>
          <p className="text-sm mb-6" style={{ color: 'var(--color-green-mid)' }}>
            透過 LINE 預約或詢問詳情
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-80 shadow-md"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            📱 LINE 立即詢問
          </a>
        </div>

      </div>
    </div>
  )
}
