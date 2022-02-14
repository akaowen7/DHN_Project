import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from '../node_modules/framer-motion';
import { useState } from 'react';

import NavButton from '../components/navbutton'
import Colapsable from '../components/colapsable'
import NavBar from '../components/navbar'

import vote from "../assets/VotingHands.jpg";
import graph from "../assets/ElectionResults.png";

export default function Home() {

  return (
    <html>
      <div className={styles.container}>
        <NavBar/>
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
          <Colapsable title="The Problem?" body={(
            <div>
              <p>
              Canada uses the <a href="https://en.wikipedia.org/wiki/First-past-the-post_voting">First Past the Post </a> 
              voting system in most elections. This system is notorious for its issues surrounding 
              representation. In situations where more than 2 candidates are running for office, 
              often the results can be very unrepresentative of the populations choices
              </p>
              
              <div className={styles.container3}>
                <p style={{maxWidth: "50%"}}>
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
          <Colapsable title="The Soultion?" body={(
            <div>
              <p>
              Simple: <a href="https://en.wikipedia.org/wiki/Single_transferable_vote">Single Transferable Vote </a>. Its
              Its a simple altentive voting system that can be used to mitigate the issues that are present in other 
              systems like First Past the Post.
              </p>
              
              <p>
                STV is designed to create the most proportional representation of a population, it 
                does this by having more then one seat per riding, and using run off voting, where 
                excess votes, or votes for people that would lose, are added to other candidates. 
                To begin everyone ranks the candidates running from favorite to least, then 
                depending on how many people voted there is a minimum threshold calculated that 
                each winner must pass, finally the votes for all candidates ranked 1st are tallied. 
                The candidates that pass the winning threshold are elected, and their excess votes 
                are distributed equally to the other candidates depending on the 2nd choices of their 
                voters. Whichever candidate gets enough votes from the extra votes is elected; this 
                repeats until all the seats are filled with elected candidates. If there is a situation 
                where after distributing an elected candidate's excess votes there is still not 
                another winner, then the candidate with the smallest number of votes is eliminated 
                and their votes are distributed equally to the other candidates depending on their 
                voter's 2nd choices.
              </p>
              <div className={styles.container3}>
                <div style={{padding: "0rem 7.5rem"}}><Image src={graph} alt="graph" layout='intrinsic'/></div>
                <p style={{maxWidth: "50%"}}>
                  Let's bring this back to the John, Jerry, and Terry example from earlier. What would 
                  happen in this case is that John would lose the first round, and so his votes would 
                  go to his voters' second choice. These would go to the only other “J” candidate, Jerry. 
                  With this Jerry would get a combined total of 60% of the vote, making him win the 
                  election. Finally a “J” winner who more accurately represents the 60% of the population 
                  that prefers the J over the T.
                </p>
              </div>

              <p>
                This system has many more advantages, and if you'd like to read about them more I wrote a 
                whole essay on the topic.
              </p>

              <p>This rocks.</p>
            </div>
          )}/>
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
