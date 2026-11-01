import type { Metadata } from 'next'
import { PageHeading } from '@/components/page-heading'

export const metadata: Metadata = { title: 'Dress Code — Miss Gossip' }

export default function DressCodePage() {
  return (
    <div>
      <PageHeading kicker="What to wear" title="Dress Code" />

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[1fr_2fr]">
        <aside className="border-t-4 border-pink pt-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Fashion Column</p>
          <p className="mt-3 font-serif text-3xl italic leading-tight text-white">
            {'«Headbands are a statement.»'}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true">👑</span> Queen B approved
          </p>
        </aside>

        <article className="border border-border bg-card p-6 md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">The Rules</span>
            <div className="h-px flex-1 bg-gold" />
          </div>
          <p className="font-serif text-2xl leading-relaxed text-white first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-none first-letter:text-pink">
            [Текст про дресс-код]
          </p>
          <div className="mt-8 h-px bg-border" />
          <p className="mt-4 text-right font-serif text-xl font-black tracking-widest text-pink">
            XOXO <span aria-hidden="true">💋</span>
          </p>
        </article>
      </div>
    </div>
  )
}
