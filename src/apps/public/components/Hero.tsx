import { Link } from 'react-router-dom'
import './Hero.scss'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="landing-container hero__content">
        <h1 className="hero__title">
          Welcome to
          <br />
          the <span className="hero__accent">Jukebox</span> Project
        </h1>
        <p className="hero__text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Link to="/auth/register" className="hero__cta">
          Get Started
          <span className="hero__cta-icon">&rarr;</span>
        </Link>
      </div>
      <svg
        className="hero__waves"
        viewBox="0 0 473 444"
        preserveAspectRatio="xMaxYMax meet"
        aria-hidden="true"
      >
        <path
          fill="#ae9190"
          d="M0 444 L57 330 Q80 285 135 284 L230 283 Q285 283 310 225 L395 35 Q412 2 445 2 L473 6 L473 444 Z"
        />
        <path
          fill="#855a59"
          d="M65 444 L95 385 Q115 342 170 341 L290 341 Q340 340 360 290 L440 105 Q455 72 473 62 L473 444 Z"
        />
        <path
          fill="#723f3f"
          d="M142 444 Q165 405 210 405 L330 405 Q370 405 385 365 L473 170 L473 444 Z"
        />
      </svg>
    </section>
  )
}
