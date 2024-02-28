import "./css/general.css"
import "./css/grid.css"
import {useState} from "react";
import { Fragment } from "react";


function App(props) {

    const balloonArr = props.data

    function pickRandomBalloon () {
        for (let i = 0; i < balloonArr.length; i++) {
            const randomPosition = Math.floor(Math.random() * balloonArr.length);
            return balloonArr[randomPosition]
        }

    }
    console.log(pickRandomBalloon());

    return (
        <div className="grid">
            <div className="row">
                {balloonArr.map((balloon) => (
                    <Fragment key={balloon.props.id}>
                        {balloon}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default App;
