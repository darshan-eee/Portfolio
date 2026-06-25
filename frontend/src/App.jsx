import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

const SKILLS = [
  {
    category: 'Systems & Logic',
    icon: '⚙️',
    accent: '#0EA5E9',
    items: [
      'Embedded Systems / IoT',
      'Hardware Signal Analysis',
      'Microcontroller Firmware',
      'Automation Design',
      'PCB Design',
      'PLC & Automation',
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    accent: '#E11D48',
    items: ['React', 'HTML', 'CSS', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '🔧',
    accent: '#10B981',
    items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  },
  {
    category: 'Database & DevOps',
    icon: '🗄️',
    accent: '#F59E0B',
    items: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'CI/CD'],
  },
]

const PROJECTS = [
  {
    title: 'Attendance System',
    desc: 'A robust web-based management platform utilizing automated student logging features, administrative controls, and comprehensive roll tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    accent: '#E11D48',
    link: 'https://attendance-system-1-kec-frontend.onrender.com',
  },
  {
    title: 'DevCollab',
    desc: 'Real-time collaborative code editor with live preview, chat, and GitHub integration.',
    tags: ['React', 'Node.js', 'Socket.io'],
    accent: '#0EA5E9',
    link: '#',
  },
  {
    title: 'MetricsPulse',
    desc: 'Analytics dashboard aggregating data from 10+ sources into a single, actionable view.',
    tags: ['Python', 'FastAPI', 'Redis', 'D3.js'],
    accent: '#10B981',
    link: '#',
  },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const heroRef = useRef(null)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif", background: '#0A0C10', color: '#E2E8F0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0C10; }
        ::-webkit-scrollbar-thumb { background: #E11D48; border-radius: 2px; }

        .nav-link {
          background: none; border: none; color: #94A3B8; font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: 13px; font-weight: 500; cursor: pointer; padding: 6px 0;
          transition: color 0.2s; letter-spacing: 0.06em; text-transform: uppercase;
        }
        .nav-link:hover { color: #CBD5E1; }
        .nav-link.active { color: #E2E8F0; border-bottom: 1px solid #E11D48; }

        .skill-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 14px; color: #94A3B8; font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
          transition: color 0.15s;
        }
        .skill-item:last-child { border-bottom: none; }
        .skill-item:hover { color: #E2E8F0; }

        .skill-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        .project-card {
          background: #0F1117; border-radius: 10px; padding: 28px 28px 24px;
          border: 1px solid #1E2535;
          transition: border-color 0.2s, transform 0.2s;
          position: relative; overflow: hidden;
        }
        .project-card:hover { border-color: #6B7A90; transform: translateY(-2px); }
        .project-card::after {
          content: ''; position: absolute; top: 0; left: 0; width: 3px; bottom: 0;
          background: var(--accent); border-radius: 10px 0 0 10px;
        }

        .tag {
          display: inline-block; font-size: 11px; font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
          font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 4px;
          background: rgba(255,255,255,0.04); color: #94A3B8;
          border: 1px solid #1E2535;
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px; border-radius: 6px; font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
          text-decoration: none; border: none; letter-spacing: 0.02em;
        }
        .cta-primary { background: #E11D48; color: #fff; }
        .cta-primary:hover { background: #BE123C; }
        .cta-outline { background: transparent; color: #94A3B8; border: 1px solid #1E2535; }
        .cta-outline:hover { border-color: #6B7A90; color: #E2E8F0; }

        .section-eyebrow {
          font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase; color: #E11D48; margin-bottom: 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .section-eyebrow::before {
          content: ''; display: block; width: 24px; height: 1px; background: #E11D48;
        }

        .section-title {
          font-family: 'DM Serif Display', Georgia, 'Times New Roman', serif; font-size: clamp(28px, 4vw, 44px);
          font-weight: 400; line-height: 1.15; color: #F1F5F9;
        }

        .contact-field {
          width: 100%; background: #0F1117; border: 1px solid #1E2535;
          border-radius: 6px; padding: 13px 16px; color: #E2E8F0; font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: 14px; outline: none; transition: border-color 0.2s;
        }
        .contact-field:focus { border-color: #E11D48; }
        .contact-field::placeholder { color: #6B7A90; }

        .skill-card {
          background: #0F1117; border-radius: 10px; padding: 24px 24px 20px;
          border: 1px solid #1E2535;
        }

        .skill-card-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 18px;
          padding-bottom: 14px; border-bottom: 1px solid #1A2030;
        }

        .divider {
          height: 1px; background: linear-gradient(90deg, transparent, #1E2535 30%, #1E2535 70%, transparent);
          margin: 0 40px;
        }

        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .hero-btns { flex-direction: column !important; }
          .stats-row { gap: 24px !important; }
          .contact-name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 48px',
        background: 'rgba(10,12,16,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #0F1117',
      }}>
        <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, color: '#F1F5F9', letterSpacing: '0.01em' }}>
          Darshan G<span style={{ color: '#E11D48' }}>.</span>
        </span>

        <div style={{ display: 'flex', gap: 36 }}>
          {NAV_LINKS.map((l) => (
            <button key={l} className={`nav-link ${activeSection === l.toLowerCase() ? 'active' : ''}`}
              onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>

        <button onClick={() => scrollTo('contact')} className="cta-btn cta-primary"
          style={{ padding: '9px 20px', fontSize: 13 }}>
          Hire me
        </button>
      </nav>

      {/* HERO */}
      <section id="about" ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '140px 48px 80px',
        maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: -1,
          backgroundImage: 'linear-gradient(rgba(225,29,72,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,72,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        <div style={{ marginBottom: 28 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 14px', borderRadius: 4,
            border: '1px solid #1E2535', color: '#94A3B8',
            fontSize: 12, fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
            fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            Available for new projects
          </span>
        </div>

        <h1 style={{
          fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400,
          fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: 1.05, marginBottom: 24,
          color: '#F1F5F9',
        }}>
          Full Stack Developer<br />
          <span style={{ color: '#8B96A8' }}>&amp; Embedded Systems</span><br />
          <span style={{ color: '#8B96A8' }}>Engineer.</span>
        </h1>

        <p style={{
          fontSize: 16, lineHeight: 1.85, color: '#94A3B8',
          maxWidth: 500, marginBottom: 40, fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
        }}>
          I design and build systems across the full stack — from PCB firmware and
          PLC automation to scalable web applications and cloud infrastructure.
        </p>

        <div className="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="cta-btn cta-primary" onClick={() => scrollTo('projects')}>
            View projects
          </button>
          <a href="/resume.pdf" className="cta-btn cta-outline" style={{ textDecoration: 'none' }}>
            Download resume ↓
          </a>
        </div>

        <div className="stats-row" style={{
          display: 'flex', gap: 48, marginTop: 72,
          paddingTop: 40, borderTop: '1px solid #0F1117',
        }}>
          {[['3+', 'Years of experience'], ['20+', 'Projects delivered'], ['10+', 'Technologies']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: '#F1F5F9' }}>{num}</div>
              <div style={{ fontSize: 12, color: '#8B96A8', marginTop: 6, fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif", letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" style={{ padding: '96px 48px', maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="section-eyebrow">Expertise</p>
        <h2 className="section-title" style={{ marginBottom: 52 }}>Skills &amp; Stack</h2>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {SKILLS.map((group) => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-header">
                <div style={{
                  width: 32, height: 32, borderRadius: 6, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', background: `${group.accent}15`, fontSize: 16,
                }}>
                  {group.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif", fontWeight: 600, fontSize: 14, color: '#CBD5E1' }}>
                    {group.category}
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>
                    {group.items.length} skills
                  </div>
                </div>
              </div>

              <div>
                {group.items.map((item) => (
                  <div key={item} className="skill-item">
                    <div className="skill-dot" style={{ background: group.accent }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" style={{ padding: '96px 48px', maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title" style={{ marginBottom: 52 }}>Selected Projects</h2>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {PROJECTS.map((p) => (
            <div key={p.title} className="project-card" style={{ '--accent': p.accent }}>
              <h3 style={{
                fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400, fontSize: 20,
                color: '#F1F5F9', marginBottom: 10,
              }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.75, marginBottom: 18 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: p.accent, fontSize: 12, fontWeight: 600, textDecoration: 'none',
                fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                View project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" style={{ padding: '96px 48px 80px', maxWidth: 640, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-title" style={{ marginBottom: 14 }}>Let's work together</h2>
        <p style={{ color: '#8B96A8', fontSize: 15, lineHeight: 1.8, marginBottom: 44, fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif" }}>
          Whether it's a web application, an embedded system, or anything in between —
          I'm open to new challenges and collaborations.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="contact-name-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <input className="contact-field" type="text" placeholder="Full name" />
            <input className="contact-field" type="email" placeholder="Email address" />
          </div>
          <input className="contact-field" type="text" placeholder="Subject" />
          <textarea className="contact-field" placeholder="Describe your project or enquiry..." rows={5} style={{ resize: 'vertical' }} />
          <div>
            <button className="cta-btn cta-primary">Send message →</button>
          </div>
        </div>

        <div style={{
          display: 'flex', gap: 28, marginTop: 52, paddingTop: 36,
          borderTop: '1px solid #0F1117',
        }}>
          {[
            ['GitHub', 'https://github.com'],
            ['LinkedIn', 'https://linkedin.com'],
            ['darshan.gopinath2006@gmail.com', 'mailto:darshan.gopinath2006@gmail.com']
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              color: '#8B96A8', fontSize: 13, textDecoration: 'none', fontWeight: 600,
              fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif", letterSpacing: '0.05em',
              textTransform: 'uppercase', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#E11D48'}
              onMouseLeave={e => e.target.style.color = '#8B96A8'}>
              {label} ↗
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: 'center', padding: '20px 48px',
        borderTop: '1px solid #0F1117',
        color: '#6B7A90', fontSize: 12, fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
        letterSpacing: '0.06em',
      }}>
        © {new Date().getFullYear()} Darshan G · <a href="mailto:darshan.gopinath2006@gmail.com" style={{ color: '#E11D48', textDecoration: 'none' }}>darshan.gopinath2006@gmail.com</a>
      </footer>
    </div>
  )
}