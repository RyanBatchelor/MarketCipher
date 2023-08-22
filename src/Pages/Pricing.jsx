import '../scss/Pricing.scss'
import PricingTestimonial from '../images/pricing-testimonial-2.png'
import KnowLikeAPro from '../images/MC-Know_Like_a_Pro.png'

const Pricing = () => {
  return (
    <>
    <section className="pricing-hero">
        <div className="pricing-content">
            <div className="pricing-heading">Change Your Life with Market Cipher</div>
            <div className="pricing-paragraph">Investing in Market Cipher will give you key insights, 
                community support, and the education you need to trade like an expert and change your damn life.
            </div>
            <div className="pricing-image">
                <img src={PricingTestimonial} alt=""/>
            </div>
        </div>
    </section>

    <section className="pricing-main">
        <div className="pricing-main-container">
            <div className="pricing-main-pro">
                <div className="pro-img">
                    <img src={KnowLikeAPro} alt=""/>
                </div>
                <div className="pro-text">
                    <h1>The Best Trading Indicators and Tools at Your Fingertips</h1>
                    <div className="pro-indicators">

                        <div className="pro-mca">
                            <h4>Market Cipher A</h4>
                            <p>Know your next move. Know when to, and when not to trade.</p>
                        </div>

                        <div className="pro-mcb">
                            <h4>Market Cipher B</h4>
                            <p>Know your strategy. It’s the backbone of your trading success.</p>
                        </div>

                        <div className="pro-mcsr">
                            <h4>Market Cipher SR</h4>
                            <p>Know your timeline. Your guard rails on the small timeframes.</p>
                        </div>

                        <div className="pro-mcdbsi">
                            <h4>Market Cipher DBSI</h4>
                            <p>Know your signals. Refined, accurate signals you can trust.</p>
                        </div>
                    </div>
                    <div className="pro-perks">
                        <h4>Plus get bonus perks like:</h4>
                        <ul>
                            <li>24-hour support anytime, anywhere</li>
                            <li>Full access to our discord community</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pricing-main-buy">
                <div className="pricing-cards">

                    <div className="professional pricing-card">
                        <h3>Professional</h3>
                        <p>12-month subscription</p>
                        <p>$1000</p>
                        <p>$600</p>
                        <button>Buy Professional</button>
                    </div>

                    <div className="best-value">
                        <h3>Best Value</h3>
                        <p>The plan 81% of members choose</p>
                        <div class="best-value-inner">
                            <h3>Lifetime</h3>
                            <p>Market Cipher Master.</p>
                            <p>No Experation</p>
                            <p>$3000</p>
                            <p>$1500</p>
                            <button>Buy Lifetime</button>
                        </div>
                    </div>

                    <div className="enterprise pricing-card">
                        <h3>Enterprise</h3>
                        <p>For small team brokerages to Wall Street hedge funds with hundreds of trade desks.</p>
                        <p>Contact Us for Pricing</p>
                        <p>Custom</p>
                        <button>Contact Us</button>
                    </div>
                </div>
                <p>We accept Bitcoin and credit card payments. Choose your desired package.</p>
                <p>Save 5% by paying with Bitcoin.</p>
            </div>

            <div className="pricing-main-video">
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/bxkm4Kjubqs" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing