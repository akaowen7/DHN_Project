import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from '../node_modules/framer-motion';
import { useState } from 'react';

import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {

  return (
    <html>
      <div className={styles.container}>
        <NavBar/>
      </div>

      <div className={styles.main}>
				<div className={styles.container}>
					<div className={styles.container2}>
						<h1>About</h1>
						<p>
							This is an about page!
						</p>
						<p>
							I did not have enough time to make this page look nice,
							please enjoy
						</p>
						<p>
							This page was made by <a href="https://reidtull.ca">Reid Tull</a> as
							a part of a Digital Arts and the Humanities Assignment, and also because we are 
							passionate about voting reform!
						</p>
					</div>
				</div>
      </div>
  
			<div className={styles.main}>  
        <Footer/>
      </div>
    </html>
  )
}
