'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

// import './sidebar.scss'
import Links from './Links'
import ToggleButton from './ToggleButton'
import { stylex } from '@stylexjs/stylex'

// const s = stylex.create({
//   sidebar: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     color: 'black',
//   },
//   bg: {
//     zIndex: '999',
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     bottom: '0',
//     background: 'white',
//     width: {
//       default: '400px',
//       '@media (max-width: 670px)': '200px',
//     },
//   },
//   links: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   a: {
//     fontSize: {
//       default: '40px',
//       '@media (max-width: 670px)': '20px',
//     },
//   },
//   button: {
//     zIndex: '999',
//     position: 'fixed',
//     width: '50px',
//     height: ' 50px',
//     borderRadius: '50%',
//     top: '25px',
//     left: '25px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//   },
// })

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(25px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className=""
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
      }}
      //   className="sidebar"
      // It will apply this to children
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        //   className={stylex(s.bg)}
        style={{
          zIndex: '999',
          position: 'fixed',
          top: '0',
          left: '0',
          bottom: '0',
          background: '#ffffff',

          backdropFilter: '12px',
          width: '400px',
        }}
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
