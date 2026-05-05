import SectionHeading from '@/components/ui/SectionHeading'

const usages = [
  { icon: '🛒', title: '實體折抵', desc: '於平台購買嚴選環保商品時，可依比例折抵現金。' },
  { icon: '🧘', title: '課程兌換', desc: '完整兌換「預防保健組」開設之心靈環保課程。' },
  { icon: '❤️', title: '公益轉贈', desc: '將綠幣捐贈予社區內弱勢家庭，協助其獲取生活必需品。' },
]

const steps = [
  { step: '1', title: '拍照預審', desc: '透過 LINE 介面上傳物資照片。' },
  { step: '2', title: '現場核驗', desc: '將物資攜至社區福利中心，由經營者依標準核對。' },
  { step: '3', title: '綠幣入帳', desc: '核驗合格後，GCS-IC 系統即時發放綠幣至會員錢包。' },
]

export default function GreenCoinPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeading title="🪙 綠幣系統（G-Coin）" subtitle="資源重生的數位貨幣，讓每件閒置物品都有價值" />

      <div className="bg-[var(--color-green-pale)] border border-[var(--color-green-light)] rounded-2xl p-6 mb-10">
        <h3 className="font-bold text-[var(--color-green-dark)] mb-2">什麼是綠幣？</h3>
        <p className="text-sm text-[var(--color-green-mid)] leading-relaxed">
          綠幣（G-Coin）不只是點數，而是具備「身心能量」屬性的通用代幣。每一枚綠幣的產生與流向均記錄於雲端帳本，不可偽造。綠幣之折抵價值與新台幣掛鉤，確保「綠幣即價值」。
        </p>
      </div>

      <SectionHeading title="以物換物流程" />
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        {steps.map((s) => (
          <div key={s.step} className="flex-1 bg-white border border-[var(--color-green-light)] rounded-2xl p-5 text-center shadow-sm">
            <div className="w-10 h-10 bg-[var(--color-green-primary)] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
              {s.step}
            </div>
            <h4 className="font-bold text-[var(--color-green-dark)] mb-1">{s.title}</h4>
            <p className="text-xs text-[var(--color-green-mid)]">{s.desc}</p>
          </div>
        ))}
      </div>

      <SectionHeading title="綠幣用途" />
      <div className="grid md:grid-cols-3 gap-4">
        {usages.map((u) => (
          <div key={u.title} className="bg-white border border-[var(--color-green-light)] rounded-2xl p-5 shadow-sm">
            <div className="text-3xl mb-3">{u.icon}</div>
            <h4 className="font-bold text-[var(--color-green-dark)] mb-1">{u.title}</h4>
            <p className="text-xs text-[var(--color-green-mid)] leading-relaxed">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
