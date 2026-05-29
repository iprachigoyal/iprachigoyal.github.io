import { motion } from 'framer-motion'

// Fade up reveal — the workhorse animation for sections
export function FadeUp({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger container — pair with FadeUpItem children
export function Stagger({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 24 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Section header label (eyebrow + h2 pattern)
export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-16 max-w-2xl">
      <FadeUp>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-ink/40" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="font-display text-5xl md:text-6xl tracking-tight text-balance">
          {title}
        </h2>
      </FadeUp>
      {description && (
        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  )
}
