const items = [
  'Full-Stack Developer',
  'React Specialist',
  'API Builder',
  'Building PumpOS',
  'TypeScript',
  'PostgreSQL',
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-sand/50 py-6 md:py-8">
      <div className="flex w-max animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i === 1}>
            {items.map((item, idx) => (
              <div key={`${i}-${idx}`} className="flex items-center">
                <span className="px-6 font-display text-3xl font-light tracking-tight text-ink md:px-10 md:text-5xl">
                  {item}
                </span>
                <span className="text-lg text-accent md:text-xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
