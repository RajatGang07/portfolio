import { useEffect, useState } from 'react'
import { FileDown, Menu, X } from 'lucide-react'
import { Github, Linkedin } from './Brand'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '../data'
import './Nav.css'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__brand" aria-label="Back to top">
          <span className="nav__mark">RG</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a className="nav__icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a className="nav__icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="btn btn-primary nav__resume" href={profile.resume} target="_blank" rel="noreferrer">
            <FileDown /> Resume
          </a>
          <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__sheet">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume (PDF)</a>
        </div>
      )}
    </header>
  )
}
