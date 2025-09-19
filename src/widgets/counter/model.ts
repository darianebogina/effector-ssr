import { createEvent, createStore, sample } from "effector";

const incrementCount = createEvent<void>();
const decrementCount = createEvent<void>();
const $count = createStore<number>(0);

sample({
	clock: incrementCount,
	source: $count,
	fn: (num) => num + 1,
	target: $count,
});

sample({
	clock: decrementCount,
	source: $count,
	fn: (num) => num - 1,
	target: $count,
});

export const model = { $count, incrementCount, decrementCount };
