import React, {useEffect, useState} from 'react';
import Timer from "react-compound-timerv2";


function TimerCountDown({startGame, speed}) {
    let [startMe, setStart] = useState(false);
    let [speedTime, setSpeedTime] = useState(1000)
    let enddedTime = ""
    useEffect(() => {
        if (startGame) {
            setStart(true)

        } else {
            setStart(false)
            localStorage.setItem("finishedTime", enddedTime)
        }
    }, [startGame]);
    return (
        <>
            <Timer
                initialTime={0}
                startImmediately={false}>
                {({start, resume, pause, stop, reset, timerState, getTime}) => {
                    if (startMe) {
                        start();
                        enddedTime = getTime();

                    } else {
                        enddedTime = getTime();

                        stop()
                    }
                    return (
                        <React.Fragment>
                            <div>
                                <Timer.Minutes/> : <Timer.Seconds/> : 0<Timer.Milliseconds/>
                            </div>
                        </React.Fragment>
                    )
                }}
            </Timer>
        </>

    )

}

export default TimerCountDown;
