import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How TO Play Dice Game</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on the dice image</p>
            <p>After clicking on the dice if selected 
                number is equal to dice number you will
                get same point as dice {''}</p>
            <p>If you get wrong guess then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    .h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }

`