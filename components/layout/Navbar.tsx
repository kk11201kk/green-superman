'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const otherLocale = locale === 'zh-TW' ? 'en' : 'zh-TW'

  const links = [
    { href: '/about', label: t('about') },
    { href: '/products', label: t('products') },
    { href: '/green-coin', label: t('greenCoin') },
    { href: '/toy-exchange', label: t('toyExchange') },
    { href: '/wellness', label: t('wellness') },
    { href: '/news', label: t('news') },
  ]

  return (
    <nav style={{ borderBottom: '1px solid var(--color-green-light)' }} className="sticky top-0 z-50 bg-white" aria-label="主要導覽">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <div aria-hidden="true" style={{ background: 'var(--color-green-primary)' }} className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm">
            G
          </div>
          <span style={{ color: 'var(--color-green-dark)' }} className="font-bold text-sm">綠超人環保促進會</span>
        </Link>

        <div className="flex items-center gap-5 text-sm" style={{ color: 'var(--color-green-mid)' }}>
          {links.map((link) => (
            <Link key={link.href} href={`/${locale}${link.href}`} style={{ color: 'inherit' }} className="hover:opacity-70 transition-opacity">
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/portal`}
            style={{ background: 'var(--color-green-primary)', color: '#fff' }}
            className="px-3 py-1.5 rounded-md font-semibold text-sm"
          >
            {t('portal')}
          </Link>
          <Link href={`/${otherLocale}`} className="text-gray-400 hover:opacity-70">
            {t('lang')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
