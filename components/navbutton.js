import React, { Component, useState } from 'react';
import styles from '../styles/navbutton.module.css'
import { motion } from '../node_modules/framer-motion';

const Button = (props) => {

  const { text, link } = props

  const [isActive, setIsActive] = useState(false);
  const [hover, click, timeout] = [10, 7, 100]

  return <motion.a
  className={styles.button} 
  whileHover={{ y: isActive ? click : hover }}
  animate={{y: isActive ? click : 0}}
  onClick={() => {
    setIsActive(true)
    setTimeout(window.open, timeout, link, null)
    setTimeout(setIsActive, timeout, false)
  }}>
    {text}
  </motion.a>
}

export default Button;