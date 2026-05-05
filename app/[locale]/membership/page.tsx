import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

const zhBenefits = [
  { title: '嚴選商品會員折扣', desc: '比市價便宜 25–30%' },
  { title: '綠幣儲值與兌換', desc: '閒置物品變生活資本' },
  { title: '玩具交換服務', desc: '免費參與，舊玩具換綠幣' },
  { title: '閒置資源交換', desc: '媒合成功即入帳綠幣' },
  { title: '心靈課程優先報名', desc: '優先選課與費用折扣' },
  { title: '腦波檢測服務', desc: '了解身心壓力狀態' },
  { title: '腦波調頻療程優惠', desc: '會員享優惠價格' },
  { title: '社區活動邀請', desc: '工作坊、市集第一手通知' },
  { title: '月刊電子報', desc: '環保生活提案與社區動態' },
]
const enBenefits = [
  { title: 'Curated Discounts', desc: '25–30% below market' },
  { title: 'G-Coin Savings', desc: 'Idle items become capital' },
  { title: 'Toy Exchange', desc: 'Free, swap for G-Coins' },
  { title: 'Resource Exchange', desc: 'Earn G-Coins on match' },
  { title: 'Priority Courses', desc: 'Priority enrollment & discount' },
  { title: 'Brainwave Detection', desc: 'Stress & relaxation check' },
  { title: 'Therapy Discount', desc: 'Member preferential pricing' },
  { title: 'Event Invitations', desc: 'First access to workshops' },
  { title: 'Monthly Newsletter', desc: 'Eco tips & community news' },
]
const zhSteps = [
  { title: '透過 LINE 聯絡', desc: '加入官方帳號，告知欲申請會員資格' },
  { title: '繳交年費', desc: '確認方案後繳交 NT$3,600 年費' },
  { title: '開通帳號', desc: '24 小時內開通，綠幣錢包同步啟用' },
]
const enSteps = [
  { title: 'Contact via LINE', desc: 'Join official LINE & request membership' },
  { title: 'Pay Annual Fee', desc: 'Confirm plan, pay NT$3,600' },
  { title: 'Account Activated', desc: 'Within 24 hours, G-Coin wallet enabled' },
]
const zhFaq = [
  { q: '年費是多少？', a: 'NT$3,600 / 年（平均每月 NT$300）。' },
  { q: '年費含什麼？', a: '所有會員服務資格均包含在內，無隱藏費用。' },
  { q: '年費可以退費嗎？', a: '會員權益啟用後 7 日內如有疑慮可申請退費。' },
  { q: '可以家庭共用嗎？', a: '目前每帳號僅適用一位會員本人，家庭方案規劃中。' },
  { q: '何時可以登入會員系統？', a: '會員後台系統正在建置中，預計近期上線。' },
]
const enFaq = [
  { q: 'How much is the annual fee?', a: 'NT$3,600 / year (~NT$300/month).' },
  { q: 'What does it include?', a: 'All member services included, no hidden fees.' },
  { q: 'Can I get a refund?', a: 'Within 7 days of activation.' },
  { q: 'Family plan?', a: 'Currently single-member; family plan in development.' },
  { q: 'When can I log in?', a: 'Member backend launching soon.' },
]

export default async function MembershipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'membership' })
  const benefits = locale === 'zh-TW' ? zhBenefits : enBenefits
  const steps = locale === 'zh-TW' ? zhSteps : enSteps
  const faq = locale === 'zh-TW' ? zhFaq : enFaq
  const stepNums = locale === 'zh-TW' ? ['一', '二', '三'] : ['1', '2', '3']
  const benNums = locale === 'zh-TW'
    ? ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    : ['01', '02', '03', '04', '05', '06', '07', '08', '09']

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      {/* Hero */}
      <section className="py-24 px-6 text-center" style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)' }}>
        <div className="mb-8 flex justify-center">
          <ZenStamp size="lg">{t('badge')}</ZenStamp>
        </div>
        <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
          {t('heroTitle')}
        </h1>
        <div className="flex justify-center mb-8">
          <div style={{ height: 1, width: 48, background: 'var(--color-zen-paper)', opacity: 0.4 }} />
        </div>
        <p className="max-w-xl mx-auto mb-10 text-sm leading-loose" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em', opacity: 0.8 }}>
          {t('heroSubtitle')}
        </p>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-9 py-3.5 text-sm transition-opacity hover:opacity-85"
          style={{ background: 'var(--color-zen-paper)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
        >
          {t('heroCta')}
        </a>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Pricing */}
        <div className="text-center mb-20">
          <p className="text-[11px] mb-6" style={{ color: 'var(--color-zen-stamp)', letterSpacing: '0.4em', fontFamily: 'var(--font-serif)' }}>
            {t('planLabel')}
          </p>
          <div className="zen-display mb-2" style={{ fontSize: 'clamp(64px, 10vw, 120px)', color: 'var(--color-green-ink)', lineHeight: 1 }}>
            3,600
          </div>
          <p className="zen-serif mb-8" style={{ fontSize: 14, color: 'var(--color-green-mid)', letterSpacing: '0.3em' }}>NT · 年</p>
          <div className="flex justify-center mb-8">
            <ZenLine width={48} />
          </div>
          <p className="text-sm mb-10" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {locale === 'zh-TW' ? '平均每月 NT$300，即可解鎖全部會員權益' : 'Avg. NT$300/month — unlock all member benefits'}
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-3.5 text-sm transition-opacity hover:opacity-85"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('pricingCta')}
          </a>
          <p className="text-xs mt-6" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
            {t('earlyBird')}
          </p>
        </div>

        {/* Benefits */}
        <ZenSectionHeading stamp="權益" title={t('benefitsTitle')} center />
        <div className="grid md:grid-cols-3 gap-px mb-20" style={{ background: 'var(--color-zen-rule)' }}>
          {benefits.map((b, i) => (
            <div key={b.title} className="p-6" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="zen-serif mb-3" style={{ fontSize: 22, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {benNums[i]}
              </div>
              <p className="zen-title mb-2" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{b.title}</p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <ZenSectionHeading stamp="加入" title={t('howToJoinTitle')} center />
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="zen-display mb-4" style={{ fontSize: 56, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {stepNums[i]}
              </div>
              <div className="flex justify-center mb-4">
                <ZenLine width={24} />
              </div>
              <p className="zen-title mb-2" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{s.title}</p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <ZenSectionHeading stamp="問答" title={locale === 'zh-TW' ? '常見問題' : 'FAQ'} center />
        <div className="mb-16">
          {faq.map((f) => (
            <details key={f.q} className="py-5" style={{ borderBottom: '1px solid var(--color-zen-rule)' }}>
              <summary className="cursor-pointer text-sm" style={{ color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="px-8 py-14 text-center" style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)' }}>
          <p className="zen-display mb-4" style={{ fontSize: 32 }}>{t('bottomCtaTitle')}</p>
          <p className="text-sm mb-8" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em', opacity: 0.75 }}>
            {t('bottomCtaDesc')}
          </p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-3.5 text-sm transition-opacity hover:opacity-85"
            style={{ background: 'var(--color-zen-paper)', color: 'var(--color-green-ink)', fontFamily: 'var(--font-serif)', letterSpacing: '0.25em' }}
          >
            {t('heroCta')}
          </a>
          <p className="mt-6 text-xs" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em', opacity: 0.6 }}>
            {locale === 'zh-TW' ? '已有帳號？' : 'Have an account? '}
            <Link href={`/${locale}/portal`} className="underline">
              {locale === 'zh-TW' ? '前往登入' : 'Sign in'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
