import Hero from '@/_components/Hero'
import Navbar from '@/_components/Navbar'
import Parallax from '@/_components/Parallax'
import Portfolio from '@/_components/Portfolio'
import Services from '@/_components/Services'
import Test from '@/_components/Test'

export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />

        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <section id="Contact">Protfolio1P</section>
      </section>
    </div>
  )
}
