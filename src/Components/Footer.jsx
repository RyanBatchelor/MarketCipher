import FooterLogo from '../images/footer-logo.png'
import Encrypt from '../images/letsencrypt-logo-horizontal.png'


const Footer = () => {
  return (
    <>
      <section className="footer-top">
        <div className="footer-top-content">
          <div className="commissions">
            <div className="commissions-logo">
              <img src={FooterLogo} alt="" />
              <hr />
            </div>
            <div className="commissions-info mt-5">
              <h3>Did you know?</h3>
              <p>
                Once you’re a paid member, you become an affiliate. Promote Market Cipher and earn unlimited commissions.
              </p>
              <a href="#"><i>Learn How</i></a>
            </div>
          </div>

          <div className="footer-nav">
            <ul className="footer-navbar">
              <li className='mt-3'>Pricing</li>
              <li className='mt-3'>Reviews</li>
              <li className='mt-3'>Learn</li>
              <li className='mt-3'>Getting Started</li>
            </ul>
          </div>

          <div className="encrypt">
            <img src={Encrypt} alt="" />
            <p>SSL Encryption</p>
          </div>
        </div>
      </section>

      <section className="footer-bottom">
        <div className="footer-bottom-content">
          <p>©2023 CF Strategies LLC. All rights reserved. | Legal Disclaimer | Financial Disclaimer</p>
        </div>
      </section>
    </>
  )
}

export default Footer