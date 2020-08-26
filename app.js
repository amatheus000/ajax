import React from "react";
import ReactDOM from "react-dom";
import Ajax from "./components/ajax";


const App= () => {
  const [category, setCategory] = React.useState("");
  const [clue, setClue] = React.useState("");
  const [inputForm, setInputForm] = React.useState("");
  const [score, setScore] = React.useState("");

  const handleQuestionGenaration = async (event) => {
    const response = await fetch(
      `https://jservice.io/api/random`
    );
    const data = await response.json();
    setCategory(data.category.title);
    setClue(data.question)
    setScore(data.value)
  };

  return (Ajax20 = (data) => {(
      <Ajax
        category={data.category}
        clue={data.clue}
        inputForm={data.inputForm}
        score={data.score}
      />)}
  )

  // const handleUserResponse = event => {
  //   event.preventDefault()
  //   if(form.userResponse.value.toLowerCase() === correctResponse.toLowerCase()){
  //     score.textContent = Number(score.textContent) + questionPoints
  //   }else{
  //     alert(`Sorry, we were looking for ${correctResponse}`)
  //     score.textContent = Number(score.textContent) - questionPoints
  //   }
  //   form.reset()
  //   fetchClue()
}


ReactDOM.render(<App />, document.querySelector("#root"));