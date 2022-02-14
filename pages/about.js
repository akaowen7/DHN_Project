import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from '../node_modules/framer-motion';
import { useState } from 'react';

import NavBar from '../components/navbar'

export default function Home() {

  return (
    <html>
      <div className={styles.container}>
        <NavBar/>
      </div>

      <div className={styles.main}>
				<div className={styles.container2}>
					<h1>About</h1>
					<p>
						This is an about page!
					</p>
				</div>
      </div>

      <div className={styles.main}>  
        <footer className={styles.footer}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <a href='https://www.youtube.com/channel/'>One Thing</a>
            <a href='https://www.youtube.com/channel/UC8ZvHJKfa1xhdMwB5k-7BLQ'>Two Thing</a>
            <a href='https://www.youtube.com/channel/UC8ZvHJKf'>Three Thing</a>
          </div>
          <div>
            <p>Reid Tull 2022</p>
          </div>
        </footer>
      </div>
    </html>
  )
}
