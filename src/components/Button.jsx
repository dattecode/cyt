import { motion } from 'framer-motion'
import React from 'react'
import "../styles/btnCss.css"

const Button = ({handleRandomClick}) => {

  //animation
  const buttonAnimated = {
    hover: {
      scale: 1.2,
      color: "#ff983f"
    },
    click: {
      scale:0.8
    }
  }

  //component
  return (
    <motion.button
    className='btn'
    whileHover="hover"
    whileTap="click"
    variants={buttonAnimated}
    onClick={handleRandomClick}
    >
      ¡ Click !
    </motion.button>
  )
}

export default Button