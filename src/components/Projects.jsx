import { useState } from 'react'
import { ArrowUpRight, Trophy } from 'lucide-react'
import Section from './SectionHeading'
import { GH } from './Social'
import { projects, projectFilters, asset } from '../data/portfolio'

// Abstract CSS/SVG illustrations. These are NOT screenshots of the real apps.
function Art({ kind }) {
  if (kind === 'ml')
    return (
      <svg viewBox="0 0 320 200" className="art" aria-hidden="true">
        <path d="M160 36 90 92M160 36 230 92M90 92 55 156M90 92 125 156M230 92 195 156M230 92 265 156" stroke="currentColor" strokeWidth="1.5" opacity=".5" fill="none" />
        {[[160, 36], [90, 92], [230, 92]].map(([x, y]) => <circle key={x + y} cx={x} cy={y} r="11" fill="currentColor" />)}
        {[[55, 156], [125, 156], [195, 156], [265, 156]].map(([x, y]) => <rect key={x} x={x - 12} y={y - 12} width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" />)}
      </svg>
    )
  if (kind === 'music')
    return (
      <div className="art bars" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => <i key={i} style={{ height: `${25 + Math.abs(Math.sin(i * 1.3)) * 65}%` }} />)}
      </div>
    )
  if (kind === 'shield')
    return (
      <svg viewBox="0 0 320 200" className="art" aria-hidden="true">
        <path d="M160 24 224 48v54c0 36-26 64-64 80-38-16-64-44-64-80V48Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="m132 100 20 20 38-42" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  return (
    <svg viewBox="0 0 320 200" className="art" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {[0, 1, 2].map((i) => <rect key={i} x={40 + i * 90} y="40" width="76" height="76" />)}
        {[0, 1, 2].map((i) => <path key={i} d={`M${40 + i * 90} 134h76M${40 + i * 90} 152h46`} opacity=".6" />)}
      </g>
      <g fill="currentColor">{[0, 1, 2].map((i) => <circle key={i} cx={78 + i * 90} cy="78" r="13" />)}</g>
    </svg>
  )
}

function Thumb({ p }) {
  const [broken, setBroken] = useState(false)
  return (
    <div className="thumb">
      <Art kind={p.art} />
      {!broken && <img src={asset(p.image)} alt={`${p.title} preview`} loading="lazy" width="640" height="400" onError={() => setBroken(true)} />}
      {p.badge && <span className="badge"><Trophy size={14} aria-hidden="true" /> {p.badge}</span>}
    </div>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="project">
      <Thumb p={p} />
      <div className="project-body">
        <p className="mono muted">{p.year}</p>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <ul className="chips">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        {(p.github || p.live) && (
          <div className="project-links">
            {p.live && <a className="text-link" href={p.live} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {p.github && (
              <a className="text-link" href={p.github} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d={GH} /></svg> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = projects.filter((p) => filter === 'All' || p.categories.includes(filter))
  return (
    <Section id="projects" title="Projects" sub="Four things I’ve built, across web, mobile and machine learning.">
      <div className="filters" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button key={f} className={filter === f ? 'on' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="project-grid">{shown.map((p) => <ProjectCard key={p.id} p={p} />)}</div>
    </Section>
  )
}
