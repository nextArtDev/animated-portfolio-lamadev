import Hero from '@/_components/Hero'
import Navbar from '@/_components/Navbar'
import Test from '@/_components/Test'

export default function Home() {
  return (
    <div>
      <section>
        <Navbar />
        <section>
          <Hero />
        </section>
        {/* <Test /> */}
        <section id="Homepage">Parallax</section>
        <section id="Services">Services</section>
        <section id="Portfolio">Parallax</section>
        <section id="Contact">Protfolio1</section>
        <section>Protfolio2</section>
        <section>Protfolio3</section>
        <section id="About">Contact</section>
      </section>
    </div>
  )
}
