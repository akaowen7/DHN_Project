import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavButton from '../components/navbutton'
import Colapsable from '../components/colapsable'
import { motion } from '../node_modules/framer-motion';
import { useState } from 'react';

import vote from "../assets/VotingHands.jpg";
import graph from "../assets/ElectionResults.png";

export default function Home() {

  return (
    <html>
      <div className={styles.container}>
        <div className={styles.navigator}>
          <h1>The Single Transverable Vote System</h1>
          <div className={styles.navigatorbuttons}>
          <NavButton text="Youtube" link="https://www.youtube.com/channel/UC8ZvHJKfa1xhdMwB5k-7BLQ"/>
          <NavButton text="Youtube" link="https://www.youtube.com/channel/UC8ZvHJKfa1xhdMwB5k-7BLQ"/>
          <NavButton text="Youtube" link="https://www.youtube.com/channel/UC8ZvHJKfa1xhdMwB5k-7BLQ"/>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <h1>What Do We Do</h1>
            <p>
              We look to bring to the attention of more people the issues with 
              many of the current voting systems in First World Countries
              and how they can be changed for the better.
            </p>
          </div>
        </div>  
        <div className={styles.container}>
          <Image src={vote} alt="People voting" className={styles.Image}/>
        </div>  
      </div>

      <div className={styles.main}>
        <div className={styles.container} style={{flexBasis: "100%", padding: "2rem 8rem"}}>
          <Colapsable title="The Problem" body={(
            <div>
              <p>
              Canada uses the <a href="https://en.wikipedia.org/wiki/First-past-the-post_voting">First Past the Post </a> 
              voting system in most elections. This system is notorious for its issues surrounding 
              representation. In situations where more than 2 candidates are running for office, 
              often the results can be very unrepresentative of the populations choices
              </p>
              
              <div className={styles.container3}>
                <p>
                  Take this example of faketown election results. Terry got the most votes at 40%, 
                  while John got 35%, and Jerry got 25%. At first the results here seem fine, 
                  however, it just so happens that those who  voted for a person with a name starting 
                  with "J", would prefer a J name to any T name. Meaning if a  John voter couldn't 
                  vote for John, they would pick Jerry over Terry, and vice versa. Now we see these 
                  results in a new light, 60% of the population is unhappy with the current leader, 
                  and would have preferred any other option.
                </p>
                <div style={{padding: "0rem 7.5rem"}}><Image src={graph} alt="graph" layout='intrinsic'/></div>
              </div>

              <p>
                This all boils down to a system that can produce results that the majority of the population
                are unhappy with. 
              </p>

              <p>This sucks.</p>
            </div>
          )}/>
          <Colapsable title="The Soultion" body={(
            <div>
              <p>
              Canada uses the <a href="https://en.wikipedia.org/wiki/First-past-the-post_voting">First Past the Post </a> 
              voting system in most elections. This system is notorious for its issues surrounding 
              representation. In situations where more than 2 candidates are running for office, 
              often the results can be very unrepresentative of the populations choices
              </p>
              
              <div className={styles.container3}>
                <p>
                  Take this example of faketown election results. Terry got the most votes at 40%, 
                  while John got 35%, and Jerry got 25%. At first the results here seem fine, 
                  however, it just so happens that those who  voted for a person with a name starting 
                  with "J", would prefer a J name to any T name. Meaning if a  John voter couldn't 
                  vote for John, they would pick Jerry over Terry, and vice versa. Now we see these 
                  results in a new light, 60% of the population is unhappy with the current leader, 
                  and would have preferred any other option.
                </p>
                <div style={{padding: "0rem 7.5rem"}}><Image src={graph} alt="graph" layout='intrinsic'/></div>
              </div>

              <p>
                This all boils down to a system that can produce results that the majority of the population
                are unhappy with. 
              </p>

              <p>This sucks.</p>
            </div>
          )}/>
        </div>  
      </div>
    </html>
  )
}
