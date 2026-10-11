import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/portfolio'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Active section = the one crossing the middle band of the viewport.
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el) })
    const onScroll = () => {
      const h = document.documentElement
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])

  const link = (n) => (
    <li key={n.id}>
      <a href={`#${n.id}`} className={active === n.id ? 'on' : ''} aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>
        {n.label}
      </a>
    </li>
  )

  return (
    <header className="nav-wrap">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#home" aria-label="Jayapriyan M, back to top">JP<span>.</span></a>
        <ul className="nav-links">{nav.map(link)}</ul>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <ul id="mobile-menu" className={'mobile' + (open ? ' open' : '')}>{nav.map(link)}</ul>
    </header>
  )
}
