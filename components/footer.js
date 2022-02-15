import React from 'react';
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import { motion } from '../node_modules/framer-motion';

export default function Foot()  {
  return (
		<footer className={styles.footer}>
			<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
			<Link href="./about">
				<a>About</a>
			</Link>
			<Link href="./essay">
				<a>Essay</a>
			</Link>
			<Link href="/">
				<a>Home</a>
			</Link>
			</div>
			<div>
				<p>Reid Tull 2022</p>
			</div>
		</footer>
	)
}