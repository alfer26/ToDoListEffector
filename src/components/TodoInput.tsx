import { useState } from 'react';
import { addTask } from '../effector/events';
import { Task } from '../Types';

const TodoInput = () => {
    const [text, setText] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim()) {
            const newTask: Task = {
                id: Date.now(),
                text: text,
                completed: false,
            };
            addTask(newTask);
            setText('');
        } else {
            alert('Некоректный ввод');
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea placeholder="Введите вашу задачу" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Добавить</button>
        </form>
    );
};
export default TodoInput;
