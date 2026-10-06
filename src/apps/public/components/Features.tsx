import './Features.scss'

const features = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Topic Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  href: '#',
}))

export const Features = () => {
  return (
    <section id="features" className="features">
      <div className="landing-container">
        <h2 className="landing-heading">Notable Features</h2>
        <div className="features__grid">
          {features.map((feature) => (
            <article
              key={feature.id}
              className={`feature-card ${feature.id % 2 === 0 ? 'feature-card--filled' : ''}`}
            >
              <div className="feature-card__icon" />
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__text">{feature.description}</p>
              <a href={feature.href} className="feature-card__cta">
                Inline CTA &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
