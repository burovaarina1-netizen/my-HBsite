type PageHeadingProps = {
  kicker?: string
  title: string
  icon?: string
}

export function PageHeading({ kicker, title, icon }: PageHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <div className="border-y-4 border-double border-white/80 py-6">
        {kicker && (
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold">{kicker}</p>
        )}
        <h1 className="text-balance font-serif text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
          {icon && (
            <span aria-hidden="true" className="mr-3 align-middle text-4xl md:text-5xl">
              {icon}
            </span>
          )}
          {title}
        </h1>
      </div>
      <div className="mt-1 h-px bg-pink" />
    </div>
  )
}
