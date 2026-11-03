import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { Reveal } from './Reveal'
import { spotlight } from './useSpotlight'
import './Projects.css'

export function Projects() {
  const [featured, ...rest] = projects
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Things I've built that I'd point to first.</h2>
        </Reveal>

        <div className="projects">
          <Reveal>
            <article className="card project project--featured" onMouseMove={spotlight}>
              <div className="project__body">
                <span className="project__kicker">{featured.kicker}</span>
                <h3>{featured.name}</h3>
                <p>{featured.description}</p>
                <ul className="project__points">
                  {featured.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <ul className="project__stack">
                  {featured.stack.map((s) => <li key={s} className="chip">{s}</li>)}
                </ul>
                <div className="project__links">
                  {featured.links.map((l, i) => (
                    <a key={l.href} className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </div>
              <div className="project__visual" aria-hidden="true">
                <Ticker />
              </div>
            </article>
          </Reveal>

          <div className="projects__grid">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="card project" onMouseMove={spotlight}>
                  <div className="project__body">
                    <span className="project__kicker">{p.kicker}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    {p.points.length > 0 && (
                      <ul className="project__points">
                        {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                      </ul>
                    )}
                    <ul className="project__stack">
                      {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* A small simulated order-book / P&L panel standing in for a screenshot. */
const rows = [
  { sym: 'RELIANCE', side: 'BUY', qty: 40, px: '2,948.10', pnl: '+1,284' },
  { sym: 'HDFCBANK', side: 'BUY', qty: 60, px: '1,702.45', pnl: '+612' },
  { sym: 'TATAMOTORS', side: 'SELL', qty: 90, px: '1,021.30', pnl: '-318' },
  { sym: 'INFY', side: 'BUY', qty: 35, px: '1,788.00', pnl: '+940' },
  { sym: 'BAJFINANCE', side: 'OCO', qty: 12, px: '7,215.60', pnl: '+2,105' },
]
function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__head">
        <span>Positions · NSE cash</span>
        <span className="ticker__pnl">+₹4,623 today</span>
      </div>
      <div className="ticker__chart">
        <svg viewBox="0 0 300 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--teal)" stopOpacity="0.35" />
              <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,62 L25,58 L50,60 L75,48 L100,52 L125,40 L150,44 L175,30 L200,34 L225,22 L250,26 L275,14 L300,18 L300,80 L0,80 Z" fill="url(#g)" />
          <path d="M0,62 L25,58 L50,60 L75,48 L100,52 L125,40 L150,44 L175,30 L200,34 L225,22 L250,26 L275,14 L300,18" fill="none" stroke="var(--teal)" strokeWidth="1.6" />
        </svg>
      </div>
      <table className="ticker__table">
        <tbody>
          {rows.map((r) => (
            <tr key={r.sym}>
              <td className="ticker__sym">{r.sym}</td>
              <td className={`ticker__side ticker__side--${r.side.toLowerCase()}`}>{r.side}</td>
              <td>{r.qty}</td>
              <td>{r.px}</td>
              <td className={r.pnl.startsWith('-') ? 'neg' : 'pos'}>{r.pnl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
