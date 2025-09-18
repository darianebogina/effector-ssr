import {useUnit} from "effector-react";
import {$color, updateColor} from "../random-color";
import {$tasks, addTask, deleteTask} from "../todo";
import {$count, decrementCount, incrementCount} from "../counter";
import {RandomColor} from "../random-color";
import {ToDo} from "../todo";
import {Counter} from "../counter";
import styles from "./content.module.css";

export const Content = () => {
    const [color, onUpdateColor] = useUnit([$color, updateColor]);
    const [tasks, onAdd, onDelete] = useUnit([$tasks, addTask, deleteTask]);
    const [count, onIncrement, onDecrement] = useUnit([$count, incrementCount, decrementCount]);

    return (
        <div className={styles.container}>
            <RandomColor color={color} onUpdateColor={onUpdateColor}/>
            <ToDo tasks={tasks} onAdd={onAdd} onDelete={onDelete} />
            <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
        </div>
    )
}