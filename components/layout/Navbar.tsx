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

  const linkStyle: React.CSSProperties = {
    color: 'var(--color-green-ink)',
    fontFamily: 'var(--font-serif)',
    letterSpacing: '0.2em',
    fontSize: 13,
  }

  return (
    <nav
      className="sticky top-0 z-50"
      style={{ background: 'var(--color-zen-paper)', borderBottom: '1px solid var(--color-zen-rule)' }}
      aria-label="主要導覽"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image src="/logo.png" alt="Greenman Logo" width={36} height={36} className="object-contain" />
          <span className="zen-serif" style={{ color: 'var(--color-green-ink)', fontSize: 14, letterSpacing: '0.15em', lineHeight: 1.3 }}>
            社團法人<br />綠超人行動促進會
          </span>
        </Link>

        <div className="flex md:hidden items-center gap-4">
          <Link
            href={`/${locale}/portal`}
            className="px-4 py-2"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em', fontSize: 12 }}
          >
            {t('portal')}
          </Link>
          <Link href={langHref} style={linkStyle}>{t('lang')}</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={`/${locale}${l.href}`} style={linkStyle} className="hover:opacity-60 transition-opacity">
              {l.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/portal`}
            className="px-4 py-2"
            style={{ background: 'var(--color-green-ink)', color: 'var(--color-zen-paper)', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em', fontSize: 12 }}
          >
            {t('portal')}
          </Link>
          <Link href={langHref} style={linkStyle} className="hover:opacity-60">{t('lang')}</Link>
        </div>
      </div>
    </nav>
  )
}
