import { About, CallToAction, Features, Hero, Repos } from '../components'
import { Footer, Header } from '../layout'
import './Home.scss'

export const Home = () => {
  return (
    <div className="landing">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Repos />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
