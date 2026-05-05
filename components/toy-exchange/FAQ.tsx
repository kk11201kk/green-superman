'use client'
import { useState } from 'react'

interface FAQItem { q: string; a: string }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={item.q} className="bg-white border border-[var(--color-green-light)] rounded-xl overflow-hidden">
          <button
            type="button"
            aria-expanded={openIndex === i}
            className="w-full text-left px-5 py-4 font-semibold text-[var(--color-green-dark)] text-sm flex justify-between items-center hover:bg-[var(--color-green-pale)] transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.q}
            <span className="text-[var(--color-green-primary)]">{openIndex === i ? '▲' : '▼'}</span>
          </button>
          <div
            className="px-5 text-sm text-[var(--color-green-mid)] leading-relaxed transition-all"
            style={{
              maxHeight: openIndex === i ? '200px' : '0',
              overflow: 'hidden',
              paddingBottom: openIndex === i ? '16px' : '0',
              visibility: openIndex === i ? 'visible' : 'hidden',
            }}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}
