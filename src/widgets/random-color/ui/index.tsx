import type { CSSProperties } from "react";
import styles from "./random-color.module.css";

export const RandomColor = ({
	color,
	onUpdateColor,
}: {
	color: string;
	onUpdateColor: () => void;
}) => {
	return (
		<div className={styles.container}>
			<div
				className={styles.display}
				style={{ "--bgColor": color } as CSSProperties}
			/>
			<div>
				<p>{color}</p>
			</div>
			<button onClick={onUpdateColor} type={"button"}>
				Update color
			</button>
		</div>
	);
};
