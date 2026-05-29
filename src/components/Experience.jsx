import { ArrowUpRight } from 'lucide-react'
import { experience } from '../data/content'
import { FadeUp, SectionHeader, Stagger, StaggerItem } from './Motion'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-10 bg-sand/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="02 / Experience"
          title="Where I've been building."
          description="A mix of full-time roles, independent client work, and side bets. Each one taught me something the next project benefits from."
        />

        <Stagger className="space-y-px">
          {experience.map((job, i) => (
            <StaggerItem key={i}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t border-ink/10 last:border-b hover:bg-ink hover:text-bone transition-colors duration-500 -mx-6 md:-mx-10 px-6 md:px-10 cursor-default">
                <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.15em] text-muted group-hover:text-bone/60">
                  {job.period}
                </div>
                <div className="md:col-span-4">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-2xl inline-flex items-center gap-1.5 underline-grow group-hover:text-bone"
                    >
                      {job.company}
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </a>
                  ) : (
                    <div className="font-display text-2xl">{job.company}</div>
                  )}
                  <div className="text-sm text-muted group-hover:text-bone/60 mt-1">
                    {job.type}
                  </div>
                </div>
                <div className="md:col-span-6 space-y-3">
                  <div className="font-mono text-sm uppercase tracking-wider">
                    {job.role}
                  </div>
                  <p className="text-sm text-ink/70 group-hover:text-bone/80 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-ink/20 group-hover:border-bone/30 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
