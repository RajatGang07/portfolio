import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experience } from '../data'
import { Reveal } from './Reveal'
import './Experience.css'

export function Experience() {
  const [open, setOpen] = useState<number>(0)
  const reduce = useReducedMotion()

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Nine years, six companies, one habit: own it end to end.</h2>
          <p>From an internal support console at Groww to leading insurance verticals at Paytm.</p>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => {
            const isOpen = open === i
            return (
              <Reveal key={job.company} delay={Math.min(i, 3) * 0.05}>
                <li className={`job ${isOpen ? 'job--open' : ''} ${job.current ? 'job--current' : ''}`}>
                  <span className="job__node" aria-hidden="true" />
                  <button
                    className="job__head"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`job-${i}`}
                  >
                    <div className="job__title">
                      <h3>{job.company}</h3>
                      <span className="job__role">{job.role}</span>
                    </div>
                    <div className="job__meta">
                      <span className="job__period">{job.period}</span>
                      <span className="job__loc">{job.location}</span>
                      <ChevronDown className="job__chev" size={18} />
                    </div>
                  </button>
                  <p className="job__summary">{job.summary}</p>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`job-${i}`}
                        key="body"
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <ul className="job__points">
                          {job.highlights.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
