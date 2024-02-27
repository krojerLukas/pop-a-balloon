import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Balloon from "./components/Balloon.jsx";

let BALLONS = [
    <Balloon color={"#9980FA"} id={"1"} />,
    <Balloon color={"#9980FA"} id={"2"} />,
    <Balloon color={"#9980FA"} id={"3"} />,
    <Balloon color={"#9980FA"} id={"4"} />,
    <Balloon color={"#9980FA"} id={"5"} />,
    <Balloon color={"#9980FA"} id={"6"} />,
    <Balloon color={"#9980FA"} id={"7"} />,
    <Balloon color={"#9980FA"} id={"8"} />,
    <Balloon color={"#9980FA"} id={"9"} />
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={BALLONS} />
  </React.StrictMode>,
)
