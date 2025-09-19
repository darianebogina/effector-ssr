import {createEffect, createEvent, createStore, sample} from "effector";
import {fetchColor} from "@/shared/api";

export const updateColor = createEvent();

const fetchColorFx = createEffect(async () => {
    return await fetchColor();
});

export const $color = createStore<string>("");

sample({
    clock: updateColor,
    target: fetchColorFx,
});

sample({
    clock: fetchColorFx.doneData,
    target: $color,
});
