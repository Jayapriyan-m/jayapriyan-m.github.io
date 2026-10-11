import { useState } from 'react'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { site, asset } from '../data/portfolio'
import Social from './Social'

function Portrait() {
  const [ok, setOk] = useState(true)
  return (
    <figure className="portrait">
      <div className="portrait-frame">
        {ok ? (
          <img src={asset(site.photo)} alt={site.photoAlt} width="1100" height="1467" fetchpriority="high" onError={() => setOk(false)} />
        ) : (
          <div className="portrait-fallback" role="img" aria-label="Profile photo placeholder">JP</div>
        )}
      </div>
      <figcaption><MapPin size={14} aria-hidden="true" /> {site.location.split(',')[0]}, India</figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="hello">Hi, I’m {site.alias}.</p>
          <h1>{site.name}</h1>
          <p className="role">{site.title}</p>
          <p className="stackline">{site.stack.join(' · ')}</p>
          <p className="intro">{site.intro}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">View My Work</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
            <a className="btn btn-link" href={asset(site.resume)} download="Jayapriyan_M_Resume.pdf"><Download size={18} aria-hidden="true" /> Download Resume</a>
          </div>
          <Social />
        </div>
        <Portrait />
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About section"><ArrowDown size={18} /></a>
    </section>
  )
}
