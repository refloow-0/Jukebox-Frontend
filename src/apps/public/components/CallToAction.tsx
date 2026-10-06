import './CallToAction.scss'

export const CallToAction = () => {
  return (
    <section className="cta">
      <h2 className="cta__title">
        Ready to get coding?
        <br />
        Pick a repo and get Started!
      </h2>
      <a href="#repos" className="landing-btn landing-btn--dark">
        CTA Primary
      </a>
    </section>
  )
}
