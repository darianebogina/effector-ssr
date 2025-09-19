import {createEffect, createEvent, createStore, sample} from "effector";
import {fetchColor} from "@/shared/api";

const updateColor = createEvent();

const fetchColorFx = createEffect(async () => {
    return await fetchColor();
});

const $color = createStore<string>("");

sample({
    clock: updateColor,
    target: fetchColorFx,
});

sample({
    clock: fetchColorFx.doneData,
    target: $color,
});

export const model = {updateColor, $color};