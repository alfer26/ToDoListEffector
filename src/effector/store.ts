import { createStore } from 'effector';
import { addTask, removeTask, toggleTaskStatus } from './events';
import { Task } from '../Types';
import { fetchTasks } from './effects';

const store = createStore<Task[]>([])
    .on(addTask, (state, task: Task) => [...state, task])
    .on(toggleTaskStatus, (state: Task[], id: number) => state.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    .on(removeTask, (state: Task[], id: number) => state.filter((task) => task.id != id))
    .on(fetchTasks.doneData, (state: Task[], tasks: Task[]) => [...state, ...tasks])

export default store;
