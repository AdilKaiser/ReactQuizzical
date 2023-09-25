import { Link } from "react-router-dom";

import topBlob from './assets/img/blob-top-large.webp'
import bottomBlob from './assets/img/blob-bottom-small.webp'

function App() {

  return (
    <>
    <div className="opening-page d-flex align-items-center justify-content-center">
      <div className="top-right-blob"><img className="top-right-blob-img" src={topBlob}/></div>
      <div className="content-div">
        <div className="heading">
          <h1 className="text-darkblue">Quizzical</h1>
        </div>
        <div className="description">
          <p className="text-darkblue">Some description if needed</p>
        </div>
        <div className="button-div">
          <Link to="/quiz">
            <button className="btn-start-quiz bg-mediumblue text-skyblue">Start quiz</button>
          </Link>
        </div>
      </div>
      <div className="bottom-left-blob"><img className="bottom-left-blob-img" src={bottomBlob}/></div>
    </div>
    </>
  )
}

export default App
