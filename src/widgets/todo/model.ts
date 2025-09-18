import {createEvent, createStore, sample} from "effector";
import {Task} from "@/shared";

export const $tasks = createStore<Task[]>([], { sid: "tasks" })

export const addTask = createEvent<string>()
export const deleteTask = createEvent<string>()
export const setTasks = createEvent<Task[]>()

sample({
    clock: setTasks,
    target: $tasks,
});

sample({
    clock: addTask,
    source: $tasks,
    fn: (tasks, text) => [
        { id: Math.floor(Math.random() * 1000).toString(), text },
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