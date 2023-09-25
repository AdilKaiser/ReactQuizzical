import {useState, useEffect} from "react"

import topBlob from './assets/img/blob-top-large.webp'
import bottomBlob from './assets/img/blob-bottom-small.webp'
import Question from "./components/Question"

function App() {

  const [questions, setQuestions] = useState([])
  const [countCorrectAns, setCountCorrectAns] = useState()

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

      if(question.checked) {

        getspan.style.backgroundColor = "#F8BCBC";
        getspan.style.border = "#F8BCBC";

        questions.map((val) => {
          if(val.correct_answer == getspan.innerText) {
            getspan.style.backgroundColor = "#94D7A2";
            getspan.style.border = "#94D7A2";
            // countCorrectAns++;
            setCountCorrectAns(countCorrectAns++)
            // console.log(countCorrectAns);
          }
        })
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
    <>
    {allQuestions}
    {countCorrectAns}
    <button onClick={checkAns}>Check answers</button>
    </>

    // <div className="opening-page d-flex align-items-center justify-content-center">
    //   <div className="top-right-blob"><img className="top-right-blob-img" src={topBlob}/></div>
    //   <div className="content-div">
    //     <div className="heading">
    //       <h1 className="text-darkblue">Quizzical</h1>
    //     </div>
    //     <div className="description">
    //       <p className="text-darkblue">Some description if needed</p>
    //     </div>
    //     <div className="button-div">
    //       <button className="btn-start-quiz bg-mediumblue text-skyblue">Start quiz</button>
    //     </div>
    //   </div>
    //   <div className="bottom-left-blob"><img className="bottom-left-blob-img" src={bottomBlob}/></div>
    // </div>
  )
}

export default App
