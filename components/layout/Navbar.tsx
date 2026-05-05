'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const otherLocale = locale === 'zh-TW' ? 'en' : 'zh-TW'
  const pathname = usePathname()

  const langHref = `/${otherLocale}${(pathname ?? '').replace(/^\/(zh-TW|en)/, '')}`

  const links = [
    { href: '/about', label: t('about') },
    { href: '/products', label: t('products') },
    { href: '/green-coin', label: t('greenCoin') },
    { href: '/toy-exchange', label: t('toyExchange') },
    { href: '/wellness', label: t('wellness') },
    { href: '/services', label: t('services') },
    { href: '/news', label: t('news') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <nav style={{ borderBottom: '1px solid var(--color-green-light)' }} className="sticky top-0 z-50 bg-white" aria-label="主要導覽">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src="/logo.png" alt="Greenman Association Logo" width={40} height={40} className="object-contain" />
          <span style={{ color: 'var(--color-green-dark)' }} className="font-bold text-sm leading-tight">
            社團法人<br />綠超人行動促進會
          </span>
        </Link>

        {/* Mobile: only portal + lang switcher */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href={`/${locale}/portal`}
            style={{ background: 'var(--color-green-primary)', color: '#fff' }}
            className="px-3 py-1.5 rounded-md font-semibold text-sm"
          >
            {t('portal')}
          </Link>
          <Link href={langHref} className="text-gray-400 hover:opacity-70 text-sm">
            {t('lang')}
          </Link>
        </div>

        {/* Desktop: full nav */}
        <div className="hidden md:flex items-center gap-5 text-sm" style={{ color: 'var(--color-green-mid)' }}>
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
          <Link href={langHref} className="text-gray-400 hover:opacity-70">
            {t('lang')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
