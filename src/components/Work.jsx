import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'
import { FadeUp, SectionHeader } from './Motion'

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="03 / Selected Work"
          title="Things I've actually shipped."
          description="A handful of recent projects. Each one is live or open-source — happy to walk you through the code or the decisions behind it."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.05} className={p.featured ? 'md:col-span-2' : ''}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {p.featured && (
                  <div className="absolute -top-3 left-4 z-10 px-3 py-1 bg-accent text-bone rounded-full font-mono text-[10px] uppercase tracking-[0.15em]">
                    ✦ Featured
                  </div>
                )}
                <div className={`relative ${p.featured ? 'aspect-[16/8]' : 'aspect-[4/3]'} bg-ink/5 rounded-2xl overflow-hidden border border-ink/10`}>
                  {p.featured && p.live && p.live !== '#' ? (
                    <iframe
                      src={p.live}
                      title={p.title}
                      className="absolute inset-0 pointer-events-none"
                      loading="lazy"
                      style={{ transform: 'scale(0.85)', transformOrigin: 'top left', width: '117.6%', height: '117.6%' }}
                    />
                  ) : (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background =
                          'linear-gradient(135deg, #e8e0cf 0%, #d4c8a8 100%)'
                        e.target.parentElement.innerHTML +=
                          `<div class="absolute inset-0 flex items-center justify-center font-display text-4xl text-ink/30">${p.title}</div>`
                      }}
                    />
                  )}
                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-bone text-ink rounded-full font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-accent hover:text-bone transition-colors"
                    >
                      Live <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl">{p.title}</h3>
                      <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                        {p.year}
                      </span>
                    </div>
                    <p className="text-sm text-ink/70 leading-relaxed">{p.blurb}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono uppercase tracking-wider text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
