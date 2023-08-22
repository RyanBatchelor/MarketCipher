import SpeechBubble from '../images/Speech_Bubble_Raster2.png'

const Reviews = () => {
  return (
    <>
      <section className="pricing-hero">
        <div className="pricing-content">
            <div className="pricing-heading">Don’t take our word for it.</div>
            <div className="pricing-paragraph">Looking for authentic, real-time trading software that can help you be 
            successful in your investment decisions? Hear what our customers think.
            </div>
            <div className="pricing-image">
                <img src={SpeechBubble} alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Reviews