import { useState } from 'react'
import { Mail, Phone, Copy, Check, ArrowUp } from 'lucide-react'
import { links, site } from '../data/portfolio'
import Social from './Social'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
    } catch {
      const t = document.createElement('textarea')
      t.value = links.email; document.body.appendChild(t); t.select()
      try { document.execCommand('copy') } catch { /* ignore */ }
      t.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap reveal">
        <h2 id="contact-title" className="contact-title">Have a project or opportunity in mind?</h2>
        <p className="contact-sub">I’m open to software development roles and interesting projects. Send me a note and I’ll get back to you.</p>
        <a className="email-big" href={`mailto:${links.email}`}>{links.email}</a>
        <div className="cta">
          <a className="btn btn-primary" href={`mailto:${links.email}`}><Mail size={18} aria-hidden="true" /> Send an email</a>
          <button className="btn btn-ghost" onClick={copy}>
            {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            {copied ? 'Email copied' : 'Copy email'}
          </button>
          <a className="btn btn-link" href={links.phoneHref}><Phone size={18} aria-hidden="true" /> {links.phone}</a>
        </div>
        <p className="sr-only" role="status" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</p>
        <Social withLabels />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          <strong>{site.name}</strong>
          <p className="muted">{site.title}, {site.location.split(',')[0]}</p>
        </div>
        <Social />
        <p className="muted">© {new Date().getFullYear()} {site.name}</p>
        <a className="top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  )
}
