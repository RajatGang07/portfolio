import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { profile, stats, marquee } from '../data'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const up = (i: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease } }

  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.p className="hero__status" {...up(0)}>
            <span className="hero__dot" /> {profile.role} at Paytm Insurance
            <span className="hero__loc"><MapPin size={13} /> {profile.location}</span>
          </motion.p>

          <motion.h1 {...up(1)}>
            I build the systems<br />
            <span className="hero__accent">that take a feature</span><br />
            from spec to production.
          </motion.h1>

          <motion.p className="hero__lede" {...up(2)}>
            Nine years across fintech, insurtech, and consumer platforms. I lead a team of 10 at Paytm Insurance,
            owning architecture and delivery for term, health, and motor insurance, and the agentic pipeline that
            now ships much of it.
          </motion.p>

          <motion.div className="hero__cta" {...up(3)}>
            <a className="btn btn-primary" href="#experience">See the work <ArrowDown /></a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          </motion.div>

          <motion.ul className="hero__stats" {...up(4)}>
            {stats.map((s) => (
              <li key={s.label}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero__panel"
          initial={reduce ? false : { opacity: 0, x: 40, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <Pipeline />
        </motion.div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}<i /></span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* The hero's thesis in one picture: the PRD-to-PR pipeline, stage by stage. */
const stages = [
  { k: 'spec', label: 'Spec review', detail: 'PRD checked against knowledge base. Gaps block.' },
  { k: 'impl', label: 'Implement', detail: 'Agent skills write the change.' },
  { k: 'review', label: 'PR review', detail: 'Automated review and fixes.' },
  { k: 'merge', label: 'Merge', detail: 'Green checks, no hand-off.' },
  { k: 'deploy', label: 'Deploy', detail: 'Ships to production.' },
  { k: 'heal', label: 'Self-heal', detail: 'Failures detected and repaired.' },
]

function Pipeline() {
  return (
    <div className="pipe">
      <div className="pipe__bar">
        <span className="pipe__dots"><i /><i /><i /></span>
        <span className="pipe__title">prd-to-pr · term-insurance/quote-v2</span>
      </div>
      <ol className="pipe__list">
        {stages.map((s, i) => (
          <li key={s.k} className="pipe__stage" style={{ animationDelay: `${i * 0.55}s` }}>
            <span className="pipe__node" />
            <div className="pipe__text">
              <span className="pipe__label">{s.label}</span>
              <span className="pipe__detail">{s.detail}</span>
            </div>
            <span className="pipe__state">ok</span>
          </li>
        ))}
      </ol>
      <div className="pipe__foot">
        <span>6 stages · 0 manual hand-offs</span>
        <span className="pipe__live"><i /> live</span>
      </div>
    </div>
  )
}
