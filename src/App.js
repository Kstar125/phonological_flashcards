import logo from './logo.svg';
import './App.css';
import PhonemeCard from './Components/PhonemeCard.js'
import FeatureCard from './Components/FeatureCard.js'
import {useState} from 'react';


function App() {

  let [cardState, setCardState] = useState(0)

  const chooseCardState = () => {
    let tmpVar = Math.floor(Math.random() * 29);

    setCardState(cardState = tmpVar)
    console.log(cardState)
  }

  let [variantState, setVariantState] = useState(0)

  const switchVariantState = () => {
    
    let tmpVar = 0;
    
    tmpVar = variantState;
    
    switch(tmpVar) {
      case 0:
        tmpVar = 1
        break;
      case 1:
        tmpVar = 0
        break;
    }

    setVariantState(variantState = tmpVar)
  }
  

  return (
    <div className="App">
      <div className = 'leftColumn'>

      </div>

      <div className = 'centerColumn'>
        <div className='cardTop'>

        </div>
    
        <div className = 'card'>
          {variantState === 0 ? <PhonemeCard ipaIndex = {cardState}/> : <FeatureCard ipaIndex = {cardState} />}
        </div>

        <div className='cardBottom'>
          <div className = 'cardBottomRight'>
            <button className = 'generateNewCard' onClick={chooseCardState}>New Card</button>
          </div>
          <div className  = 'cardBottomLeft'>
            <button className = 'generateVariantCard' onClick = {switchVariantState}>{variantState === 0 ? "Features":"Phoneme"}</button>
          </div>
        </div>
      </div>

      <div className = 'rightColumn'>
        
      </div>
 
    </div>
  );
}

export default App;
