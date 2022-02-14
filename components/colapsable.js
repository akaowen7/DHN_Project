import React, { Component, useState } from 'react';
import styles from '../styles/container.module.css'
import { motion } from '../node_modules/framer-motion';

const Button = (props) => {

  const { title, body } = props

  const [isOpen, setIsOpen] = useState(true);
  const [hover] = [5]

  return <motion.div
  className={styles.container} 
  whileHover={{y: hover}}
	layout transition
  onClick={() => {
		setIsOpen(!isOpen)
  }}>
		{!isOpen && <i>Click to open</i>}
		{isOpen && <i>Click to close</i>}
		<h1>{title}</h1>
		{isOpen && <div>{body}</div>}
  </motion.div>
}

export default Button;