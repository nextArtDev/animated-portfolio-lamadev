import Hero from '@/_components/Hero'
import Navbar from '@/_components/Navbar'
import Parallax from '@/_components/Parallax'
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
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section id="Contact">Protfolio1</section>
        <section>Protfolio2</section>
        <section>Protfolio3</section>
        <section id="About">Contact</section>
      </section>
    </div>
  )
}
