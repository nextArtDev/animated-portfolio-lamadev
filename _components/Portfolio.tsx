'use client'
// 1:35:00
import { useRef } from 'react'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
]

interface SingleProps {
  item: { id: number; title: string; img: string; desc: string }
}
const Single = ({ item }: SingleProps) => {
  // Its container is image section, not the whole section, imageRef
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          className="wrapper"
          style={{
            maxWidth: '1366px',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <div
            className="imageContainer"
            ref={ref}
            style={{
              flex: '1',
              height: '50%',
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <motion.div
            className="textContainer"
            style={{
              y,
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
          >
            <h2 style={{ fontSize: '72px' }}>{item.title}</h2>
            <p style={{ color: 'gray', fontSize: '20px' }}>{item.desc}</p>
            <button
              style={{
                backgroundColor: 'orange',
                border: 'none',
                borderRadius: '10px',
                padding: '10px',
                width: '200px',
                cursor: 'pointer',
              }}
            >
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    // the line at the beginning is 100%: end end, and at the end is 0%
    offset: ['end end', 'start start'],
  })

  // Its like useTransform, but for spring behavior
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div
      className="portfolio relative"
      ref={ref}
      style={{ position: 'relative' }}
    >
      <div
        className="progress"
        style={{
          position: 'sticky',
          top: '0',
          left: '0',
          paddingTop: '50px',
          textAlign: 'center',
          color: 'orange',
          fontSize: '36',
        }}
      >
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX, height: '10px', background: 'white' }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
