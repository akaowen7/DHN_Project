import React from 'react';
import styles from '../styles/navbar.module.css'
import NavButton from '../components/navbutton'
import { motion } from '../node_modules/framer-motion';

export default function Nav()  {
  return (
	<div className={styles.navigator}>
		<h1>The Fight For Single Transferable Vote</h1>
		<div className={styles.navigatorbuttons}>
		<NavButton text="About" link="./about"/>
		<NavButton text="Essay" link="./essay"/>
		<NavButton text="Home" link="/"/>
		</div>
	</div>
	)
}