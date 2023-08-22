import '../scss/GettingStarted.scss'
import Buy from '../images/buy.png'
import Connect from '../images/connect.png'
import Explore from '../images/explore.png'
import Join from '../images/join.png'


const GettingStarted = () => {
  return (
    <div className="getting-started-container">
        <div className="getting-started-content">
            <div className="getting-started-header">
                <h1>Finally, a trading tool you can trust.</h1>
                <small>Get started in just four steps</small>
            </div>
            <div className="getting-started-steps">

                <div className="step step1">
                    <div className="step-image">
                        <img src={Buy} alt=""/>
                    </div>
                    <div className="step-text">
                        <h2>Step 1. Buy</h2>
                        <h4>Buy the Market Cipher membership level right for you</h4>
                        <p>
                            We structured our pricing tiers to make it affordable for new users and 
                            irresistible for seasoned traders.
                        </p>
                    </div>
                </div>

                <div className="step step2">
                    <div className="step-image">
                        <img src={Connect} alt=""/>
                    </div>
                    <div className="step-text">
                        <h2>Step 2. Connect</h2>
                        <h4>Connect to your TradingView account.</h4>
                        <p>
                            Make a free or paid account at <span className='discord-email'>TradingView.com</span> and record your 
                            TradingView username. It does not need to match the username you made with us. 
                            Next, navigate to your account dashboard on our website. You will see a field 
                            to fill in your TradingView username. Fill in your TradingView username there 
                            and click ‘save’ This will connect your Market Cipher subscription and your 
                            TradingView account. Within seconds you should see the indicators in your 
                            invite-only scripts folder on TradingView. If you are having issues with 
                            connecting, visit our support page.
                        </p>
                    </div>
                </div>

                <div className="step step3">
                    <div className="step-image">
                        <img src={Join} alt=""/>
                    </div>
                    <div className="step-text">
                        <h2>Step 3. Join</h2>
                        <h4>Join the community on Discord.</h4>
                        <p>
                            We host our own fully staffed online community on Discord with 24/7 support. 
                            Create an account over at Discord.com and enable phone verification. 
                            Your Discord invite can be found in the email you received when you purchased 
                            your membership. Click the link to join. It may take up to 12 hours for our 
                            moderators to approve you. If more than a day has passed, 
                            shoot an email to our mod team  
                            <span className='discord-email'> discord@marketciphertrading.com.</span>
                        </p>
                    </div>
                </div>

                <div className="step step4">
                    <div className="step-image">
                        <img src={Explore} alt=""/>
                    </div>
                    <div className="step-text">
                        <h2>Step 4. Explore</h2>
                        <h4>Explore our tutorial videos for helpful tips and insights.</h4>
                        <p>
                            Take your time to get to know the interface, terminology, and more. 
                            Most of all, understand risk management before making big moves.
                        </p>
                    </div>
                </div>
            </div>

              <div className="before-you-buy">
                  <h2>Before you buy...</h2>
                  <p>Please watch this video before making your purchase</p>
                  <iframe 
                      width={700}
                      height={400} 
                      src="https://www.youtube.com/embed/bxkm4Kjubqs" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen>
                  </iframe>
              </div>
        </div>
    </div>
  )
}

export default GettingStarted