import { testimonials, brands } from '../data/content'
import { FadeUp, SectionHeader, Stagger, StaggerItem } from './Motion'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="05 / Testimonials"
          title="What clients say."
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="h-full p-8 md:p-10 bg-sand/40 rounded-2xl border border-ink/10 flex flex-col">
                <div className="text-6xl font-display leading-none text-accent mb-4">
                  &ldquo;
                </div>
                <blockquote className="flex-1 text-lg leading-relaxed text-ink/90 mb-8">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-ink/10 overflow-hidden shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML =
                          `<div class="w-full h-full flex items-center justify-center font-display text-lg">${t.name[0]}</div>`
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Brands marquee */}
        <FadeUp>
          <div className="border-t border-ink/10 pt-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted text-center mb-8">
              Worked With
            </div>
            <div className="overflow-hidden">
              <div className="flex animate-marquee-reverse whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center shrink-0">
                    {brands.map((b, idx) => (
                      <span
                        key={`${i}-${idx}`}
                        className="font-display text-3xl text-muted px-8 flex items-center gap-8"
                      >
                        {b}
                        <span className="text-ink/20">•</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
