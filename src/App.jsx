import Balloon from "./components/Balloon.jsx";
import "./css/general.css"
import {useState} from "react";


function App (props) {

  const [balloons, setBalloons] = useState(props.data)

  return (
      <div className="grid">
        <div className="row">
          {balloons}
        </div>
      </div>
  )
}

export default App
