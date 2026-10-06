import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Repos.scss'

const repos = [
  {
    id: 1,
    title: 'Some Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    id: 2,
    title: 'Another Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Example Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const Repos = () => {
  const [openId, setOpenId] = useState<number | null>(repos[0].id)

  const toggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="repos" className="repos">
      <div className="landing-container">
        <div className="repos__header">
          <h2 className="landing-heading landing-heading--light">
            Repositories
          </h2>
          <Link to="/auth/register" className="landing-btn landing-btn--light">
            Sign Up
          </Link>
        </div>
        <ul className="repos__list">
          {repos.map((repo) => {
            const isOpen = openId === repo.id
            return (
              <li
                key={repo.id}
                className={`repo-item ${isOpen ? 'repo-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="repo-item__trigger"
                  onClick={() => toggle(repo.id)}
                  aria-expanded={isOpen}
                >
                  <span className="repo-item__number">
                    {String(repo.id).padStart(2, '0')}
                  </span>
                  <span className="repo-item__title">{repo.title}</span>
                  <span className="repo-item__icon" />
                </button>
                {isOpen && (
                  <div className="repo-item__body">
                    <p className="repo-item__text">{repo.description}</p>
                    <div className="repo-item__image" />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
