import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Achievements, Education, Certifications } from './components/Content'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Contact, Footer } from './components/Contact'

export default function App() {
  // Fade sections in once as they enter the viewport (disabled via CSS for reduced motion).
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Education />        
        <Contact />
      </main>
      <Footer />
    </>
  )
}
