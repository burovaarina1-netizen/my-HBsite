import type { Metadata } from 'next'
import { UserRound } from 'lucide-react'
import { PageHeading } from '@/components/page-heading'

export const metadata: Metadata = { title: 'Guests — Miss Gossip' }

const GUESTS = [
  { file: '001', name: '[Имя гостя]', bio: '[Короткий текст о госте]' },
  { file: '002', name: '[Имя гостя]', bio: '[Короткий текст о госте]' },
  { file: '003', name: '[Имя гостя]', bio: '[Короткий текст о госте]' },
  { file: '004', name: '[Имя гостя]', bio: '[Короткий текст о госте]' },
]

export default function GuestsPage() {
  return (
    <div>
      <PageHeading kicker="The usual suspects" title="Guests" />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {GUESTS.map((g) => (
          <li key={g.file}>
            <article className="h-full border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-2 text-[10px] uppercase tracking-[0.3em]">
                <span className="text-pink">Confidential</span>
                <span className="text-muted-foreground">File #{g.file}</span>
              </div>
              <div
                role="img"
                aria-label="Место для фото гостя"
                className="flex aspect-square items-center justify-center bg-neutral-700"
              >
                <UserRound className="size-14 text-neutral-400" aria-hidden="true" />
              </div>
              <div className="p-4">
                <h2 className="font-serif text-2xl font-bold text-white">{g.name}</h2>
                <div className="my-3 h-px w-12 bg-gold" />
                <p className="text-sm leading-relaxed text-white/80">{g.bio}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
