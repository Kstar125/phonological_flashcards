import React from 'react'
import FEATURES from '../features.js'
import './featureCard.css'

const FeatureCard = (props) => {
  return (
    <div className = 'cardFrame'>
      <div className = 'cardLeftColumn'>

      </div>
     
      <div className = 'featureCardCenterColumn'>
        <p className = 'featureCardText'>{FEATURES[props.ipaIndex][0] + ", " + FEATURES[props.ipaIndex][1] + ", "} <br />
        {FEATURES[props.ipaIndex][2] + ", " + FEATURES[props.ipaIndex][3] + ", "} <br />
        {FEATURES[props.ipaIndex][4] + ", " + FEATURES[props.ipaIndex][5] + ", "} <br />
        {FEATURES[props.ipaIndex][6] + ", " + FEATURES[props.ipaIndex][7] + ", "} <br />
        {FEATURES[props.ipaIndex][8] + ", " + FEATURES[props.ipaIndex][9] + ", "} <br />
        {FEATURES[props.ipaIndex][10] + ", " + FEATURES[props.ipaIndex][11] + ", "} <br />
        {FEATURES[props.ipaIndex][12] + ", " + FEATURES[props.ipaIndex][13]}
        </p>
      </div>
      <div className = 'cardRightColumn'>

      </div>
    </div>
  )
}

export default FeatureCard