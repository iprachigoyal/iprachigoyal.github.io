import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

export default function App() {
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
        <Contact />
      </main>
    </div>
  )
}
