import React, {useEffect, useState} from 'react';
import TimerCountDown from "../TimerCountdown/TimerCountDown"
import styles from "./style.module.css"


function MemoryGameHeader({successCards, moves, startGame , speed}) {

    return (
        <div className={styles.header}>
            <div className={styles.score}>
                <h3 style={{marginRight: 4}}>Score:</h3>
                <div className={styles.whiteBox}>{successCards.length}</div>
            </div>
            <div className={styles.rightStyles}>
                <div className={styles.whiteBox} style={{paddingTop: 8, paddingBottom: 8, marginRight: 20}}>
                    <div className={styles.moves}>
                        <h3 style={{marginRight: 4}}>Moves:</h3>
                        <div className={styles.num}>{moves}</div>
                    </div>
                </div>
                <div className={styles.whiteBox} style={{minWidth:"130px",textAlign:"center"}}>
                    <div className={styles.timer}>
                        <TimerCountDown startGame={startGame} speed={speed}/>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default MemoryGameHeader;
