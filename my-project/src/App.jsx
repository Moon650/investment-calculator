
import { useState } from "react"
import Header from "./Component/Header"
import UserInput from "./Component/UserInput"
import Results from "./Component/Results"

function App() {

  const [ userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10,
})

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevInput => {
      return {
          ...prevInput,
          [inputIdentifier]: +newValue
      }
  })
}

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid &&(
       <p className="center">please enter a duration greater than zero.</p>)}
   {inputIsValid && <Results input={userInput} />}
    </>
  )
}



export default App
