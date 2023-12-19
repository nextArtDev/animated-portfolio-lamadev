'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Test({}: Props) {
  const variants = {
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        //   type: 'spring',
        //   stiffness: 40,
        //   damping: 80,
        duration: 2,
        staggerChildren: 0.5,
      },
    },
    hidden: { opacity: 0, rotateY: 180 },
  }
  return (
    // <div
    //   className=" w-screen h-screen bg-slate-400 flex items-center justify-center "
    //   style={{
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <motion.div
    //     // className="w-[200px] h-[200px] bg-white"
    //     style={{
    //       width: '200px',
    //       height: '200px',
    //       background: 'white',
    //       transformOrigin: 'right',
    //     }}
    //     initial={{ opacity: 0, rotateY: 90 }}
    //     transition={{ duration: 1 }}
    //     // animate={{ opacity: 1, scale: 1 }}
    //     whileInView={{ opacity: 1, rotateY: 0 }}
    //   >
    //     صحفه اول
    //   </motion.div>

    <div
      className=" w-screen h-screen bg-slate-400 flex items-center justify-center "
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        // className="w-[200px] h-[200px] bg-white"
        style={{
          width: '200px',
          height: '200px',
          background: 'white',
          transformOrigin: 'right',
        }}
        initial={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.3 }}
        // animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
      >
        صحفه اول
      </motion.div>
      <div
        className="h-[200px] w-[50px] bg-back"
        style={{
          width: '2px',
          height: '200px',
          background: 'black',
          transformOrigin: 'left',
        }}
      ></div>

      <motion.div
        className="flex items-center justify-center rounded-xl "
        style={{
          width: '205px',
          height: '205px',
          background: 'red',
          transformOrigin: 'left',
          padding: '8px',
          position: 'relative',
        }}
        variants={variants}
        initial="hidden"
        // animate={{ opacity: 1, scale: 1 }}
        whileInView="visible"
      >
        <motion.div
          variants={variants}
          style={{
            width: '200px',
            height: '200px',
            background: 'white',
            transformOrigin: 'left',
            padding: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          صفحه آخر Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          rerum earum, officia repudiandae ratione accusantium praesentium
          tenetur eius
        </motion.div>
        <motion.div
          variants={variants}
          style={{
            width: '200px',
            height: '200px',
            background: 'white',
            transformOrigin: 'left',
            padding: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          صفحه آخر Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          rerum earum, officia repudiandae ratione accusantium praesentium
          tenetur eius
        </motion.div>
        <motion.div
          variants={variants}
          style={{
            width: '200px',
            height: '200px',
            background: 'white',
            transformOrigin: 'left',
            padding: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          صفحه آخر Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          rerum earum, officia repudiandae ratione accusantium praesentium
          tenetur eius
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Test
