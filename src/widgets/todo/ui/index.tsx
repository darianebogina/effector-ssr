import { memo, useState } from "react";
import type { Task } from "@/shared/types";
import styles from "./todo.module.css";

export const ToDo = ({
	tasks,
	onAdd,
	onDelete,
}: {
	tasks: Task[];
	onAdd: (text: string) => void;
	onDelete: (id: string) => void;
}) => {
	return (
		<div className={styles.wrapper}>
			<h1>ToDo List</h1>
			<NewTaskForm onAdd={onAdd} />
			<TasksList taskList={tasks} deleteTask={onDelete} />
		</div>
	);
};

const NewTaskForm = ({ onAdd }: { onAdd: (newText: string) => void }) => {
	const [newText, setNewText] = useState("");

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Add task"
				value={newText}
				onChange={(e) => setNewText(e.target.value)}
			/>
			<button
				onClick={() => {
					onAdd(newText);
					setNewText("");
				}}
				type={"button"}
			>
				Add
			</button>
		</div>
	);
};

const TasksList = ({
	taskList,
	deleteTask,
}: {
	taskList: Task[];
	deleteTask: (id: string) => void;
}) => (
	<ul className={styles.list}>
		{taskList.map((task) => (
			<TaskRow key={task.id} task={task} onDelete={deleteTask} />
		))}
	</ul>
);

const TaskRow = memo(
	({ task, onDelete }: { task: Task; onDelete: (id: string) => void }) => (
		<li className={styles.task}>
			<p>{task.text}</p>
			<button onClick={() => onDelete(task.id)} type={"button"}>
				{" "}
				&#10060;{" "}
			</button>
		</li>
	),
);
