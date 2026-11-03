import { pillars } from '../data'
import { Reveal } from './Reveal'
import { spotlight } from './useSpotlight'
import './Pillars.css'

export function Pillars() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What I do</span>
          <h2>Backend, frontend, and the pipeline in between.</h2>
          <p>
            Most of my work sits where a product journey meets the systems underneath it. I own the
            data model, the services, the UI, and increasingly the automation that ships all three.
          </p>
        </Reveal>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card pillar" onMouseMove={spotlight}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul className="pillar__tags">
                  {p.tags.map((t) => <li key={t} className="chip">{t}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
