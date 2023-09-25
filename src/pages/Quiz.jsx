import {useState, useEffect} from "react"
import topBlob from '../assets/img/blob-top-large.webp'
import bottomBlob from '../assets/img/blob-bottom-small.webp'
import Question from "../components/Question"

function Quiz() {

  const [questions, setQuestions] = useState([])
  const [countCorrectAns, setCountCorrectAns] = useState(0)

  useEffect(()=> {
    const fetchQuestions = async()=>  {
      const URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
      const response = await fetch(URL)
      const finalData = await response.json()
      console.log(finalData.results)
      setQuestions(finalData.results)
    } 
    fetchQuestions()
  },[])

  function checkAns() {

    let countCorrectAns=1;
    let i=0;
    while (i!=null) {
      const question = document.getElementsByTagName("input")[i];
      const getspan = document.getElementsByTagName("span")[i];
      const score = document.getElementsByClassName("score")[0];
      const quizButton = document.getElementsByClassName("btn-quizpg")[0];

      quizButton.textContent = "Play again";

      questions.map((val) => {
        if(val.correct_answer == getspan.innerText) {
          getspan.style.backgroundColor = "#94D7A2";
          getspan.style.border = "#94D7A2";
        }
      })

      if(question.checked) {

        getspan.style.backgroundColor = "#F8BCBC";
        getspan.style.border = "#F8BCBC";

        questions.map((val) => {
          if(val.correct_answer == getspan.innerText) {
            getspan.style.backgroundColor = "#94D7A2";
            getspan.style.border = "#94D7A2";
            setCountCorrectAns(countCorrectAns++)
          }
        })
        score.style.display = "inline-block";
      }
      i++;
    }
  }

  const allQuestions = questions.map((val, index) => 
    <Question key={index} question={val.question} name={index++} correct_answer={val.correct_answer}
    incorrect_answers1={val.incorrect_answers[0]}
    incorrect_answers2={val.incorrect_answers[1]}
    incorrect_answers3={val.incorrect_answers[2]} />
  )

  return (
    <div className="quiz-page">
        <div className="top-right-blob"><img className="top-right-blob-img" src={topBlob}/></div>
        {allQuestions}
        <div className="button-div">
            <span className="score text-darkblue">You scored {countCorrectAns}/5 correct answers</span>
            <button className="btn-quizpg bg-mediumblue text-skyblue" onClick={checkAns}>Check answers</button>
        </div>
        <div className="bottom-left-blob"><img className="bottom-left-blob-img" src={bottomBlob}/></div>
    </div>
  )
}

export default Quiz