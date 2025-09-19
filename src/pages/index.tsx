import { allSettled, fork, serialize } from "effector";
import { Provider } from "effector-react";
import type { Task } from "@/shared";
import { Content } from "@/widgets/content";
import { colorModel } from "@/widgets/random-color";
import { todoModel } from "@/widgets/todo";

export const getServerSideProps = async () => {
	const scope = fork();

	const initialTasks: Task[] = [
		{
			id: "90201",
			text: "your task will be here",
		},
	];

	await allSettled(todoModel.setTasks, { scope, params: initialTasks });
	await allSettled(colorModel.updateColor, { scope });

	return {
		props: {
			values: serialize(scope),
		},
	};
};

export default function Home({ values }: { values: any }) {
	const scope = fork({ values });

	return (
		<Provider value={scope}>
			<Content />
		</Provider>
	);
}
