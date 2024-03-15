import React from 'react'
import IPA from '../ipa.js'
import './phonemeCard.css'

const PhonemeCard = (props) => {
  return (
    <div className = 'cardFrame'>
      <div className = 'cardLeftColumn'>

      </div>
     
      <div className = 'cardCenterColumn'>
        <p className = 'cardText'>/ {IPA[props.ipaIndex]} /</p>
      </div>
      <div className = 'cardRightColumn'>

      </div>
    </div>
  )
}

export default PhonemeCard