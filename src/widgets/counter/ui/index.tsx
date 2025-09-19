import styles from "./counter.module.css";

export const Counter = ({
	count,
	onIncrement,
	onDecrement,
}: {
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
}) => {
	return (
		<div className={styles.container}>
			<button onClick={onIncrement} className={styles.button} type={"button"}>
				+
			</button>
			<p>{count}</p>
			<button onClick={onDecrement} className={styles.button} type={"button"}>
				-
			</button>
		</div>
	);
};
