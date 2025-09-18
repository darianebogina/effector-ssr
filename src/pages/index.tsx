import {allSettled, fork, serialize} from "effector";
import {Provider} from "effector-react";
import {Task} from "@/shared";
import {Content} from "@/widgets/content";
import {setTasks} from "@/widgets/todo";
import {updateColor} from "@/widgets/random-color";

export const getServerSideProps = async () => {
    const scope = fork();

    const initialTasks: Task[] = [{
        id: "90201",
        text: "your task will be here",
    }];

    await allSettled(setTasks, { scope, params: initialTasks });
    await allSettled(updateColor, { scope })

    return {
        props: {
            values: serialize(scope),
        },
    }
};

export default function Home({ values }: { values: any }) {
    const scope = fork({ values });

    return (
        <>
            <Provider value={scope}>
                <Content/>
            </Provider>
        </>

    )
}