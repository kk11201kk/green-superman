import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'
import type { ReactNode } from 'react'

function ZenStep({ n, title, sub, last = false }: { n: string; title: string; sub?: string; last?: boolean }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="zen-serif" style={{ fontSize: 28, color: 'var(--color-zen-stamp)', fontWeight: 300, lineHeight: 1, minWidth: 32 }}>
          {n}
        </div>
        {!last && <div className="w-px flex-1 mt-3" style={{ background: 'var(--color-zen-rule)' }} />}
      </div>
      <div className={`flex-1 ${last ? 'pb-0' : 'pb-8'}`}>
        <p className="zen-title mb-2" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{title}</p>
        {sub && <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{sub}</p>}
      </div>
    </div>
  )
}

function ZenServiceSection({ id, stamp, title, subtitle, children }: { id: string; stamp: string; title: string; subtitle: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="text-center mb-12">
        <div className="mb-5 flex justify-center">
          <ZenStamp size="lg">{stamp}</ZenStamp>
        </div>
        <h2 className="zen-display mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-green-ink)' }}>
          {title}
        </h2>
        <div className="flex justify-center mb-4">
          <ZenLine width={40} />
        </div>
        <p className="text-sm" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
          {subtitle}
        </p>
      </div>
      <div className="pl-2 max-w-xl mx-auto">{children}</div>
    </section>
  )
}

const d = {
  pageTitle: '服務流程',
  pageSubtitle: '玩具交換 · 閒置交換 · 腦波檢測 · 腦波調頻',
  nav: [
    { href: '#toy', label: '玩具' },
    { href: '#idle', label: '閒置' },
    { href: '#check', label: '檢測' },
    { href: '#therapy', label: '療程' },
  ],
  toy: {
    title: '玩具交換流程',
    subtitle: '帶來舊玩具，換走綠幣',
    steps: [
      { t: 'LINE 上傳照片預審', s: '透過官方帳號上傳玩具照片，工作人員初步評估' },
      { t: '核驗結果通知', s: '合格：攜至福利中心；不合格：收到退件說明' },
      { t: '攜帶玩具至據點現場核驗', s: '工作人員進行衛生與品質核驗' },
      { t: '計算綠幣數量', s: '依玩具對照表計算應發綠幣，當場確認' },
      { t: '綠幣即時入帳', s: '掃碼或報號，立即存入帳戶' },
    ],
  },
  idle: {
    title: '閒置資源交換流程',
    subtitle: '讓閒置物品重新流動',
    steps: [
      { t: '登記閒置物品', s: '透過 LINE 或至據點填寫物品資訊與照片' },
      { t: '工作人員初步評估', s: '確認品質，告知預估綠幣換算區間' },
      { t: '物品上架社區平台', s: '審核通過後公告至交換板及 LINE 群組' },
      { t: '媒合成功 · 雙方確認', s: '需求方申請後，工作人員協助安排交接' },
      { t: '完成交換 · 綠幣入帳', s: '物品移交後雙方獲得對應綠幣' },
    ],
  },
  check: {
    title: '腦波檢測流程',
    subtitle: '了解當下身心壓力與放鬆狀態',
    steps: [
      { t: '預約報名', s: 'LINE 預約或現場報名' },
      { t: '填寫基本問卷', s: '記錄壓力、睡眠、情緒狀態' },
      { t: '佩戴腦波量測設備', s: '非侵入式感測器，安全無痛' },
      { t: '安靜量測 5–10 分鐘', s: '靜坐閉眼，自然呼吸' },
      { t: '系統分析 · 出具報告', s: '產出個人化腦波分析' },
      { t: '一對一解讀諮詢', s: '逐項說明壓力與放鬆指數' },
    ],
  },
  therapy: {
    title: '腦波調頻療程流程',
    subtitle: '引導大腦進入最佳修復波段',
    steps: [
      { t: '環境準備', s: '舒適椅、燈光調暗、精油擴香' },
      { t: '佩戴耳機 · 音頻播放', s: '依選定波段播放對應頻率' },
      { t: '療程進行 20–40 分鐘', s: '閉眼自然呼吸，被動接收引導' },
      { t: '療程結束 · 緩慢回神', s: '音頻漸弱後靜待 2–3 分鐘' },
      { t: '填寫回饋問卷', s: '記錄主觀感受與放鬆程度' },
      { t: '建議後續方案', s: '根據反應建議追蹤或居家練習' },
    ],
  },
  cta: {
    title: '所有服務均可使用綠幣折抵',
    desc: '透過 LINE 預約或詢問詳情',
    button: 'LINE 立即詢問',
  },
}

const toyNums = ['一', '二', '三', '四', '五']
const sixNums = ['一', '二', '三', '四', '五', '六']

export default async function ServicesPage() {
  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <ZenStamp size="lg">服務</ZenStamp>
          </div>
          <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--color-green-ink)' }}>
            {d.pageTitle}
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p className="text-sm" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
            {d.pageSubtitle}
          </p>
        </div>

        {/* 頁內錨點導覽 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-20">
          {d.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm pb-1 transition-opacity hover:opacity-60"
              style={{ borderBottom: '1px solid var(--color-zen-rule)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-24">
          <ZenServiceSection id="toy" stamp="玩具" title={d.toy.title} subtitle={d.toy.subtitle}>
            {d.toy.steps.map((s, i) => (
              <ZenStep key={i} n={toyNums[i]} title={s.t} sub={s.s} last={i === d.toy.steps.length - 1} />
            ))}
          </ZenServiceSection>

          <ZenServiceSection id="idle" stamp="閒置" title={d.idle.title} subtitle={d.idle.subtitle}>
            {d.idle.steps.map((s, i) => (
              <ZenStep key={i} n={toyNums[i]} title={s.t} sub={s.s} last={i === d.idle.steps.length - 1} />
            ))}
          </ZenServiceSection>

          <ZenServiceSection id="check" stamp="檢測" title={d.check.title} subtitle={d.check.subtitle}>
            {d.check.steps.map((s, i) => (
              <ZenStep key={i} n={sixNums[i]} title={s.t} sub={s.s} last={i === d.check.steps.length - 1} />
            ))}
          </ZenServiceSection>

          <ZenServiceSection id="therapy" stamp="療程" title={d.therapy.title} subtitle={d.therapy.subtitle}>
            {d.therapy.steps.map((s, i) => (
              <ZenStep key={i} n={sixNums[i]} title={s.t} sub={s.s} last={i === d.therapy.steps.length - 1} />
            ))}
          </ZenServiceSection>

          {/* Bottom CTA */}
          <div className="px-8 py-14 text-center" style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)' }}>
            <p className="zen-display mb-4" style={{ fontSize: 24 }}>{d.cta.title}</p>
            <p className="text-sm mb-8" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em', opacity: 0.75 }}>
              {d.cta.desc}
            </p>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-3.5 text-sm transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-zen-paper)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
            >
              {d.cta.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
