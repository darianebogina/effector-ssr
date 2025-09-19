import {useUnit} from "effector-react";
import {colorModel} from "../random-color";
import {todoModel} from "../todo";
import {counterModel} from "../counter";
import {RandomColor} from "../random-color";
import {ToDo} from "../todo";
import {Counter} from "../counter";
import styles from "./content.module.css";

export const Content = () => {
    const [color, onUpdateColor] = useUnit([colorModel.$color, colorModel.updateColor]);
    const [tasks, onAdd, onDelete] = useUnit([todoModel.$tasks, todoModel.addTask, todoModel.deleteTask]);
    const [count, onIncrement, onDecrement] = useUnit([counterModel.$count, counterModel.incrementCount, counterModel.decrementCount]);

    return (
        <div className={styles.container}>
            <RandomColor color={color} onUpdateColor={onUpdateColor}/>
            <ToDo tasks={tasks} onAdd={onAdd} onDelete={onDelete}/>
            <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
        </div>
    )
}