import '../scss/Learn.scss'
import Affiliate from '../images/affiliate-img-1.png'
import ContactBubble from '../images/contact-bubble-8.png'
import Support from '../images/support-faq-img.png'
const Learn = () => {
  return (
    <div className="learn-container">
        <div className="learn-content">
            <div className="learn-header">
                <h1>Learn Your Way</h1>
                <p>
                    You pick the pace, we provide the tools to get you there. Get tips for getting started, 
                    understanding TradingView, joining our Discord server, trading strategies, 
                    risk management, and more.
                </p>
            </div>
            <div className="learn-cards">
                <div className="learn-card videos">
                    <div className="learn-image">
                        <img src={Support} alt=""/>
                    </div>
                    <div className="learn-text">
                        <h1>Support & FAQ</h1>
                        <p>
                            We have an expansive FAQ page for all of your most asked questions, but if there
                            is something you cannot find the answered on here, please feel free to reach
                            out to our staff of real, like minded traders. Our team is passionate about MC
                            and is here to help you, whether via email or Discord, any time of day.
                        </p>
                    </div>
                </div>

                <div className="learn-card faq">
                    <div className="learn-image">
                        <img src={Support} alt=""/>
                    </div>
                    <div className="learn-text">
                        <h1>Support & FAQ</h1>
                        <p>
                            We have an expansive FAQ page for all of your most asked questions, but if there
                            is something you cannot find the answered on here, please feel free to reach
                            out to our staff of real, like minded traders. Our team is passionate about MC
                            and is here to help you, whether via email or Discord, any time of day.
                        </p>
                    </div>
                </div>

                <div className="learn-card commission">
                    <div className="learn-image">
                        <img src={Support} alt=""/>
                    </div>
                    <div className="learn-text">
                        <h1>Support & FAQ</h1>
                        <p>
                            We have an expansive FAQ page for all of your most asked questions, but if there
                            is something you cannot find the answered on here, please feel free to reach
                            out to our staff of real, like minded traders. Our team is passionate about MC
                            and is here to help you, whether via email or Discord, any time of day.
                        </p>
                    </div>
                </div>

            </div>

            <div className="contact">
                <div className="contact-img">
                    <img src={ContactBubble} alt=""/>
                </div>

                <div className="contact-text">
                    <div className="contact-card get-in-touch">
                        <h1>Get in touch</h1>
                        <p>
                            If there is a question that you cannot find an answer to, 
                            please do not hesitate to send us a message. We will get back to you within 
                            24 hours.
                        </p>
                    </div>

                    <div className="contact-card inqueries">
                        <h1>General Inqueries</h1>
                        <p>
                            support@marketciphertrading.com
                        </p>
                    </div>

                    <div className="contact-card discord-issues">
                        <h1>Discord Issues?</h1>
                        <p>
                            discord@marketciphertrading.com
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Learn