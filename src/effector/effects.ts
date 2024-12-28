import { createEffect, Effect } from 'effector';
import { Task } from '../Types';

export const fetchTasks: Effect<void, Task[], Error> = createEffect(async () => {
    const starterTasks = new Promise<Task[]>((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    text: 'Добавить свою первую задачу',
                    completed: false,
                },
                {
                    id: 2,
                    text: 'Попробовать сменить статус задачи',
                    completed: false,
                },
                {
                    id: 3,
                    text: 'Удалить ненужные задачи',
                    completed: false,
                },
            ]);
        }, 1000);
    });
    return starterTasks;
});
