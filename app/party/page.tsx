import type { Metadata } from 'next'
import { ImageIcon } from 'lucide-react'
import { PageHeading } from '@/components/page-heading'
import { Sparkles } from '@/components/sparkles'

export const metadata: Metadata = { title: 'The Party — Miss Gossip' }

export default function PartyPage() {
  return (
    <div>
      <PageHeading kicker="You're invited" title="The Party" icon="👑" />

      <div className="glitter-frame relative mx-auto max-w-2xl p-[3px]">
        <Sparkles />
        <div className="relative bg-background p-6 md:p-10">
          <div className="border border-gold/60 p-6 text-center md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Sweet Sixteen</p>

            <div
              role="img"
              aria-label="Место для фотографии именинницы"
              className="mx-auto my-6 flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center gap-2 bg-neutral-700 text-neutral-300"
            >
              <ImageIcon className="size-10" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em]">Photo</span>
            </div>

            <p className="text-pretty font-serif text-2xl leading-snug text-white md:text-3xl">
              Приглашаю тебя на моё 16-летие!
            </p>

            <div className="my-6 h-px bg-pink" />

            <dl className="grid gap-4 text-left sm:grid-cols-3 sm:text-center">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-pink">Date</dt>
                <dd className="mt-1 font-serif text-lg text-white">23 января 2027</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-pink">Time</dt>
                <dd className="mt-1 font-serif text-lg text-white">[ВРЕМЯ]</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-pink">Place</dt>
                <dd className="mt-1 font-serif text-lg text-white">[МЕСТО]</dd>
              </div>
            </dl>

            <div className="my-6 h-px bg-pink" />

            <p className="font-serif text-lg italic text-white/80">
              Опоздания не прощаются. Сплетни — гарантированы.
            </p>
            <p className="mt-4 font-serif text-3xl font-black tracking-widest text-pink">
              XOXO <span aria-hidden="true">💋</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
