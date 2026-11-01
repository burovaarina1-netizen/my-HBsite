export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center md:px-8">
        <p className="font-serif text-lg italic text-white">
          {'You know you love me.'}
        </p>
        <p className="font-serif text-3xl font-black tracking-widest text-pink">
          XOXO <span aria-hidden="true">💋</span>
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Miss Gossip</p>
      </div>
    </footer>
  )
}
