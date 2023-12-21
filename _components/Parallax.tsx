'use client'
// time: 1:11:00
import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    // our target is our whole section
    target: ref,
    //'start start': animation 'start's when the 'top' of the element is the top of the view port
    //'end start': animation is gonna 'end' when the 'top' of the target element riches the bottom of the view port
    offset: ['start start', 'end start'],
  })

  // y = yText => if (scrollYProgress === 0 ) return 0% , and if(scrollYProgress ===1) return 500%
  // It means if scrollYProgress===0 than y = 0% , and if scrollYProgress===1 then y = 500% and everything between them divides.
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        width: ' 100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ fontSize: '100px', y: yText }}>
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div
        className="mountains"
        style={{
          backgroundImage: 'url("/mountains.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '3',
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '2',
          y: yBg,
          backgroundImage: `url(${
            type === 'services' ? '/planets.png' : '/sun.png'
          })`,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          backgroundImage: 'url("/stars.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '1',
          x: yBg,
        }}
      ></motion.div>
    </div>
  )
}

export default Parallax
