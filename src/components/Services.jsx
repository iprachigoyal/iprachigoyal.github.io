import { motion } from 'framer-motion'
import { services } from '../data/content'
import { SectionHeader, Stagger, StaggerItem } from './Motion'

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 md:px-10 bg-ink text-bone">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="04 / Services"
          title="How I can help."
          description="Available for client projects, contract roles, and the occasional 'can you just look at this?' favor. Half-day discovery calls are free."
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10">
          {services.map((s) => (
            <StaggerItem key={s.title} className="bg-ink p-8 md:p-10 group cursor-default">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-5xl text-accent mb-6"
              >
                {s.icon}
              </motion.div>
              <h3 className="font-display text-3xl mb-3 group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-bone/70 leading-relaxed">{s.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
