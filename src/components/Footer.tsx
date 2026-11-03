import { profile } from '../data'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__built">Built with React, Vite, and Framer Motion</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
