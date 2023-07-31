import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import { Button, OutlineButton } from '../styled/Button'
import Rules from "./Rules"


const GamePlay = () => {


const[score,setScore] = useState(0);
const [selectedNumber,setSelectedNumber] = useState();
const [currentDice,setCurrentDice] = useState(1);
const[error,setError] = useState('');
const[showRules,setShowRules] = useState(false)




const generateRandomNumber = (min,max) => {
  return Math.ceil(Math.random() * (max-min) + min);
}

const roleDice = () =>
{
  if(!selectedNumber)
  {
    setError('You Have Not Selected Any Number')
    return
  }
  
  const randomNumber = generateRandomNumber(1,6)
  setCurrentDice(randomNumber)
  

  if(selectedNumber == randomNumber)
  setScore((prev)=> prev+randomNumber)
  else
  setScore((prev)=> prev-2)
  setSelectedNumber()
  
}

const resetScore = () =>
{
  setScore(0)
}



  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector  
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}
        error={error} setError={setError}/>
        </div>
        <RollDice 
        currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules(!showRules)}>{
              showRules? "Hide":"Show"
            } Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
        
    }
    .btns{
      display: flex;
      margin-top: 40px;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: center;
    }
`;