import React, { Component, useState } from 'react';
import styles from '../styles/navbutton.module.css'
import { motion } from '../node_modules/framer-motion';
import Link from 'next/link';

const Button = (props) => {

  const { text, link } = props

  const [isActive, setIsActive] = useState(false);
  const [hover, click, timeout] = [10, 7, 100]

  return (
    <Link href={link}>
      <motion.a
      className={styles.button} 
      whileHover={{ y: isActive ? click : hover }}
      animate={{y: isActive ? click : 0}}
      onClick={() => {
        setIsActive(true)
        setTimeout(setIsActive, timeout, false)
      }}>
        {text}
      </motion.a>
    </Link>
  ) 
}

export default Button;