'use client'
import { useRef } from 'react'
// import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef(null)

  // margin for starting
  // it can be const isInView = useInView({margin: "0px 100px -50px 0px"})
  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
      style={{
        background: 'linear-gradient(180deg, #0c0c1d, #111132)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <motion.div
        className="textContainer"
        variants={variants}
        style={{
          flex: '1',
          alignSelf: 'flex-end',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <p
          style={{
            fontWeight: 200,
            fontSize: '20px',
            color: 'gray',
            textAlign: 'right',
          }}
        >
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr
          style={{
            width: '500px',
            border: 'none',
            borderTop: '0.5px solid gray',
          }}
        />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        style={{
          flex: '2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className="title"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          <img
            src="/people.webp"
            alt=""
            style={{
              width: '300px',
              height: '100px',
              borderRadius: '50px',
              objectFit: 'cover',
            }}
          />
          <h1
            style={{
              fontSize: '96px',
              fontWeight: '100',
            }}
          >
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1
            style={{
              fontSize: '96px',
              fontWeight: '100',
            }}
          >
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
            Business.
          </h1>
          <button
            style={{
              width: '300px',
              height: '100px',
              borderRadius: '50px',
              backgroundColor: ' orange',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        style={{
          flex: '2',
          display: 'flex',
          maxWidth: '1366px',
          margin: 'auto',
        }}
      >
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
          style={{
            padding: '50px',
            border: '0.5px solid gray',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <h2>Branding</h2>
          <p
          // style={{
          //   fontWeight: 200,
          //   fontSize: '20px',
          //   color: 'gray',
          //   textAlign: 'right',
          // }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button
            style={{
              padding: '10px',
              backgroundColor: 'orange',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p
          // style={{
          //   fontWeight: 200,
          //   fontSize: '20px',
          //   color: 'gray',
          //   textAlign: 'right',
          // }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button
            style={{
              padding: '10px',
              backgroundColor: 'orange',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p
          // style={{
          //   fontWeight: 200,
          //   fontSize: '20px',
          //   color: 'gray',
          //   textAlign: 'right',
          // }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button
            style={{
              padding: '10px',
              backgroundColor: 'orange',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Go
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p
          // style={{
          //   fontWeight: 200,
          //   fontSize: '20px',
          //   color: 'gray',
          //   textAlign: 'right',
          // }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button
            style={{
              padding: '10px',
              backgroundColor: 'orange',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
