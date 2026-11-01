'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/party', label: 'The Party' },
  { href: '/dress-code', label: 'Dress Code' },
  { href: '/guests', label: 'Guests' },
  { href: '/tip', label: 'Send a Tip' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header>
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:px-8">
          <span>Manhattan&apos;s Elite Edition</span>
          <span className="hidden sm:inline">Vol. XVI · Est. 2011</span>
          <span className="text-gold">
            <span aria-hidden="true">👑</span> Upper East Side
          </span>
        </div>
      </div>

      <nav aria-label="Main" className="bg-pink">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-2 md:px-8">
          {NAV.map((item, i) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <li key={item.href} className="flex items-center">
                {i > 0 && (
                  <span aria-hidden="true" className="px-1 text-white/60">
                    |
                  </span>
                )}
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'block px-3 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black/20 md:px-5 md:text-sm',
                    active && 'bg-black/30 underline decoration-gold decoration-2 underline-offset-8',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
