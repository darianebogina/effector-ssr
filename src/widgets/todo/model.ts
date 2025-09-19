import {createEvent, createStore, sample} from "effector";
import {Task} from "@/shared";

const addTask = createEvent<string>();
const deleteTask = createEvent<string>();
const setTasks = createEvent<Task[]>();
const $tasks = createStore<Task[]>([]);

sample({
    clock: setTasks,
    target: $tasks,
});

sample({
    clock: addTask,
    source: $tasks,
    fn: (tasks, text) => [
        {id: Math.floor(Math.random() * 1000).toString(), text},
        ...tasks,
    ],
    target: $tasks,
});

sample({
    clock: deleteTask,
    source: $tasks,
    fn: (tasks, id) => tasks.filter((task) => task.id !== id),
    target: $tasks,
});

export const model = {$tasks, addTask, deleteTask, setTasks};