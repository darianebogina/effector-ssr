import {createEvent, createStore, sample} from "effector";

export const $count = createStore<number>(0, { sid: "count" });
export const incrementCount = createEvent<void>();
export const decrementCount = createEvent<void>();

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
