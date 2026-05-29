import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '../data/content'
import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto w-full">
        {/* Split-personality headline — Adham concept */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-display font-light text-[clamp(2.5rem,9vw,9rem)] leading-[0.95] tracking-tight"
        >
          <div className="overflow-hidden">
            <motion.div variants={wordVariants}>
              I&apos;m <span className="italic font-normal">Prachi</span> —
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={wordVariants} className="flex items-baseline gap-4 md:gap-6 flex-wrap">
              <span className="text-accent italic font-normal">fullstack</span>
              <span className="text-ink/40 text-3xl md:text-5xl">+</span>
              <span className="font-mono not-italic text-[0.75em]">{ '{ ai }' }</span>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={wordVariants} className="flex items-center gap-4 md:gap-6 flex-wrap">
              developer.
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-block text-2xl text-ink/30"
              >
                ✦
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Banner image as visual centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 md:mt-16 relative rounded-2xl overflow-hidden border border-ink/10"
        >
          <img
            src={personal.banner}
            alt={personal.name}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-7 text-lg md:text-xl text-ink/80 max-w-xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="md:col-span-5 md:flex md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink text-bone px-6 py-4 rounded-full font-mono text-sm uppercase tracking-[0.15em] hover:bg-accent transition-colors"
            >
              See selected work
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
        Scroll
      </motion.div>
    </section>
  )
}
