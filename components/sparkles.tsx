const DOTS = [
  { top: '-6px', left: '8%', delay: '0s', color: 'bg-gold' },
  { top: '-6px', left: '45%', delay: '0.8s', color: 'bg-pink' },
  { top: '-6px', left: '82%', delay: '1.6s', color: 'bg-white' },
  { top: '30%', left: '-6px', delay: '0.4s', color: 'bg-pink' },
  { top: '70%', left: '-6px', delay: '1.2s', color: 'bg-gold' },
  { top: '20%', left: 'calc(100% - 6px)', delay: '2s', color: 'bg-white' },
  { top: '60%', left: 'calc(100% - 6px)', delay: '0.6s', color: 'bg-gold' },
  { top: 'calc(100% - 6px)', left: '20%', delay: '1.4s', color: 'bg-white' },
  { top: 'calc(100% - 6px)', left: '60%', delay: '0.2s', color: 'bg-gold' },
  { top: 'calc(100% - 6px)', left: '90%', delay: '1s', color: 'bg-pink' },
]

export function Sparkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {DOTS.map((d, i) => (
        <span
          key={i}
          className={`sparkle-dot absolute size-3 rotate-45 ${d.color}`}
          style={{ top: d.top, left: d.left, animationDelay: d.delay }}
        />
      ))}
    </div>
  )
}
