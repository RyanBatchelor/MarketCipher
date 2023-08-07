import React from 'react'
import TMVC from '../images/TVMC.png'

const About = () => {
  return (
    <section className="about-container">
        <div className="about-content">

            <div className="about-left">
                <img src={TMVC} alt="" />
                <h1 className="about-header mt-2">
                    Trading View <span className='about-plus'>+</span> Market Cipher
                </h1>
            </div>

            <div className="about-right">
                <h1 className="about-header">
                    What is Market Cipher?
                </h1>
                <p>
                Market Cipher is a composite indicator package hosted on TradingView. 
                Trading any asset class successfully is about analysis and taking advantage of key opportunities. 
                Market Cipher subscribers use it to see these windows of opportunity and act on them with the empowerment of 
                education and expert guidance from real people who really get it.
                </p>
                <h2 className='mt-3'>
                Well, that’s the school answer.
                </h2>
                <p>
                In practical terms, we are more than indicators. The Market Cipher brand is about community, education, guidance, 
                advice, and wisdom. Nobody makes it on their own. And even with help, there are many pitfalls and unsavory 
                characters lurking about – eager to pick your pocket. And that’s why we exist. 
                We know there are many trading tools out there, and your confidence and trust must be earned. 
                We take that seriously.
                </p>
                <h2 className='mt-3'>
                    Our goal is to make successful trading easier..
                </h2>
                <p>
                We are real people helping real people. We encourage discipline and risk management. 
                Be smart, and let’s have some fun learning and trading.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About