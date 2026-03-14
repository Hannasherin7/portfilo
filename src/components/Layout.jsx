import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { profile } from '../portfolioData'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

function Layout() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroDone(true)
    }, 2400)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`site-shell${introDone ? ' intro-done' : ''}`}>
      <div className={`site-intro${introDone ? ' is-leaving' : ''}`} aria-hidden="true">
        <div className="site-intro-core">
          <div className="intro-circle">
            <svg viewBox="0 0 220 220" className="intro-circle-svg">
              <circle cx="110" cy="110" r="84" pathLength="100" className="intro-ring-base" />
              <circle cx="110" cy="110" r="68" pathLength="100" className="intro-ring-inner" />
              <path d="M64 110H92L108 82L126 138L144 110H156" className="intro-signal-line" />
              <circle cx="64" cy="110" r="5" className="intro-node" />
              <circle cx="108" cy="82" r="5" className="intro-node" />
              <circle cx="126" cy="138" r="5" className="intro-node" />
              <circle cx="156" cy="110" r="5" className="intro-node" />
            </svg>
            <div className="intro-circle-bloom" />
            <div className="intro-circle-grid" />
          </div>
          <p className="intro-kicker">Launching portfolio</p>
          <h2>{profile.shortName}</h2>
          <p className="intro-text">Design, motion, and code coming into focus.</p>
        </div>
      </div>

      <div className="floating-orb orb-one" aria-hidden="true" />
      <div className="floating-orb orb-two" aria-hidden="true" />
      <div className="floating-orb orb-three" aria-hidden="true" />
      <div className="floating-orb orb-four" aria-hidden="true" />
      <div className="floating-grid" aria-hidden="true" />
      <div className="floating-grid secondary-grid" aria-hidden="true" />
      <div className="floating-line line-one" aria-hidden="true" />
      <div className="floating-line line-two" aria-hidden="true" />
      <div className="floating-dots" aria-hidden="true" />

      <header className="topbar">
        <NavLink className="brand" to="/">
          {profile.name}
        </NavLink>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to={item.href}
              end={item.href === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <p>Built with React and Vite.</p>
      </footer>
    </div>
  )
}

export default Layout
