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
    { href: '/idle-exchange', label: t('idleExchange') },
    { href: '/wellness', label: t('wellness') },
    { href: '/membership', label: t('membership') },
    { href: '/news', label: t('news') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <nav
      style={{
        background: 'var(--color-zen-paper-warm)',
        borderBottom: '1px solid var(--color-zen-rule)',
      }}
      className="sticky top-0 z-50"
      aria-label="主要導覽"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src="/logo.png" alt="Greenman Association Logo" width={40} height={40} className="object-contain" />
          <span
            style={{
              color: 'var(--color-green-dark)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.06em',
            }}
            className="font-bold text-sm leading-tight"
          >
            社團法人<br />綠超人行動促進會
          </span>
        </Link>

        {/* Mobile: only portal + lang switcher */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href={`/${locale}/portal`}
            style={{
              background: 'var(--color-green-dark)',
              color: 'var(--color-zen-paper)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.06em',
            }}
            className="px-3 py-1.5 rounded text-sm font-semibold"
          >
            {t('portal')}
          </Link>
          <Link href={langHref} className="text-sm hover:opacity-70" style={{ color: 'var(--color-green-mid)' }}>
            {t('lang')}
          </Link>
        </div>

        {/* Desktop: full nav */}
        <div className="hidden md:flex items-center gap-5 text-sm" style={{ color: 'var(--color-green-mid)' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              style={{ color: 'inherit', letterSpacing: '0.04em' }}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/portal`}
            style={{
              background: 'var(--color-green-dark)',
              color: 'var(--color-zen-paper)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.06em',
            }}
            className="px-3 py-1.5 rounded font-semibold text-sm"
          >
            {t('portal')}
          </Link>
          <Link href={langHref} className="hover:opacity-70" style={{ color: 'var(--color-green-mid)' }}>
            {t('lang')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
