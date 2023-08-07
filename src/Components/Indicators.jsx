import React from 'react'
import { useState } from 'react';
import IndicatorCard from './IndicatorCard'
import MCAOff from '../images/Indicator_A_OFF-x.png'
import MCSROff from '../images/Indicator_SR2_OFF-x.png'
import MCDBSIOff from '../images/Indicator_DBSI_OFF-x.png'
import MCBOff from '../images/Indicator_B2_OFF-x.png'
import MCA from '../images/IndicatorA.png'
import MCSR from '../images/IndicatorSr.png'
import MCDBSI from '../images/IndicatorDBSI.png'
import MCB from '../images/IndicatorB.png'

const Indicators = () => {
    const cardsData = [
        { borderColor: '#0060ff', title: 'A', image: `${MCAOff}`, content: 'Trend Analysis' },
        { borderColor: '#4bc2ae', title: 'B', image: `${MCBOff}`, content: 'Oscillator Package' },
        { borderColor: '#b3a91f', title: 'SR', image: `${MCSROff}`, content: 'Support & Resistance' },
        { borderColor: '#d44870', title: 'DBSI', image: `${MCDBSIOff}`, content: 'Dual Band Strength Index' },
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