import React, {useEffect, useState} from 'react';
import styles from "./style.module.css"
import compare from "../../assets/img/compare.svg"

function MemoryGameFooterList({changeSpeed}) {
    let [activeSpeed , setActiveSpeed] = useState("standart")
    let changeSpeedHandler = (state)=>{
        changeSpeed(state);

    }
    return (
        <>
            <li className={styles.footerList}>
                <div className={styles.footerListTitle}>Game mode:</div>
                <div className={styles.footerListCards}>
                    <div className={styles.selected}>Solo</div>
                    <div className={styles.card}>With a friend</div>
                    <div className={styles.card}>Against computer</div>
                </div>
            </li>
            <li className={styles.footerList}>
                <div className={styles.footerListTitle}>Speed:</div>
                <div className={styles.footerListCards}>
                    <div className={activeSpeed === "fast" ? styles.selected : styles.card}
                         onClick={()=>{
                        changeSpeedHandler("fast");
                        setActiveSpeed("fast");
                    }}>Fast</div>
                    <div className={activeSpeed === "standart" ? styles.selected : styles.card}
                         onClick={()=>{
                        changeSpeedHandler("standart");
                        setActiveSpeed("standart");
                    }}>Standart</div>
                    <div className={activeSpeed === "slow" ? styles.selected : styles.card}
                         onClick={()=>{
                        changeSpeedHandler("slow")
                        setActiveSpeed("slow");
                    }}>Slow</div>
                </div>
            </li>
            <li className={styles.footerList}>
                <div className={styles.footerListTitle}>Vocabulary list:</div>
                <div className={styles.footerListCards}>
                    <div className={styles.card}>Vocabulary List 1</div>
                    <div className={styles.selected}>New vocabulary list</div>
                </div>
            </li>
            <li className={styles.footerList}>
                <div className={styles.footerListTitle}>Language:</div>
                <div className={styles.footerListCards}>
                    <select name="" id="" className={styles.selected} defaultValue={"eng"}>
                        <option value="eng"  disabled={true} defaultValue>English</option>
                        <option value="ger">German</option>
                    </select>
                    <div><img src={compare} alt="compare"/></div>
                    <select name="" id="" className={styles.card} defaultValue={"ger"}>
                        <option value="ger" disabled={true}>German</option>
                        <option value="eng" >English</option>
                    </select>
                </div>
            </li>
        </>

    )

}

export default MemoryGameFooterList;
