import React, {useEffect, useState} from 'react';
import styles from "./style.module.css"
import MemoryGameFooterList from "./MemoryGameFooterList";


function MemoryGameFooter({changeSpeed}) {

    return (
        <div className={styles.footer}>
            <ul className={styles.footerListParent}>
               <MemoryGameFooterList changeSpeed={changeSpeed}/>
            </ul>
        </div>

    )

}

export default MemoryGameFooter;
