import {
  certifications,
  education,
  experience,
  extras,
  highlights,
  profile,
  projects,
  skills,
} from './portfolioData'

const skillGroups = Object.entries(skills)

function App() {
  return (
    <div className="site-shell">
      <div className="floating-orb orb-one" aria-hidden="true" />
      <div className="floating-orb orb-two" aria-hidden="true" />
      <div className="floating-grid" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-badges" aria-hidden="true">
              <span>React</span>
              <span>Laravel</span>
              <span>APIs</span>
            </div>
            <p className="eyebrow">MCA 2025 • PHP Laravel Developer • React Builder</p>
            <h1>{profile.title}</h1>
            <p className="lede">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                See selected work
              </a>
              <a className="button secondary" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="portrait-scene" aria-hidden="true">
              <div className="portrait-ring ring-one" />
              <div className="portrait-ring ring-two" />
              <div className="portrait-card">
                <div className="portrait-illustration">
                  <div className="hair-back" />
                  <div className="neck" />
                  <div className="shoulders" />
                  <div className="face">
                    <span className="eye left" />
                    <span className="eye right" />
                    <span className="mouth" />
                  </div>
                  <div className="hair-front" />
                  <div className="blazer" />
                  <div className="inner-top" />
                </div>
              </div>
            </div>

            <div className="hero-card-copy">
              <p className="card-label">Now</p>
              <h2>{profile.name}</h2>
              <p>{profile.summary}</p>
              <ul className="meta-list">
                <li>{profile.location}</li>
                <li>{profile.phone}</li>
                <li>{profile.email}</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="highlight-strip" aria-label="Highlights">
          {highlights.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <section className="section split" id="work">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Shipping features with backend depth.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <p className="timeline-period">{item.period}</p>
                <h3>
                  {item.role}
                  <span>{item.company}</span>
                </h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Applications built around real workflows.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-stack">{project.stack}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section info-grid" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Technical range with a practical bias.</h2>
            <p>
              I like work that sits between interface clarity and system reliability. That usually
              means thoughtful React on the front end, disciplined APIs in the middle, and data
              models that stay readable as complexity grows.
            </p>
          </div>

          <div className="stacked-panels">
            <article className="panel">
              <h3>Core skills</h3>
              <div className="skill-groups">
                {skillGroups.map(([group, items]) => (
                  <div key={group}>
                    <p className="group-title">{group}</p>
                    <ul>
                      {items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel">
              <h3>Education</h3>
              <div className="education-list">
                {education.map((item) => (
                  <div key={item.degree}>
                    <p className="group-title">{item.degree}</p>
                    <p>{item.school}</p>
                    <p>
                      {item.period} • {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section notes-grid">
          <article className="panel">
            <h3>Certifications</h3>
            <ul className="tag-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <h3>Working style</h3>
            <ul className="tag-list">
              {extras.traits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <h3>Outside work</h3>
            <ul className="tag-list">
              {extras.volunteering.concat(extras.interests).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to thoughtful product and web work.</h2>
          </div>
          <div className="contact-links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
