import { createEvent, EventCallable } from 'effector';
import { Task } from '../Types';

export const addTask: EventCallable<Task> = createEvent();
export const removeTask: EventCallable<number> = createEvent();
export const toggleTaskStatus: EventCallable<number> = createEvent();
