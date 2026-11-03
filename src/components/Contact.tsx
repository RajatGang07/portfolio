import { useState } from 'react'
import { Copy, Check, FileDown, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from './Brand'
import { profile } from '../data'
import { Reveal } from './Reveal'
import './Contact.css'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      const r = document.createRange()
      const el = document.getElementById('email-text')
      if (el) { r.selectNodeContents(el); window.getSelection()?.removeAllRanges(); window.getSelection()?.addRange(r) }
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact">
            <span className="eyebrow">Contact</span>
            <h2>Building something that needs a lead who still ships?</h2>
            <p>
              Open to technical lead and staff-level roles in platform, fintech, and insurtech. The fastest way
              to reach me is email.
            </p>
            <div className="contact__email">
              <a id="email-text" href={`mailto:${profile.email}`}>{profile.email}</a>
              <button className="contact__copy" onClick={copy} aria-label="Copy email address">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="contact__links">
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
              <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer"><FileDown /> Download resume</a>
            </div>
            <p className="contact__phone">{profile.phone} · {profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
