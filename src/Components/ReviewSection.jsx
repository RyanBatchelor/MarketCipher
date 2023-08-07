import React from 'react'
import quoteBottom from '../images/quote-bottom1.svg'

const ReviewSection = () => {
  return (
    <section className="review-container">
        <div className="review-content">
            <h1>Real Reviews. From Real People. Just Like You</h1>
            <div className="quote-container">
                <div className="quote-text">
                    <h1>It's the best indicator I've ever used.</h1>
                </div>
                <img src={quoteBottom} alt="" />
            </div>
            <p>But it's not just the indicator, it is also the amazing Discord. 
                I have never seen such nice people in a server! Trust me, they always want to help you! 
                Actually only the Discord should cost so much like this amazing indicator. ;D
            </p>
            <button className="btn review-btn">
                Read More Reviews
            </button>
        </div>
    </section>
  )
}

export default ReviewSection