import SectionHeading from '@/components/ui/SectionHeading'

const products = [
  { emoji: '🌾', name: '有機無毒食糧櫃', en: 'Organic Food', desc: '小農契作米、有機雜糧、原包裝健康乾貨', value: '吃的安全，守護土地。' },
  { emoji: '🧴', name: '天然清防護專櫃', en: 'Natural Care', desc: '生物分解洗劑、天然抑菌噴霧、無化學添加皂類', value: '居家無毒，河川友善。' },
  { emoji: '♻️', name: '生活再生品專櫃', en: 'Recycled Goods', desc: '再生紙製品、竹纖維餐具、環保材質袋包', value: '減塑生活，資源重生。' },
  { emoji: '💊', name: '預防保健機能櫃', en: 'Preventive Health', desc: '植物性蛋白質、發酵營養補充品、機能飲品', value: '內在平衡，預防勝於治療。' },
  { emoji: '🏋️', name: '健康維護器材櫃', en: 'Health Equipment', desc: '物理性拉伸儀、護頸/護脊器材、空氣淨化器', value: '物理減壓，居家復健。' },
  { emoji: '🧘', name: '心靈課程兌換專區', en: 'Wellness Courses', desc: '正念減壓音頻、情緒管理工坊、香療體驗組', value: '境隨心轉，心靈減碳。' },
  { emoji: '🔄', name: '資源重生樣品區', en: 'Upcycled Items', desc: '社區會員「以物換物」成功翻新之物資', value: '舊物轉生，良幣流通。' },
  { emoji: '🌽', name: '季節性友善農產', en: 'Seasonal Produce', desc: '產地直供季節蔬果（採預購加值模式）', value: '旬味好食，地產地消。' },
  { emoji: '💡', name: '節能智慧家電櫃', en: 'Smart Appliances', desc: '一級能效小家電、LED 照明系統', value: '節能減碳，省電即省錢。' },
  { emoji: '🌱', name: '居家綠色植栽櫃', en: 'Green Plants', desc: '淨化空氣植栽、有機肥料、自動澆灌模組', value: '森林居家，氧氣生活。' },
]

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading title="10 大嚴選專櫃" subtitle="去中間化直採，比市價便宜 25-30%" />
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
