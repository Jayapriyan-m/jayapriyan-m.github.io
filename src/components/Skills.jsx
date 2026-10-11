import { Code2, Layout, Server, Plug, Sparkles, Database, Cpu, Wrench } from 'lucide-react'
import Section from './SectionHeading'
import { skills, coreStack } from '../data/portfolio'

const ICONS = { code: Code2, layout: Layout, server: Server, plug: Plug, sparkles: Sparkles, db: Database, cpu: Cpu, tool: Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="What I use day to day, and what I’ve worked with along the way.">
      <h3 className="sub-title first">Core stack</h3>
      <ul className="core">{coreStack.map((s) => <li key={s}>{s}</li>)}</ul>
      <div className="skill-grid">
        {skills.map((c) => {
          const Icon = ICONS[c.icon]
          return (
            <section key={c.name} className="skill-card" aria-label={c.name}>
              <h3><Icon size={18} aria-hidden="true" />{c.name}</h3>
              <ul className="chips">
                {c.items.map((i) => <li key={i} className={'chip' + (coreStack.includes(i) ? ' hot' : '')}>{i}</li>)}
              </ul>
            </section>
          )
        })}
      </div>
    </Section>
  )
}
