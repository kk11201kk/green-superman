import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'
import ZenStamp from '@/components/zen/ZenStamp'
import ZenLine from '@/components/zen/ZenLine'

const zhUsages = [
  { title: '實體折抵', desc: '於平台購買嚴選環保商品時，可依比例折抵現金' },
  { title: '課程兌換', desc: '完整兌換預防保健組開設之心靈環保課程' },
  { title: '公益轉贈', desc: '將綠幣捐贈予社區內弱勢家庭，協助獲取生活必需品' },
]
const enUsages = [
  { title: 'Discount', desc: 'Offset purchases of eco-products' },
  { title: 'Redeem Courses', desc: 'Redeem wellness courses fully' },
  { title: 'Donate', desc: 'Support disadvantaged families' },
]
const zhSteps = [
  { title: '拍照預審', desc: '透過 LINE 介面上傳物資照片' },
  { title: '現場核驗', desc: '攜至社區福利中心，由經營者依標準核對' },
  { title: '綠幣入帳', desc: '核驗合格後即時發放綠幣至會員錢包' },
]
const enSteps = [
  { title: 'Photo Pre-check', desc: 'Upload via LINE' },
  { title: 'On-site Verify', desc: 'Bring to welfare center' },
  { title: 'Credited', desc: 'Instantly to wallet' },
]

export default async function GreenCoinPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'greenCoin' })
  const usages = locale === 'zh-TW' ? zhUsages : enUsages
  const steps = locale === 'zh-TW' ? zhSteps : enSteps
  const nums = locale === 'zh-TW' ? ['一', '二', '三'] : ['1', '2', '3']
  const usageNums = locale === 'zh-TW' ? ['壹', '貳', '參'] : ['01', '02', '03']

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <ZenStamp size="lg">綠幣</ZenStamp>
          </div>
          <h1 className="zen-display mb-6" style={{ fontSize: 'clamp(48px, 8vw, 96px)', color: 'var(--color-green-ink)' }}>
            G · COIN
          </h1>
          <div className="flex justify-center mb-6">
            <ZenLine width={48} />
          </div>
          <p className="max-w-lg mx-auto text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
            {t('pageSubtitle')}
          </p>
        </div>

        {/* 說明 */}
        <div className="px-8 py-12 mb-20" style={{ borderTop: '1px solid var(--color-zen-rule)', borderBottom: '1px solid var(--color-zen-rule)' }}>
          <p className="zen-title mb-4" style={{ fontSize: 16, color: 'var(--color-green-ink)' }}>
            {t('whatTitle')}
          </p>
          <p className="text-sm leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>
            {t('description')}
          </p>
        </div>

        {/* 取得流程 */}
        <ZenSectionHeading stamp="流程" title={t('howToTitle')} center />
        <div className="grid grid-cols-3 gap-8 mb-20">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="zen-display mb-4" style={{ fontSize: 56, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {nums[i]}
              </div>
              <div className="flex justify-center mb-4">
                <ZenLine width={24} />
              </div>
              <p className="zen-title mb-2" style={{ fontSize: 14, color: 'var(--color-green-ink)' }}>{s.title}</p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 用途 */}
        <ZenSectionHeading stamp="用途" title={t('usageTitle')} center />
        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--color-zen-rule)' }}>
          {usages.map((u, i) => (
            <div key={u.title} className="p-8" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="zen-serif mb-4" style={{ fontSize: 28, color: 'var(--color-zen-stamp)', fontWeight: 300 }}>
                {usageNums[i]}
              </div>
              <p className="zen-title mb-3" style={{ fontSize: 15, color: 'var(--color-green-ink)' }}>{u.title}</p>
              <p className="text-xs leading-loose" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{u.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs mt-6 text-center" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>
          {t('gcoinUsageNote')}
        </p>
      </div>
    </div>
  )
}
