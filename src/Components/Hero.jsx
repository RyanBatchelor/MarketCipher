import React from 'react'
import candles from '../images/candle.png'
import FadingText from './FadingText';

const Hero = () => {
  return (
    <section className="getting-started-container">
      <div className="getting-started-text px-3">

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
        <p>Bear market? Bull market? It doesn’t matter what the market is doing. With Market Cipher, you could change your whole damn life.</p>
      </div>
      <div className="getting-started-image">
        <img src={candles} alt="" />
      </div>
    </section>
  )
}

export default Hero