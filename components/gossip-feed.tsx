'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { useGossips, type Gossip } from '@/lib/gossip-store'

function formatDate(ts: number) {
  return new Date(ts).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function GossipCard({ gossip, featured }: { gossip: Gossip; featured?: boolean }) {
  return (
    <article className="mb-6 break-inside-avoid border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2 text-[10px] uppercase tracking-[0.25em]">
        <span className="font-bold text-pink">{featured ? 'Breaking' : 'Spotted'}</span>
        <time dateTime={new Date(gossip.createdAt).toISOString()} className="text-muted-foreground">
          {formatDate(gossip.createdAt)}
        </time>
      </div>
      <p
        className={
          featured
            ? 'whitespace-pre-line text-pretty font-serif text-2xl leading-snug text-white first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-black first-letter:leading-none first-letter:text-pink'
            : 'whitespace-pre-line text-pretty leading-relaxed text-white/90'
        }
      >
        {gossip.text}
      </p>
      <p className="mt-4 border-t border-border pt-2 text-right font-serif text-sm italic text-gold">
        <span aria-hidden="true">💋</span> Прислано анонимно
      </p>
    </article>
  )
}

export function GossipFeed() {
  const gossips = useGossips()
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const filtered = q ? gossips.filter((g) => g.text.toLowerCase().includes(q)) : gossips
  const [first, ...rest] = filtered

  return (
    <section aria-labelledby="feed-title">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="mx-auto mb-10 max-w-xl">
        <label htmlFor="gossip-search" className="sr-only">
          Поиск по имени
        </label>
        <div className="flex items-center border border-white/70 bg-black focus-within:border-pink">
          <Search className="ml-4 size-5 text-pink" aria-hidden="true" />
          <input
            id="gossip-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введи имя — и узнай всё…"
            className="w-full bg-transparent px-3 py-3 text-white placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </form>

      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/40" />
        <h2 id="feed-title" className="font-serif text-2xl font-bold uppercase tracking-widest text-white">
          The Latest
        </h2>
        <div className="h-px flex-1 bg-white/40" />
      </div>

      {gossips.length === 0 ? (
        <div className="mx-auto max-w-lg border border-dashed border-border px-6 py-14 text-center">
          <p className="font-serif text-3xl italic text-white">{'Тишина… пока что.'}</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ни одной сплетни ещё не поступило. Но мы-то знаем: у каждого есть секрет.
          </p>
          <Link
            href="/tip"
            className="mt-6 inline-block bg-pink px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white hover:bg-pink/80"
          >
            Send a Tip
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <p className="py-14 text-center font-serif text-xl italic text-muted-foreground">
          {`Про «${query.trim()}» пока ничего не слышно… Но это ненадолго.`}
        </p>
      ) : (
        <>
          <GossipCard gossip={first} featured />
          {rest.length > 0 && (
            <div className="gap-6 sm:columns-2 lg:columns-3 [column-rule:1px_solid_var(--border)]">
              {rest.map((g) => (
                <GossipCard key={g.id} gossip={g} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
