import styles from "./random-color.module.css";
import {CSSProperties} from "react";

export const RandomColor = ({color, onUpdateColor} : {color: string, onUpdateColor: () => void}) => {
    return (
        <div className={styles.container}>
            <div className={styles.display} style={{ "--bgColor": color } as CSSProperties}/>
            <div>
                <p>{color}</p>
            </div>
            <button onClick={onUpdateColor}>Update color</button>
        </div>
    )
}