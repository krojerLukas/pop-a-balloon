import "./css/general.css"
import "./css/grid.css"
import {useState} from "react";
import { Fragment } from "react";


function App(props) {

    const [balloonArr, setBalloonArr] = useState(props.data)

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
