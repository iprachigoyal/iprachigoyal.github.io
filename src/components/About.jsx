import { personal, dualRole, randomFacts } from '../data/content'
import { FadeUp, SectionHeader, Stagger, StaggerItem } from './Motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="01 / About"
          title="Part frontend. Part backend. All builder."
          description={`I'm ${personal.name}, a full-stack developer based in ${personal.location}. I've spent the last few years shipping products end-to-end — design, code, deploy, support — and I genuinely enjoy every layer of the stack.`}
        />

        {/* Split-personality block — Adham's signature move */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 rounded-2xl overflow-hidden border border-ink/10 mb-20">
          <FadeUp className="bg-bone p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              {dualRole.left.label}
            </div>
            <h3 className="font-display text-4xl md:text-5xl mb-4">
              {dualRole.left.title}
            </h3>
            <p className="text-ink/70 mb-8 leading-relaxed">
              {dualRole.left.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {dualRole.left.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-ink/5 hover:bg-ink hover:text-bone transition-colors rounded-full text-sm border border-ink/10 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="bg-ink text-bone p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              {dualRole.right.label}
            </div>
            <h3 className="font-display text-4xl md:text-5xl mb-4">
              {dualRole.right.title}
            </h3>
            <p className="text-bone/70 mb-8 leading-relaxed">
              {dualRole.right.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {dualRole.right.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-bone/10 hover:bg-bone hover:text-ink transition-colors rounded-full text-sm border border-bone/20 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Random facts */}
        <div>
          <FadeUp>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">
              Random facts about me
            </h3>
          </FadeUp>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 rounded-2xl overflow-hidden border border-ink/10">
            {randomFacts.map((fact, i) => (
              <StaggerItem
                key={i}
                className="bg-bone p-5 hover:bg-ink hover:text-bone transition-colors cursor-default flex items-start gap-3"
              >
                <span className="text-accent font-mono text-sm shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed">{fact}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
