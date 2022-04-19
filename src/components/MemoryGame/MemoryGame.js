import React, {useEffect, useState} from 'react';
import styles from "./style.module.css"
import globalStyles from "../../assets/style/global.css"
import bart from "../MemoryGame/characters/Bart_Simpson.png"
import crapable from "../MemoryGame/characters/crapable.png"
import homer from "../MemoryGame/characters/homer.png"
import march from "../MemoryGame/characters/march.png"
import moe from "../MemoryGame/characters/moe.jpg"
import ralph from "../MemoryGame/characters/Ralph-Wiggum.jpg"
import MemoryGameHeader from "./MemoryGameHeader"
import MemoryGameFooter from "./MemoryGameFooter"


function MemoryGame() {
    let [finishedGame, setFinishedGame] = useState(false);
    let [successCards, setSuccessCards] = useState([]);
    let [moves, setMoves] = useState(0);
    let [startGame,setStartGame] = useState(false);
    let [speed,setSpeed] = useState("");
    let [speedTime,setSpeedTime] = useState(600);
    let [openedRed , setOpenedRed] = useState(false);
    useEffect(()=>{
        if (speed === "fast"){
            setSpeedTime(100)
        }else if(speed ===  "standart"){
            setSpeedTime(600)
        }else if(speed ===  "slow"){
            setSpeedTime(900)
        }
    },[speed])

    const [card, setCard] = useState(
        [
            {
                id: 11,
                state: false,
                word: "bart",
                opened: false,
            },
            {
                id: 22,
                state: false,
                word: "crapable",
                opened: false,
            },
            {
                id: 33,
                state: false,
                word: "homer",
                opened: false,
            },
            {
                id: 44,
                state: false,
                word: "march",
                opened: false,
            },
            {
                id: 55,
                state: false,
                word: "moe",
                opened: false,
            },
            {
                id: 66,
                state: false,
                word: "ralph",
                opened: false,
            },
            {
                id: 77,
                state: false,
                word: "martin",
                opened: false,
            },
            {
                id: 88,
                state: false,
                word: "apu",
                opened: false,
            },
            {
                id: 99,
                state: false,
                word: "wigan",
                opened: false,
            },
            {
                id: 111,
                state: false,
                word: "lisa",
                opened: false,
            },
            {
                id: 11,
                state: false,
                word: "bart",
                opened: false,
            },
            {
                id: 22,
                state: false,
                word: "crapable",
                opened: false,
            },
            {
                id: 33,
                state: false,
                word: "homer",
                opened: false,
            },
            {
                id: 44,
                state: false,
                word: "march",
                opened: false,
            },
            {
                id: 55,
                state: false,
                word: "moe",
                opened: false,
            },
            {
                id: 66,
                state: false,
                word: "ralph",
                opened: false,
            },
            {
                id: 77,
                state: false,
                word: "martin",
                opened: false,
            },
            {
                id: 88,
                state: false,
                word: "apu",
                opened: false,
            },
            {
                id: 99,
                state: false,
                word: "wigan",
                opened: false,
            },
            {
                id: 111,
                state: false,
                word: "lisa",
                opened: false,
            },
        ]
    );
    let changeSpeed = (speed) =>{
        setSpeed(speed)
    }

    useEffect(() => {
        let array = card;
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        setCard([...array])
    }, [])

    let openCard = (index, id) => {
        setOpenedRed(false)
        setStartGame(true)
        setMoves(moves + 1)
        let arr = card;
        arr[index].state = true;
        setCard([...arr])
        let opened = [];

        arr.map((item, index) => {
            if (item.state === true && item.opened === false) {
                opened.push(item.id)
                if (item.id === opened[0] && item.id === opened[1]) {
                    arr.map((data) => {
                        if (data.id === item.id) {
                            data.opened = true
                            setSuccessCards([...successCards, data])

                        }
                        opened = []
                        return data
                    })
                    opened = []
                    return item
                } else {
                    return item
                }
            } else {
                return item
            }
        })

        if (opened.length === 2 && opened[0] !== opened[1]) {
            let arr = card;
            setOpenedRed(true)

            let filter = () => {
                let filtered = arr.map((item, index) => {
                    if (item.id === opened[0] || item.id === opened[1]) {
                        let obj = item;
                        obj.state = false
                        return obj
                    } else {
                        return item
                    }
                })
                setCard([...filtered])
            }
            setTimeout(function () {
                filter();
                opened = [];
            }, speedTime)

        }

        if (opened.length > 2){
            alert("please open only two cards")
            return false
        }
    }
    useEffect(() => {
        if (successCards.length === card.length / 2) {
            setFinishedGame(true)
            setStartGame(false)
        }
    }, [card])
    return (
        <div className={styles.container}>
            <MemoryGameHeader successCards={successCards} moves={moves} startGame={startGame} speed={speed}/>
            <div className={styles.containerGrid}>
                {/*<h1>{!finishedGame ? "Memory Game" : "You Win"}</h1>*/}
                <div className={styles.memory_grid}>
                    {card.map((item, index) => {
                        return (
                            <div onClick={() => openCard(index, item.id)} key={index}
                                 className={!item.state ? styles.closed : ( item.opened  ? styles.open: (item.state && openedRed ? styles.disabled : "" ) )}>
                                <h1>{item.word}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <MemoryGameFooter changeSpeed={changeSpeed}/>
        </div>
    )

}

export default MemoryGame;
