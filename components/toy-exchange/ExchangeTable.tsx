'use client'
import { useLocale } from 'next-intl'

const zhRows = [
  { type: '積木 / 拼圖', condition: '完整無缺件', coins: '50-150' },
  { type: '娃娃 / 布偶', condition: '乾淨可清洗', coins: '30-80' },
  { type: '交通工具玩具', condition: '功能正常', coins: '40-120' },
  { type: '桌遊 / 益智遊戲', condition: '配件齊全', coins: '80-200' },
  { type: '電動玩具', condition: '可正常運作', coins: '100-300' },
  { type: '圖書 / 繪本', condition: '無破損塗鴉', coins: '20-60' },
]

const enRows = [
  { type: 'Building Blocks / Puzzles', condition: 'Complete, no missing pieces', coins: '50-150' },
  { type: 'Dolls / Stuffed Animals', condition: 'Clean & washable', coins: '30-80' },
  { type: 'Vehicle Toys', condition: 'Fully functional', coins: '40-120' },
  { type: 'Board Games / Puzzles', condition: 'All accessories included', coins: '80-200' },
  { type: 'Electronic Toys', condition: 'Operates normally', coins: '100-300' },
  { type: 'Books / Picture Books', condition: 'No tears or scribbles', coins: '20-60' },
]

const zhHeaders = { type: '玩具類型', condition: '接受條件', coins: '綠幣範圍（G-Coin）' }
const enHeaders = { type: 'Toy Type', condition: 'Acceptance Condition', coins: 'G-Coin Range' }

export default function ExchangeTable() {
  const locale = useLocale()
  const rows = locale === 'zh-TW' ? zhRows : enRows
  const h = locale === 'zh-TW' ? zhHeaders : enHeaders

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ backgroundColor: 'var(--color-green-primary)', color: 'white' }}>
            <th className="px-4 py-3 text-left rounded-tl-xl">{h.type}</th>
            <th className="px-4 py-3 text-left">{h.condition}</th>
            <th className="px-4 py-3 text-left rounded-tr-xl">{h.coins}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.type} style={{ backgroundColor: i % 2 === 0 ? 'white' : 'var(--color-green-pale)' }}>
              <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-green-dark)' }}>{row.type}</td>
              <td className="px-4 py-3" style={{ color: 'var(--color-green-mid)' }}>{row.condition}</td>
              <td className="px-4 py-3 font-bold" style={{ color: 'var(--color-orange-accent)' }}>{row.coins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
