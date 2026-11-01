import { GossipFeed } from '@/components/gossip-feed'

export default function HomePage() {
  return (
    <div>
      <section className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">
          <span aria-hidden="true">👑</span> Your one and only source <span aria-hidden="true">👑</span>
        </p>
        <div className="mt-4 border-y-4 border-double border-white/80 py-4">
          <h1 className="font-serif text-6xl font-black uppercase leading-none tracking-tight text-white sm:text-8xl md:text-9xl">
            Miss Gossip
          </h1>
        </div>
        <div className="mt-1 h-px bg-pink" />
        <div className="mt-3 flex flex-col items-center justify-between gap-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:flex-row">
          <span>Sweet Sixteen Special</span>
          <span className="font-serif text-sm normal-case italic tracking-normal text-pink">
            {'Spotted: the party of the year'}
          </span>
          <span>25 · 02 · 2027</span>
        </div>
      </section>

      <GossipFeed />
    </div>
  )
}
