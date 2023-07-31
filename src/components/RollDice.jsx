
import styled from 'styled-components'

const RollDice = ({
  currentDice,roleDice
}) => {

  


  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>
        Click on the Dice to roll
      </p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .dice{
      cursor: pointer;
    }
    p{
      font-size: 24px;
    }
`;