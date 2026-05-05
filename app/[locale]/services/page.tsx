import SectionHeading from '@/components/ui/SectionHeading'
import type { ReactNode } from 'react'

// ─── Flow primitives ──────────────────────────────────────────────────────────

function FlowStart({ label = '開始' }: { label?: string }) {
  return (
    <div className="flex justify-center">
      <span className="bg-[var(--color-green-dark)] text-white text-xs font-bold px-6 py-1.5 rounded-full tracking-wide">
        {label}
      </span>
    </div>
  )
}

function FlowEnd({ label = '結束' }: { label?: string }) {
  return (
    <div className="flex justify-center">
      <span className="bg-[var(--color-green-mid)] text-white text-xs font-bold px-6 py-1.5 rounded-full tracking-wide">
        {label}
      </span>
    </div>
  )
}

function FlowStep({ children, sub, small }: { children: ReactNode; sub?: string; small?: boolean }) {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-white border-2 border-[var(--color-green-light)] rounded-xl text-center shadow-sm w-full
          ${small ? 'px-2 py-2 max-w-[160px]' : 'px-5 py-3 max-w-[260px]'}`}
      >
        <p className={`font-semibold text-[var(--color-green-dark)] ${small ? 'text-[11px]' : 'text-sm'}`}>
          {children}
        </p>
        {sub && <p className="text-[10px] text-[var(--color-green-mid)] mt-0.5 leading-snug">{sub}</p>}
      </div>
    </div>
  )
}

function FlowDecision({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="bg-amber-50 border-2 border-amber-400 rounded-xl px-5 py-2.5 text-center shadow-sm">
        <span className="text-amber-400 text-xs mr-1">◆</span>
        <span className="font-bold text-sm text-amber-800">{children}</span>
      </div>
    </div>
  )
}

function FlowReject({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-red-50 border-2 border-red-200 rounded-xl px-3 py-2 text-center w-full">
        <p className="font-semibold text-[11px] text-red-600">{children}</p>
        {sub && <p className="text-[10px] text-red-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

function FlowGood({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-[var(--color-green-pale)] border-2 border-[var(--color-green-primary)] rounded-xl px-3 py-2 text-center w-full">
        <p className="font-semibold text-[11px] text-[var(--color-green-dark)]">{children}</p>
        {sub && <p className="text-[10px] text-[var(--color-green-mid)] mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

function FlowCard({ emoji, label, sub, color = 'blue' }: {
  emoji: string
  label: string
  sub?: string
  color?: 'blue' | 'purple' | 'green' | 'amber'
}) {
  const colorMap = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    green: 'bg-[var(--color-green-pale)] border-[var(--color-green-light)] text-[var(--color-green-dark)]',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
  }
  return (
    <div className={`border-2 rounded-xl p-3 text-center ${colorMap[color]}`}>
      <div className="text-xl mb-1">{emoji}</div>
      <p className="font-semibold text-[11px]">{label}</p>
      {sub && <p className="text-[10px] opacity-70 mt-0.5">{sub}</p>}
    </div>
  )
}

function Arr({ label, color = 'green' }: { label?: string; color?: 'green' | 'red' | 'amber' }) {
  const c = { green: 'text-[var(--color-green-mid)]', red: 'text-red-400', amber: 'text-amber-400' }
  return (
    <div className="flex flex-col items-center my-1.5">
      {label && <span className={`text-[10px] ${c[color]} mb-0.5 font-medium`}>{label}</span>}
      <span className={`${c[color]} text-base leading-none`}>↓</span>
    </div>
  )
}

function FlowSection({ id, icon, title, subtitle, children }: {
  id: string
  icon: string
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl">{icon}</span>
        <div>
          <h2 className="text-lg font-bold text-[var(--color-green-dark)]">{title}</h2>
          <p className="text-xs text-[var(--color-green-mid)]">{subtitle}</p>
        </div>
      </div>
      <div className="bg-white border-2 border-[var(--color-green-light)] rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col">{children}</div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  await params

  return (
    <div className="max-w-xl mx-auto px-6 py-12">

      {/* Header */}
      <SectionHeading title="服務流程說明" subtitle="玩具交換 · 腦波檢測 · 腦波調頻療程" center />

      {/* Quick nav anchors */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {[
          { href: '#toy-exchange',       label: '🪀 玩具交換' },
          { href: '#brainwave-check',    label: '🧠 腦波檢測' },
          { href: '#brainwave-therapy',  label: '🎵 腦波療程' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-xs font-semibold px-4 py-1.5 rounded-full border-2 border-[var(--color-green-primary)] text-[var(--color-green-primary)] hover:bg-[var(--color-green-pale)] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-10">

        {/* ══════════════════════════════════════════════════
            1. TOY EXCHANGE
        ═════════════════════════════════════════════════════ */}
        <FlowSection id="toy-exchange" icon="🪀" title="玩具交換流程" subtitle="帶來舊玩具，換走綠幣">

          <FlowStart />
          <Arr />
          <FlowStep sub="透過 LINE 官方帳號上傳玩具照片">LINE 上傳照片預審</FlowStep>
          <Arr />
          <FlowDecision>工作人員線上評估</FlowDecision>

          {/* Branch 1 */}
          <div className="grid grid-cols-2 gap-4 mt-2">

            {/* Left: reject */}
            <div className="flex flex-col items-center gap-1">
              <Arr label="↙ 不合格" color="red" />
              <FlowReject sub="附上不接受原因">退件通知</FlowReject>
              <Arr color="red" />
              <FlowEnd />
            </div>

            {/* Right: success → second decision */}
            <div className="flex flex-col items-center gap-1 w-full">
              <Arr label="↘ 合格" />
              <FlowStep small sub="社區福利中心">攜帶玩具至據點</FlowStep>
              <Arr />
              <FlowDecision>現場核驗</FlowDecision>

              {/* Nested branch 2 */}
              <div className="grid grid-cols-2 gap-2 w-full mt-1">
                <div className="flex flex-col items-center gap-1">
                  <Arr label="↙ 不合格" color="red" />
                  <FlowReject>退還玩具</FlowReject>
                  <Arr color="red" />
                  <FlowEnd />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Arr label="↘ 合格" />
                  <FlowGood sub="依對照表計算">GCS-IC 發幣</FlowGood>
                  <Arr />
                  <FlowGood>綠幣即時入帳</FlowGood>
                </div>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-6 pt-4 border-t border-dashed border-[var(--color-green-light)]">
            <p className="text-center text-xs text-[var(--color-green-mid)] mb-3 font-medium">綠幣可用於</p>
            <div className="grid grid-cols-3 gap-2">
              <FlowCard emoji="🛍️" label="折抵嚴選商品" color="green" />
              <FlowCard emoji="🧘" label="兌換心靈課程" color="green" />
              <FlowCard emoji="💰" label="保留累積" color="green" />
            </div>
          </div>

        </FlowSection>

        {/* ══════════════════════════════════════════════════
            2. BRAINWAVE DETECTION
        ═════════════════════════════════════════════════════ */}
        <FlowSection id="brainwave-check" icon="🧠" title="腦波檢測流程" subtitle="了解當下身心壓力與放鬆狀態">

          <FlowStart />
          <Arr />
          <FlowStep sub="LINE 預約 或 現場報名">預約報名</FlowStep>
          <Arr />
          <FlowStep sub="壓力狀況 · 睡眠品質 · 情緒狀態">填寫基本問卷</FlowStep>
          <Arr />
          <FlowStep>佩戴腦波量測設備</FlowStep>
          <Arr />
          <FlowStep sub="靜坐閉眼 · 自然呼吸 5–10 分鐘">安靜量測</FlowStep>
          <Arr />
          <FlowStep sub="α · β · θ · δ 波段分析">系統分析波段數據</FlowStep>
          <Arr />
          <FlowStep>出具個人腦波報告</FlowStep>
          <Arr />
          <FlowStep sub="工作人員說明各波段狀態">一對一解讀諮詢</FlowStep>
          <Arr />
          <FlowDecision>壓力 / 放鬆指數評估</FlowDecision>

          {/* 3-way branch */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col items-center gap-1">
              <Arr label="高壓 / 低α波" color="red" />
              <FlowCard emoji="🎵" label="腦波調頻療程" color="blue" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Arr label="睡眠不足" color="amber" />
              <FlowCard emoji="🌙" label="深眠音頻療程" color="blue" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Arr label="狀態良好" />
              <FlowCard emoji="📋" label="自主練習指引" color="blue" />
            </div>
          </div>

          <Arr />
          <FlowStep sub="G-Coin 可完整兌換或折抵">可用綠幣折抵費用</FlowStep>
          <Arr />
          <FlowEnd />

        </FlowSection>

        {/* ══════════════════════════════════════════════════
            3. BRAINWAVE THERAPY
        ═════════════════════════════════════════════════════ */}
        <FlowSection id="brainwave-therapy" icon="🎵" title="腦波調頻療程流程" subtitle="依檢測結果，引導大腦進入最佳修復波段">

          <FlowStart />
          <Arr />
          <FlowStep sub="根據腦波報告推薦">選擇療程類型</FlowStep>
          <Arr />

          {/* 3 therapy types */}
          <div className="grid grid-cols-3 gap-2">
            <FlowCard emoji="😌" label="α 波引導" sub="放鬆 · 抗焦慮" color="purple" />
            <FlowCard emoji="🌀" label="θ 波引導" sub="冥想 · 創造力" color="purple" />
            <FlowCard emoji="🌙" label="δ 波引導" sub="深眠修復" color="purple" />
          </div>
          <Arr label="選定後進入療程" />

          {/* Common steps */}
          <FlowStep sub="舒適椅 · 燈光調暗 · 精油擴香">環境準備</FlowStep>
          <Arr />
          <FlowStep>佩戴耳機 / 音頻播放開始</FlowStep>
          <Arr />
          <FlowStep sub="閉眼 · 自然呼吸 · 被動接收">療程進行 20–40 分鐘</FlowStep>
          <Arr />
          <FlowStep>療程結束 · 緩慢回神</FlowStep>
          <Arr />
          <FlowStep sub="主觀感受 · 放鬆程度">填寫回饋問卷</FlowStep>
          <Arr />
          <FlowStep>工作人員建議後續方案</FlowStep>
          <Arr />
          <FlowDecision>選擇下一步</FlowDecision>

          {/* 3-way outcome */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col items-center gap-1">
              <Arr label="持續改善" />
              <FlowCard emoji="📅" label="預約下次療程" color="blue" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Arr label="自主練習" color="amber" />
              <FlowCard emoji="🏠" label="居家音頻資源" color="blue" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Arr label="追蹤效果" />
              <FlowCard emoji="🔄" label="一個月後回測" color="blue" />
            </div>
          </div>

          <Arr />
          <FlowEnd />

        </FlowSection>

        {/* CTA */}
        <div className="bg-[var(--color-green-pale)] border-2 border-[var(--color-green-light)] rounded-2xl p-6 text-center">
          <p className="text-sm font-semibold text-[var(--color-green-dark)] mb-1">所有服務均可使用綠幣（G-Coin）折抵</p>
          <p className="text-xs text-[var(--color-green-mid)] mb-4">透過 LINE 預約或詢問詳情</p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            📱 LINE 立即詢問
          </a>
        </div>

      </div>
    </div>
  )
}
