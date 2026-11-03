import { GraduationCap } from 'lucide-react'
import { skills, education } from '../data'
import { Reveal } from './Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap skills__layout">
        <div>
          <Reveal className="section-head">
            <span className="eyebrow">Toolkit</span>
            <h2>What I reach for.</h2>
          </Reveal>
          <div className="skills">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <div className="skills__group">
                  <h3>{g.group}</h3>
                  <ul>
                    {g.items.map((it) => <li key={it} className="chip">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <aside className="edu">
            <span className="eyebrow"><GraduationCap size={14} /> Education</span>
            <ul>
              {education.map((e) => (
                <li key={e.school}>
                  <strong>{e.school}</strong>
                  <span>{e.degree}</span>
                  <span className="edu__meta">{e.period} · {e.note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
