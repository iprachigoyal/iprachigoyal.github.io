import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on devices with fine pointer (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setIsVisible(true)

    const onMove = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const onOver = (e) => {
      const target = e.target
      const interactive = target.closest('a, button, [data-cursor]')
      setIsHovering(!!interactive)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      animate={{
        x: position.x - (isHovering ? 24 : 8),
        y: position.y - (isHovering ? 24 : 8),
        scale: isHovering ? 1 : 1,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="rounded-full bg-bone"
      />
    </motion.div>
  )
}
