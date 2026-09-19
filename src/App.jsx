import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Services from './components/Services'
import ProjectBrief from './components/ProjectBrief'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

// Landing on /#start goes nowhere on its own: the browser resolves the hash
// while parsing index.html, before React has rendered the target section.
// Re-run the jump once the DOM exists, then again after images settle, since
// the banner loading late would otherwise shift the target out from under us.
function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash || hash === '#top') return

    let el
    try {
      el = document.querySelector(hash)
    } catch {
      return // malformed hash, nothing to do
    }
    if (!el) return

    const jump = () => el.scrollIntoView({ behavior: 'auto', block: 'start' })

    // After paint, so layout is measured.
    const raf = requestAnimationFrame(jump)
    window.addEventListener('load', jump, { once: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('load', jump)
    }
  }, [])
}

export default function App() {
  useHashScroll()

  return (
    <div className="grain min-h-screen relative">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Services />
        <ProjectBrief />
        <Contact />
      </main>
    </div>
  )
}
