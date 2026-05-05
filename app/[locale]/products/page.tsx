import { getTranslations } from 'next-intl/server'
import SectionHeading from '@/components/ui/SectionHeading'

const zhProducts = [
  { emoji: '🌾', name: '有機無毒食糧櫃', desc: '小農契作米、有機雜糧、原包裝健康乾貨', value: '吃的安全，守護土地。' },
  { emoji: '🧴', name: '天然清防護專櫃', desc: '生物分解洗劑、天然抑菌噴霧、無化學添加皂類', value: '居家無毒，河川友善。' },
  { emoji: '♻️', name: '生活再生品專櫃', desc: '再生紙製品、竹纖維餐具、環保材質袋包', value: '減塑生活，資源重生。' },
  { emoji: '💊', name: '預防保健機能櫃', desc: '植物性蛋白質、發酵營養補充品、機能飲品', value: '內在平衡，預防勝於治療。' },
  { emoji: '🏋️', name: '健康維護器材櫃', desc: '物理性拉伸儀、護頸/護脊器材、空氣淨化器', value: '物理減壓，居家復健。' },
  { emoji: '🧘', name: '心靈課程兌換專區', desc: '正念減壓音頻、情緒管理工坊、香療體驗組', value: '境隨心轉，心靈減碳。' },
  { emoji: '🔄', name: '資源重生樣品區', desc: '社區會員「以物換物」成功翻新之物資', value: '舊物轉生，良幣流通。' },
  { emoji: '🌽', name: '季節性友善農產', desc: '產地直供季節蔬果（採預購加值模式）', value: '旬味好食，地產地消。' },
  { emoji: '💡', name: '節能智慧家電櫃', desc: '一級能效小家電、LED 照明系統', value: '節能減碳，省電即省錢。' },
  { emoji: '🌱', name: '居家綠色植栽櫃', desc: '淨化空氣植栽、有機肥料、自動澆灌模組', value: '森林居家，氧氣生活。' },
]

const enProducts = [
  { emoji: '🌾', name: 'Organic Food Counter', desc: 'Contracted small-farm rice, organic grains, packaged healthy dried goods', value: 'Safe to eat, protect the land.' },
  { emoji: '🧴', name: 'Natural Care Counter', desc: 'Biodegradable detergents, natural antibacterial sprays, chemical-free soaps', value: 'Non-toxic home, river-friendly.' },
  { emoji: '♻️', name: 'Recycled Goods Counter', desc: 'Recycled paper products, bamboo fiber tableware, eco-material bags', value: 'Less plastic, resources reborn.' },
  { emoji: '💊', name: 'Preventive Health Counter', desc: 'Plant-based protein, fermented supplements, functional beverages', value: 'Inner balance, prevention over cure.' },
  { emoji: '🏋️', name: 'Health Equipment Counter', desc: 'Physical stretching devices, neck/back supports, air purifiers', value: 'Physical relief, home rehabilitation.' },
  { emoji: '🧘', name: 'Wellness Course Exchange', desc: 'Mindfulness audio, emotion management workshops, aromatherapy kits', value: 'Inner peace, mindful living.' },
  { emoji: '🔄', name: 'Upcycled Items Zone', desc: 'Items successfully refurbished through community member exchanges', value: 'Old items reborn, good coins flow.' },
  { emoji: '🌽', name: 'Seasonal Friendly Produce', desc: 'Direct-from-farm seasonal fruits and vegetables (pre-order model)', value: 'Seasonal taste, local consumption.' },
  { emoji: '💡', name: 'Smart Home Appliances', desc: 'Grade-A energy-efficient appliances, LED lighting systems', value: 'Save energy, save money.' },
  { emoji: '🌱', name: 'Home Green Plants Counter', desc: 'Air-purifying plants, organic fertilizer, auto-irrigation modules', value: 'Forest at home, oxygen living.' },
]

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'products' })

  const products = locale === 'zh-TW' ? zhProducts : enProducts

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />
      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <div key={p.name} className="bg-white border border-[var(--color-green-light)] rounded-2xl p-5 shadow-sm flex gap-4 items-start">
            <div className="text-3xl shrink-0">{p.emoji}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black text-[var(--color-green-primary)]">#{i + 1}</span>
                <h3 className="font-bold text-[var(--color-green-dark)] text-sm">{p.name}</h3>
              </div>
              <p className="text-xs text-[var(--color-green-mid)] mb-2">{p.desc}</p>
              <span className="bg-[var(--color-green-light)] text-[var(--color-green-dark)] text-xs px-2 py-1 rounded-full">{p.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
