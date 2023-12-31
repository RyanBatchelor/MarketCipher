import React from 'react'
import candles from '../images/candle.png'
import FadingText from './FadingText';

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <div className="hero-text px-3">

                <div className="fade-in-text mb-3">
                    <div className="line-one">
                        <FadingText delay={1000} text = 'Stocks. Crypto.'/>
                    </div>

                    <div className="line-two">
                        <FadingText delay={1750} text = 'Gold. Forex.' />
                    </div>

                    <div className="line-three">
                        <FadingText delay={2500} text = 'Whatever.' className='whatever'/>
                    </div>
                </div>

                <p>Any traded asset — Market Cipher is the only trading tool you’ll ever need.</p>
                <p>Bear market? Bull market? <span className='change-life'>It doesn’t matter what the market is doing. With Market Cipher, you could change your whole damn life.</span></p>
            </div>

            <div className="hero-image">
                <img src={candles} alt="" />
            </div>
            
        </div>
    </section>
  )
}

export default Hero