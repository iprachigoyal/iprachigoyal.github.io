import { motion, useScroll, useTransform } from 'framer-motion'
import { personal } from '../data/content'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const pad = useTransform(scrollY, [0, 200], ['1.25rem', '0.75rem'])
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.85])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ paddingTop: pad, paddingBottom: pad }}
      className="fixed top-0 inset-x-0 z-50 px-6 md:px-10"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-bone/80 backdrop-blur-md border-b border-ink/5"
      />
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-ink text-bone font-display text-sm flex items-center justify-center rounded-full">
            {personal.shortName}
          </div>
          <span className="font-mono text-sm hidden sm:inline">{personal.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.15em] underline-grow"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-bone rounded-full font-mono text-xs uppercase tracking-[0.15em] hover:bg-accent transition-colors"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Available
        </a>
      </div>
    </motion.header>
  )
}
