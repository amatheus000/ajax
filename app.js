import React from "react";
import ReactDOM from "react-dom";


const App = () => {
  const [isFormDisabled, setIsFormDisabled] =React.useState(true)
  const [inputForm, setInputForm] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [clue, setClue] = React.useState({
    category: "I will take Ajax for $200",
    text: "Request your first clue..."
  });

  const fetchClue = async (event) => {
    setIsFormDisabled(true)
    const response = await fetch(
      `https://jservice.io/api/random`
    );
    const data = await response.json();
    const clue = data[0];

    const answer = clue.answer;
    const value = clue.value || 0;
    const category = clue.category.title;
    const text = clue.question;
    setClue({text, answer, category, value})
    setIsFormDisabled(false)
  };

  const handleUserResponse = event => {
    event.preventDefault()
    if(inputForm.toLowerCase() === clue.answer.toLowerCase()){
      setScore( score + clue.value)
    }else{
      alert(`Sorry, we were looking for ${clue.answer}`)
      setScore(score - clue.value)
    }
    fetchClue()
    setInputForm('')
  }
  
  return (
    <main>
      <div id="question-box">
        <h1 id="category">
          {clue.category}
        </h1>
        <h2 id="clue">
          {clue.text}
        </h2>
      </div>
      <form onSubmit={handleUserResponse}>
        <label htmlFor="user-response">What is</label>
        <input 
          disabled={isFormDisabled} 
          id="user-response" 
          name="userResponse" 
          autoComplete="off" 
          value={inputForm}
          onChange={(event) => setInputForm(event.target.value)} 
        />
        <button id="submit" disabled={isFormDisabled}>Submit</button>
      </form>
      <h3>Your Score: $<span id="score">{score}</span></h3>
      <button id="new-clue-button"  onClick={fetchClue} >Next Clue, Alex</button>
    </main>

)

}

ReactDOM.render(<App />, document.querySelector("#root"));