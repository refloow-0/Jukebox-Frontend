import { Link } from 'react-router-dom'
import './Header.scss'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Docs', href: 'https://github.com/ufosc/Jukebox-Frontend' },
  { label: 'Contribute', href: '#repos' },
]

export const Header = () => {
  return (
    <header className="landing-header">
      <div className="landing-container landing-header__inner">
        <Link to="/public" className="landing-header__logo">
          Logo
        </Link>
        <nav className="landing-header__nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="landing-header__link"
            >
              {link.label}
            </a>
          ))}
          <Link to="/auth/login" className="landing-header__link">
            Login
          </Link>
          <Link to="/auth/register" className="landing-btn landing-btn--light">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  )
}
