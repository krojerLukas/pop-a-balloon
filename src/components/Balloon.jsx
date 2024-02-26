import "../css/balloon.css"
import { useState } from "react";

const Balloon = (props) => {
    const [isPopped, setIsPopped] = useState(false);


    const balloonWidth = 200;
    const balloonHeight = balloonWidth * 1.17;
    const threadHeight = 50;

    function handleClick (event) {
        setIsPopped(true);
        const balloon = event.target;
        balloon.parentNode.style.animation = "balloon-popping .5s forwards"
    }

    if (isPopped) {

    }

    return (
        <div onClick={handleClick} className="balloon balloon--moving" style={{color: props.color}}>
            <svg
                className="balloon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
            >
                <defs>
                    <radialGradient
                        id={`balloon-gradient-${props.id}`}
                        cx="40%"
                        cy="40%"
                        r="50%"
                        fx="30%"
                        fy="30%"
                    >
                        <stop offset="0%" stopColor="#fff"/>
                        <stop offset="100%" stopColor="currentColor"/>
                    </radialGradient>
                    <filter
                        id={`balloon-shadow-${props.id}`}
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                    >
                        <feMerge>
                            <feMergeNode in="offsetBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <rect
                    x={balloonWidth / 2}
                    y={balloonHeight}
                    width="1"
                    height={threadHeight}
                    fill="currentColor"
                />
                <polygon
                    points={`${balloonWidth / 2},${balloonHeight - 3} ${
                        balloonWidth / 2 + 8
                    },${balloonHeight + 5} ${balloonWidth / 2 - 8},${
                        balloonHeight + 5
                    }`}
                    fill="currentColor"
                />
                <ellipse
                    cx={balloonWidth / 2}
                    cy={balloonHeight / 2}
                    rx={balloonWidth / 2}
                    ry={balloonHeight / 2}
                    fill={`url(#balloon-gradient-${props.id})`}
                    filter={`url(#balloon-shadow-${props.id})`}
                />
            </svg>
        </div>
    );
}

export default Balloon;