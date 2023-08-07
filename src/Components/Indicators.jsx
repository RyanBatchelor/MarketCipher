import React from 'react'
import { useState } from 'react';
import IndicatorCard from './IndicatorCard'
import MCA from '../images/Indicator_A_OFF-x.png'
import MCSR from '../images/Indicator_SR_OFF-x.png'
import MCDBSI from '../images/Indicator_DBSI_OFF-x.png'
import MCB from '../images/Indicator_B_OFF.png'
import MCB2 from '../images/Indicator_B2_OFF-x.png'

const Indicators = () => {
    const cardsData = [
        { borderColor: 'red', title: 'A', image: `${MCA}`, content: 'Trend Analysis' },
        { borderColor: 'blue', title: 'B', image: `${MCB2}`, content: 'Oscillator Package' },
        { borderColor: 'green', title: 'SR', image: `${MCSR}`, content: 'Support & Resistance' },
        { borderColor: 'purple', title: 'DBSI', image: `${MCDBSI}`, content: 'Dual Band Strength Index' },
      ];
    
      const [activeCardIndex, setActiveCardIndex] = useState(-1);
    
      const handleCardClick = (index) => {
        if (activeCardIndex === index) {
          setActiveCardIndex(-1); // Clicking on the active card again will close the large box
        } else {
          setActiveCardIndex(index);
        }
      };
    
      const getActiveCard = () => {
        if (activeCardIndex !== -1) {
          return cardsData[activeCardIndex];
        }
        return null;
      };

  return (
    <section className="indicator-container">
        <div className="indicator-content">
            <div className="indicator-text">
                <h1>The 4 Indicators in Market Cipher</h1>
                <p>Quickly analyze, isolate, and anticipate what is happening in the market and capitalize on those insights.</p>
            </div>

            <div className="indicator-cards">
                {cardsData.map((card, index) => (
                    <IndicatorCard
                    key={index}
                    borderColor={card.borderColor}
                    title={card.title}
                    image={card.image}
                    height={card.height}
                    width={card.width}
                    marginBottom={card.marginBottom}
                    content={card.content}
                    onClick={() => handleCardClick(index)}
                    isActive={index === activeCardIndex}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Indicators