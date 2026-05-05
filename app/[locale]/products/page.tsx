import { getTranslations } from 'next-intl/server'
import ZenSectionHeading from '@/components/zen/ZenSectionHeading'

const zhProducts = [
  { name: '有機無毒食糧櫃', desc: '小農契作米、有機雜糧、健康乾貨', value: '吃的安全 守護土地' },
  { name: '天然清防護專櫃', desc: '生物分解洗劑、天然抑菌噴霧、無化學添加皂類', value: '居家無毒 河川友善' },
  { name: '生活再生品專櫃', desc: '再生紙製品、竹纖維餐具、環保材質袋包', value: '減塑生活 資源重生' },
  { name: '預防保健機能櫃', desc: '植物性蛋白質、發酵營養補充品、機能飲品', value: '內在平衡 預防勝治' },
  { name: '健康維護器材櫃', desc: '物理性拉伸儀、護頸護脊器材、空氣淨化器', value: '物理減壓 居家復健' },
  { name: '心靈課程兌換區', desc: '正念減壓音頻、情緒管理工坊、香療體驗組', value: '境隨心轉 心靈減碳' },
  { name: '資源重生樣品區', desc: '社區會員以物換物成功翻新之物資', value: '舊物轉生 良幣流通' },
  { name: '季節性友善農產', desc: '產地直供季節蔬果（採預購加值模式）', value: '旬味好食 地產地消' },
  { name: '節能智慧家電櫃', desc: '一級能效小家電、LED 照明系統', value: '節能減碳 省電省錢' },
  { name: '居家綠色植栽櫃', desc: '淨化空氣植栽、有機肥料、自動澆灌模組', value: '森林居家 氧氣生活' },
]
const enProducts = [
  { name: 'Organic Food', desc: 'Small-farm rice, organic grains, healthy dried goods', value: 'Safe · Land-friendly' },
  { name: 'Natural Care', desc: 'Biodegradable detergents, natural sprays, chemical-free soaps', value: 'Non-toxic · River-friendly' },
  { name: 'Recycled Goods', desc: 'Recycled paper, bamboo tableware, eco bags', value: 'Less plastic · Reborn' },
  { name: 'Preventive Health', desc: 'Plant protein, fermented supplements, functional drinks', value: 'Inner balance · Prevention' },
  { name: 'Health Equipment', desc: 'Stretching devices, neck/back supports, air purifiers', value: 'Physical relief · Home rehab' },
  { name: 'Wellness Exchange', desc: 'Mindfulness audio, emotion workshops, aromatherapy kits', value: 'Inner peace · Mindful' },
  { name: 'Upcycled Items', desc: 'Items refurbished through community exchanges', value: 'Reborn · Flow' },
  { name: 'Seasonal Produce', desc: 'Direct-from-farm seasonal fruits & veg', value: 'Seasonal · Local' },
  { name: 'Smart Appliances', desc: 'Grade-A energy-efficient appliances, LED', value: 'Save energy · Save money' },
  { name: 'Home Plants', desc: 'Air-purifying plants, organic fertilizer, irrigation', value: 'Forest · Oxygen' },
]

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'products' })
  const products = locale === 'zh-TW' ? zhProducts : enProducts
  const nums = locale === 'zh-TW'
    ? ['壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖', '拾']
    : ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

  return (
    <div style={{ background: 'var(--color-zen-paper)' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <ZenSectionHeading stamp="嚴選" title={t('title')} subtitle={t('subtitle')} center />
        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--color-zen-rule)' }}>
          {products.map((p, i) => (
            <div key={p.name} className="p-7 flex gap-5" style={{ background: 'var(--color-zen-paper)' }}>
              <div className="zen-serif flex-shrink-0" style={{ fontSize: 28, color: 'var(--color-zen-stamp)', fontWeight: 300, lineHeight: 1, minWidth: 32 }}>
                {nums[i]}
              </div>
              <div className="flex-1">
                <h3 className="zen-title mb-2" style={{ fontSize: 15, color: 'var(--color-green-ink)' }}>{p.name}</h3>
                <p className="text-xs leading-loose mb-3" style={{ color: 'var(--color-green-mid)', fontFamily: 'var(--font-serif)' }}>{p.desc}</p>
                <p className="text-xs zen-serif" style={{ color: 'var(--color-zen-stamp)', letterSpacing: '0.2em' }}>{p.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
