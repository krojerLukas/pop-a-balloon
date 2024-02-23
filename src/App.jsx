import Balloon from "./components/Balloon.jsx";
import "./css/general.css"


function App() {

  return (
      <div className="grid">
        <div className="row">
          <div className="column">
            <Balloon color={"#9980FA"} id={"1"} />
          </div>
          <div className="column">
            <Balloon color={"#9980FA"} id={"2"} />
          </div>
          <div className="column">
            <Balloon color={"#9980FA"} id={"3"} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Balloon color={"#9980FA"} id={"4"}/>
          </div>
          <div className="column">
            <Balloon color={"#9980FA"} id={"5"}/>
          </div>
          <div className="column">
            <Balloon color={"#9980FA"} id={"6"}/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Balloon color={"#9980FA"} id={"7"}/>
          </div>
          <div className="column">
            <Balloon color={"#9980FA"} id={"8"}/>
          </div>
          <div className="column">
            <Balloon color={"#9980FA"} id={"9"}/>
          </div>
        </div>
      </div>
  )
}

export default App
