import React, { Component, useState } from 'react';
import styles from '../styles/container.module.css'
import { motion } from '../node_modules/framer-motion';

const Button = (props) => {

  const { title, body, open} = props

  const [isOpen, setIsOpen] = useState(open);
  const [hover] = [5]

  return (
  <motion.div
  className={styles.container} 
  whileHover={{y: hover}}
	layout
  transition={trans}>
		<i onClick={() => {setIsOpen(!isOpen)}}>Click to {!isOpen ? "open" : "close"}</i>
		<motion.h1>{title}</motion.h1>
		{isOpen && <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>{body}</motion.div>}
  </motion.div>
  )
}

const trans = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export default Button;