import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { personal, socials } from '../data/content'
import { FadeUp } from './Motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 bg-ink text-bone overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50 mb-6">
            06 / Contact — Currently Available
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight mb-12">
            Got an idea?{' '}
            <span className="italic text-accent">Let&apos;s</span>
            <br />
            build it.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <FadeUp delay={0.2} className="md:col-span-7">
            <p className="text-lg text-bone/70 leading-relaxed max-w-md">
              Best way to reach me is through email. I read every one and reply within
              24 hours. Cold outreach welcome.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="md:col-span-5 md:flex md:justify-end">
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.03 }}
              className="group inline-flex items-center justify-between gap-6 bg-bone text-ink px-8 py-6 rounded-full hover:bg-accent hover:text-bone transition-colors w-full md:w-auto"
            >
              <span className="font-display text-2xl">{personal.email}</span>
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
            </motion.a>
          </FadeUp>
        </div>

        <div className="mt-24 pt-8 border-t border-bone/10 flex flex-wrap items-center justify-between gap-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
            © 2026 {personal.name} — Built with care
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] underline-grow"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
