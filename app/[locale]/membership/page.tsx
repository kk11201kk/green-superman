import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'

const zhBenefits = [
  { emoji: '🛍️', title: '嚴選商品會員折扣', desc: '比市價便宜 25–30%，購物省更多' },
  { emoji: '🪙', title: '綠幣儲值與兌換資格', desc: '累積綠幣折抵消費、兌換課程，讓閒置物品變生活資本' },
  { emoji: '🧸', title: '玩具交換服務', desc: '免費參與社區玩具交換，舊玩具換綠幣' },
  { emoji: '♻️', title: '閒置資源交換服務', desc: '登記任何閒置物品，媒合成功即入帳綠幣' },
  { emoji: '🧘', title: '心靈課程優先報名', desc: '會員享有優先選課資格及課程費用折扣' },
  { emoji: '🧠', title: '腦波檢測服務', desc: '專業非侵入式腦波量測，了解身心壓力狀態' },
  { emoji: '🎵', title: '腦波調頻療程優惠', desc: '依檢測結果引導大腦進入修復波段，會員享優惠價' },
  { emoji: '📣', title: '社區活動邀請', desc: '第一手收到綠超人社區活動、工作坊、市集通知' },
  { emoji: '📰', title: '月刊電子報', desc: '定期收到環保生活提案、健康資訊與社區動態' },
]

const enBenefits = [
  { emoji: '🛍️', title: 'Curated Product Discounts', desc: '25–30% below market price — save more on every purchase' },
  { emoji: '🪙', title: 'G-Coin Savings & Redemption', desc: 'Accumulate G-Coins to offset purchases and redeem courses — turn idle items into life capital' },
  { emoji: '🧸', title: 'Toy Exchange Service', desc: 'Participate in community toy exchange for free — swap old toys for G-Coins' },
  { emoji: '♻️', title: 'Resource Exchange Service', desc: 'Register any idle item — earn G-Coins instantly upon successful match' },
  { emoji: '🧘', title: 'Priority Course Registration', desc: 'Members enjoy priority enrollment and course fee discounts' },
  { emoji: '🧠', title: 'Brainwave Detection Service', desc: 'Professional non-invasive brainwave measurement to understand your stress and relaxation state' },
  { emoji: '🎵', title: 'Brainwave Therapy Discount', desc: 'Guide the brain into recovery frequencies based on test results — members enjoy preferential pricing' },
  { emoji: '📣', title: 'Community Event Invitations', desc: 'First access to Greenman community events, workshops, and market notifications' },
  { emoji: '📰', title: 'Monthly Newsletter', desc: 'Regular eco-living tips, health information, and community updates delivered to you' },
]

const zhSteps = [
  { num: '1', title: '透過 LINE 聯絡', desc: '加入綠超人官方 LINE，告知欲申請會員資格，工作人員將回覆入會說明。' },
  { num: '2', title: '繳交年費', desc: '確認方案後繳交年費 NT$3,600，可選擇轉帳或現場繳費。' },
  { num: '3', title: '開通帳號 · 開始享受', desc: '工作人員於 24 小時內開通您的會員帳號，綠幣錢包同步啟用。' },
]

const enSteps = [
  { num: '1', title: 'Contact Us via LINE', desc: 'Join the Greenman official LINE account, tell us you\'d like to apply for membership, and staff will reply with instructions.' },
  { num: '2', title: 'Pay Annual Fee', desc: 'After confirming the plan, pay the NT$3,600 annual fee via bank transfer or in person.' },
  { num: '3', title: 'Account Activated · Start Enjoying', desc: 'Staff will activate your member account within 24 hours. Your G-Coin wallet will be enabled at the same time.' },
]

const zhFaq = [
  { q: '年費是多少？', a: 'NT$3,600 / 年（平均每月 NT$300）。正式上線前享有早鳥優惠，詳情請洽 LINE。' },
  { q: '年費含什麼？', a: '所有會員服務資格（嚴選折扣、綠幣儲值、玩具與閒置交換、心靈課程、腦波服務優惠）均包含在內，無隱藏費用。' },
  { q: '年費可以退費嗎？', a: '會員權益啟用後 7 日內如有疑慮可申請退費。7 日後恕不受理，請謹慎評估後入會。' },
  { q: '可以家庭共用嗎？', a: '目前每帳號僅適用一位會員本人，家庭方案規劃中，敬請期待。' },
  { q: '何時可以登入會員系統？', a: '會員後台系統正在建置中，預計近期上線。開通前仍可享有所有線下服務。' },
]

const enFaq = [
  { q: 'How much is the annual fee?', a: 'NT$3,600 / year (approximately NT$300/month). Early-bird pricing is available before official launch — contact us via LINE for details.' },
  { q: 'What does the annual fee include?', a: 'All member service access is included — curated discounts, G-Coin savings, toy & resource exchanges, wellness courses, and brainwave service discounts. No hidden fees.' },
  { q: 'Can I get a refund?', a: 'Refund requests can be made within 7 days of activation. After 7 days, refunds are not available — please consider carefully before joining.' },
  { q: 'Can a family share one account?', a: 'Currently each account is for one member only. A family plan is in development — stay tuned.' },
  { q: 'When can I log in to the member system?', a: 'The member backend is under development and will launch soon. All offline services remain fully available in the meantime.' },
]

const zhInline = {
  pricingPer: '/年',
  pricingDesc: '平均每月 NT$300，即可解鎖全部會員權益',
  faqTitle: '常見問題',
  existingMember: '已有帳號？',
  loginLink: '前往登入',
}

const enInline = {
  pricingPer: '/yr',
  pricingDesc: 'Avg. NT$300/month — unlock all member benefits',
  faqTitle: 'FAQ',
  existingMember: 'Already a member?',
  loginLink: 'Log in',
}

export default async function MembershipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'membership' })

  const benefits = locale === 'zh-TW' ? zhBenefits : enBenefits
  const steps = locale === 'zh-TW' ? zhSteps : enSteps
  const faqItems = locale === 'zh-TW' ? zhFaq : enFaq
  const il = locale === 'zh-TW' ? zhInline : enInline

  return (
    <div>

      {/* ── Hero ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: `linear-gradient(160deg, var(--color-green-dark) 0%, var(--color-green-primary) 100%)` }}
      >
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-green-light)' }}>
          {t('badge')}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          {t('heroTitle')}
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--color-green-light)' }}>
          {t('heroSubtitle')}
        </p>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl px-8 py-3.5 text-base font-black transition-opacity hover:opacity-90 shadow-lg"
          style={{ backgroundColor: 'var(--color-orange-accent)', color: 'var(--color-green-dark)' }}
        >
          📱 {t('heroCta')}
        </a>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── Pricing Card ── */}
        <div className="flex justify-center mb-16">
          <div
            className="rounded-3xl p-10 text-center border-2 shadow-lg w-full max-w-sm"
            style={{ borderColor: 'var(--color-green-primary)', background: 'white' }}
          >
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--color-green-mid)' }}>
              {t('planLabel')}
            </p>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-xl font-bold" style={{ color: 'var(--color-green-dark)' }}>NT$</span>
              <span className="text-6xl font-black leading-none" style={{ color: 'var(--color-green-primary)' }}>3,600</span>
              <span className="text-base font-semibold mb-1" style={{ color: 'var(--color-green-mid)' }}>{il.pricingPer}</span>
            </div>
            <p className="text-sm mb-6" style={{ color: 'var(--color-green-mid)' }}>
              {il.pricingDesc}
            </p>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl py-3 text-base font-black text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-green-primary)' }}
            >
              {t('pricingCta')}
            </a>
            <p className="text-xs mt-3" style={{ color: 'var(--color-green-mid)' }}>
              {t('earlyBird')}
            </p>
          </div>
        </div>

        {/* ── Benefits ── */}
        <SectionHeading title={t('benefitsTitle')} center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 items-start rounded-2xl p-5 border"
              style={{ background: 'var(--color-green-pale)', borderColor: 'var(--color-green-light)' }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{b.emoji}</span>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: 'var(--color-green-dark)' }}>{b.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── How to Join ── */}
        <SectionHeading title={t('howToJoinTitle')} center />
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex-1 bg-white border rounded-2xl p-5 text-center shadow-sm"
              style={{ borderColor: 'var(--color-green-light)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3 text-white"
                style={{ backgroundColor: 'var(--color-green-primary)' }}
              >
                {s.num}
              </div>
              <h4 className="font-bold mb-2 text-sm" style={{ color: 'var(--color-green-dark)' }}>{s.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <SectionHeading title={il.faqTitle} center />
        <div className="flex flex-col gap-3 mb-16">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border px-6 py-4 bg-white"
              style={{ borderColor: 'var(--color-green-light)' }}
            >
              <summary className="font-semibold text-sm cursor-pointer" style={{ color: 'var(--color-green-dark)' }}>
                {item.q}
              </summary>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--color-green-mid)' }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="rounded-3xl p-10 text-center border"
          style={{ background: `linear-gradient(135deg, var(--color-green-dark) 0%, var(--color-green-primary) 100%)` }}
        >
          <p className="text-2xl font-black text-white mb-2">{t('bottomCtaTitle')}</p>
          <p className="text-sm mb-6" style={{ color: 'var(--color-green-light)' }}>{t('bottomCtaDesc')}</p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl px-8 py-3.5 text-base font-black transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--color-orange-accent)', color: 'var(--color-green-dark)' }}
          >
            📱 {t('heroCta')}
          </a>
          <p className="mt-4 text-xs" style={{ color: 'var(--color-green-light)' }}>
            {il.existingMember}{' '}
            <Link href={`/${locale}/portal`} className="underline hover:opacity-80">
              {il.loginLink}
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}
