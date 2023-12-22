'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid white',
        position: 'fixed',
        zIndex: '999',
        scale: 2,
      }}
    ></motion.div>
  )
}

export default Cursor
