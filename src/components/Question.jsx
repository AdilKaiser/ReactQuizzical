function Question(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }

  return (
    <div className="multiple-choice-question-div">
        <div className="question-div">
          <h2 className="text-darkblue">{props.question}</h2>
        </div>
        <div className="answers-div d-flex">
        <label><input type="radio" name={props.name} /><span className="text-darkblue">{props.correct_answer}</span></label>
        <label><input type="radio" name={props.name} /><span className="text-darkblue">{props.incorrect_answers1}</span></label>
        <label><input type="radio" name={props.name} /><span className="text-darkblue">{props.incorrect_answers2}</span></label>
        <label><input type="radio" name={props.name} /><span className="text-darkblue">{props.incorrect_answers3}</span></label>
        </div>
    </div>
  )
}

export default Question