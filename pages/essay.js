import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from '../node_modules/framer-motion';
import { useState } from 'react';

import Colapsable from '../components/colapsable'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {

  return (
    <html>
      <div className={styles.container}>
        <NavBar/>
      </div>

      <div className={styles.main} style={{flexDirection: "column"}}>
				<motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
					className={styles.container}>
					<Colapsable title="What is this?" open={false} body={(
						<div>
							<p>
								I've actualy already written an essay on this topic, which was the main reason I
								chose to create this website. (As you can tell this issue keeps me awake at night)
								I thought it would be good to include because I think is makes some good points about 
								why STV is a great system.
							</p>
					</div>
          )}/>
				</motion.div>
				<div className={styles.container}>
					<motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}} 
					className={styles.container2}>
						<h1>Why Single Transferable Vote is a Good Alternative for Canadas Current Voting System</h1>

						<p>Democracy is one of the great achievements of human civilization, and more specifically modern human society. Democracy states that the power that governs people is controlled by the people, creating a system that will over time conform to the will of the people. This arguably the most equal way to split power, however it is not practical to directly allow people to decide on legislation on a country sized scale. The solution to this problem is representative democracy, however this too has an issue; how do you decide on the people to represent parts of a population? Currently, Canada uses a First Past the Post (FPTP) voting system for federal elections, where in each riding the candidate with the most votes is awarded the seat. However, this system has many flaws that can make it very unrepresentative in certain situations. Canadas electoral system should be changed to a Single Transferable Vote system because it has minimal issues, compared to the current system of FPTP it is superior, and its ability to represent a population better leads to other advantages.</p>

						<p>Firstly, how does Single Transferable Vote (STV) function? STV is designed to create the most proportional representation of a population, it does this by having more then one seat per riding, and using run off voting, where excess votes, or votes for people that would lose, are added to other candidates. To begin everyone ranks the candidates running from favorite to least, then depending on how many people voted there is a minimum threshold calculated that each winner must pass, finally the votes for all candidates ranked 1<sup>st</sup> are tallied. The candidates that pass the winning threshold are elected, and their excess votes are distributed equally to the other candidates depending on the 2<sup>nd</sup> choices of their voters. Whichever candidate gets enough votes from the extra votes is elected; this repeats until all the seats are filled with elected candidates. If there is a situation where after distributing an elected candidate's excess votes there is still not another winner, then the candidate with the smallest number of votes is eliminated and their votes are distributed equally to the other candidates depending on their voter's 2<sup>nd</sup> choices. With this system, the riding will have a much more proportionate representation of the population because there is more then one representative per riding, and because of other reasons that will be discussed further on</p>

						<p>This system has many advantages over First Past the Post, however when STV is proposed, there are often people who bring up issues that STV seems to have. Here, I'd like to address them and explain how these issues aren't necessarily dealbreakers.</p>

						<p>Issue 1: “STV will create a government that is bloated and governs poorly”. While it is true that STV will often create a government made up of more parties, and will lead to less often a party majority, this by no means will create a situation that is unstable. Governing bodies using STV are often perfectly competent, and this can often lead to the formation of coalitions, meaning that parties might compromise more, leading to a more representative government.</p>

						<p>Issue 2: “STV creates a complicated system that confuses voters and gives them too many choices”. At first STV can seem confusing, however once voters get past the initial confusion and listen to a well-constructed explanation this no longer becomes an issue. Here is an example of an explanation by FairVote, which is very intuitive: ("How RCV works"). The second issue of too many choices mostly is a problem with those who don't engage in politics. Many people interested in politics would argue that more choices would never be an issue. However, the majority of people who dislike politics generally do so because of modern negative campaigns, where political parties will bash their opponents to give themselves a better look. This is cited as one of the biggest reasons people do not find interest in politics (Patterson), but with STV this becomes less of an issue, which will be explained in greater detail later in the paper. </p>

						<p>People who often bring up issue 2 are more often concerned with a larger problem, the worry that the population will be less likely to vote with this system because of its supposed issues. This is simply not true. Countries with proportional representation systems have much larger voting turnouts compared to systems like FPTP ("How RCV works").</p>

						<p>The current FPTP system that we have now in Canada is comparatively much worse and should be replaced with STV because of these four main reasons. Firstly, FPTP can be very unrepresentative. Due to the fact that parties only need to get the most votes compared to other parties running in that riding, there can be situation where the winning party wins without the majority of the vote. This can become more exacerbated when looked at from a federal level, when the results from all the ridings (that may not represent the population) come together. In the last 2 elections Canada has had the party that received the most votes did not receive the most seats. (“Election Night Results - National.") Under STV, this issue is mitigated. Because of the ranking system and the increased number of representatives per riding, the representation of each riding is greatly increased. When this is then applied on a federal level, the overall representation is much better. From this people trust their voting system more and will feel less like their vote doesn't matter.</p>

						<p>Secondly FPTP can lead to Gerrymandering of the borders of ridings, causing results to not fully represent the votes of the people. Gerrymandering is the practice of drawing borders of ridings in such a way that will favor a certain party. For example, if there are 3 voters for party “A” and 6 voters for party “B”, if you draw three ridings each with 1 “A” voter and 2 “B” voters then you will have an overall result of 3 “B” seats (Criss). This doesn't represent the population, and on much larger scales this can become a problem. Under STV though, this is not an issue. Because Ridings are drawn bigger, with more representatives in each riding, and better proportional representation in each riding, there is almost no way to gerrymander a riding.</p>

						<p>Thirdly, there is much less negative campaigning in SVT then in FPTP. Under FPTP, parties don't care about what voters from other parties think about them. If the vote doesn't go to them then the vote doesn't matter. In SVT, where you can vote for more than one party, cooperation is incentivized. Parties must appeal to all voters to get the most votes and the best chance of succeeding, so insulting another party will lessen the chances of those voters ranking you high, if at all. This not only means that with SVT the political space will be less toxic, but the parties will be more likely to take the wants and needs of people outside their voter base into account. The top reason Canadians did not vote was because they were “not interested in politics”, one of the reasons in this category include “did not like parties” ("Reasons for Not Voting in the Federal Election")<a href="file:///C:/Users/Reid/Documents/UOttawa/S1%20Y1/1101C_Final_Essay_Tull,Reid.docx#_ftn1" name="_ftnref1" title="">[1]</a>. These people would most likely become active voters under a system that reduces the negative campaigns that they dislike.</p>

						<p>Fourth, FPTP can have what's called the “spoiler effect”. Say there are three parties, A, B and C, with C much less popular than A and B. If some voters from A like C and decide to vote for them instead this can take votes away from A and cause B to win instead. The vote is “spoiled” by a voter who voted for a party that would never win. This incentivizes tactical voting, where a voter will vote for the “Lesser of two evils”, I.e., a C voter would vote A. Under STV this issue is also done away with. If you vote for a small party like C as your first choice, and A as your second, your vote can still go toward the party that has the best chance of winning. If C has too few votes to pass the vote threshold, and A doesn't yet then votes can be taken from C and given to A.<a href="file:///C:/Users/Reid/Documents/UOttawa/S1%20Y1/1101C_Final_Essay_Tull,Reid.docx#_ftn2" name="_ftnref2" title="">[2]</a> Or alternatively, because there is no spoiler effect and assuming enough people want to vote C, there is a greater chance of C getting elected.</p>

						<p>All together this paints an obvious picture: FPTP has lots of issues now that STV would easily fix. This however is just half the story, as there is something I haven't touched on, and that is why having proportional representation matters, and how it can better our country</p>

						<p>Firstly, it has a huge effect on women and their representation in and relationship to politics. Canada ranks 61<sup>st</sup> in women's representation within the federal level, with only 27% of the House being made up of women. On the contrary, in countries with PR systems like STV, there are much greater representations of women ("Women in Parliaments: World Classification."). There is not one exact reason that more women govern in STV and systems like it. It could be because of the same reason smaller parties have a better chance under SVT, from the lack of strategic voting, but the fact remains that there are more women in power with STV. Having representation of women in high positions is good in a sense that its very important to have equality, but also because women's experiences differ from men's. Its essential that law makers can empathize or at least understand one half of society, especially when it comes to sensitive topics that are very relevant to women, such as abortion. ("Women and PR.")</p>

						<p>Second, a voting system can make a difference in the gap of income inequality in a country. When only a certain amount of people votes in a country, only those people are going to be represented. It seems as well though, that with systems like STV where more people vote, and more people are represented, this can contribute to less of a gap in income inequality. This is because more people are voting and making the system work better for them, “Such consensual political institutions make the government more responsive to the demands of a wider range of citizens.” (Birchfield) ("PR and Inequality.")</p>

						<p>Canada has an issue with its representation. The voting system we currently use, First Past the Post, doesn't represent the population fully because how it elects people in each riding. Given common situations FPTP can wildly be unrepresentative of a population, and this is evident in the last two Canadian federal elections. Enter Single Transferable Vote. Because of its structure of larger ridings, ranked voting, and multiple candidates per riding, it is more representative then FPTP. It also excels in other categories when compared to its contemporaries: it removes issues of gerrymandering because of how each riding functions. STV removes the incentive for negative campaigning and generally encourages parties to work together instead of against each other. Plus, it removes the spoiler effect, allowing people to vote how they would really like. These all, while great on their own, also increase voter turnout, as people are more inclined to participate thanks to the less negative stigma, and the ability to vote as they please. STV however does have 2 issues main issues that are brought up whenever discussing it, both of which are not dealbreakers. Saying STV will create a poorer government is just not true, and the complexity and too many options issues have two answers: 1. Its not really that complex and 2. People will gain more interest in the political system as seen above. Apart from being generally better, the representation that STV provides can be beneficial in other aspects such as with women and their representation in government, and income inequality, where because of the improved representation of lower classes there is less of an income gap.</p>

						<p>For too long we have accepted compromise in our democracy, we have made excuses for why we cannot include certain people and settled for being good enough. Canada strives to be one of the best countries in the world on all accounts, and we are not doing bad. There are issues though, and one of those is with our democracy. If the true north wants to continue to consider itself the “strong” and “free”, then we need to make reform to our voting system, starting with the Single Transferable Vote.</p>
					</motion.div>
				</div>
				<div className={styles.container}>
					<div className={styles.container2}>
						<h1>Works Cited</h1>

						<p>Barthholdi, J., &amp; Orlin, J. (1991, May 12). Single Transferable Vote Resists Strategic Voting. Georgia Tech. https://www2.isye.gatech.edu/~jjb/papers/stv.pdf</p>

						<p>Birchfield, Vicki, and Markus Crepaz. "The impact of constitutional structures and collective and competitive veto points on income inequality in industrialized democracies." HUIT Sites Hosting, European Journal of Political Research, 1998, www.people.fas.harvard.edu/~iversen/PDFfiles/Birchfield&amp;Crepaz1998.pdf.</p>

						<p>Criss, Doug. "Gerrymandering -- Explained | CNN Politics." CNN, 27 June 2019, www.cnn.com/2019/06/27/politics/what-is-gerrymandering-trnd/index.html.</p>

						<p>"Election Night Results - National." Elections Canada, enr.elections.ca/National.aspx?lang=e.</p>

						<p>"How RCV works." FairVote, 2020, www.fairvote.org/how_rcv_works. Accessed 30 Nov. 2021.</p>

						<p>Patterson, Thomas. "Why Do So Many Americans Hate Politics?" History News Network, 2002, historynewsnetwork.org/article/1127.</p>

						<p>"PR and Inequality." Fair Vote Canada, 22 May 2018, www.fairvote.ca/pr-and-inequality/.</p>

						<p>"Reasons for Not Voting in the Federal Election" Statistics Canada, The Daily, 26 Feb. 2020, www150.statcan.gc.ca/n1/daily-quotidien/200226/dq200226b-eng.htm.</p>

						<p>"Women and PR." Fair Vote Canada, 22 Apr. 2018, www.fairvote.ca/women/.</p>

						<p>"Women in Parliaments: World Classification." Inter-Parliamentary Union, 1 Feb. 2019, archive.ipu.org/wmn-e/arc/classif010219.htm.</p>

					</div>
				</div>
      </div>
  
			<div className={styles.main}>  
        <Footer/>
      </div>
    </html>
  )
}
