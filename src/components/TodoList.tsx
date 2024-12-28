import { Task } from '../Types';
import styled from 'styled-components';
import Remove from '../assets/remove.svg';
import Confirm from '../assets/confirm.svg';
import Cancel from '../assets/cancel.svg';

import { useUnit } from 'effector-react';
import store from '../effector/store';
import { removeTask, toggleTaskStatus } from '../effector/events';
import { useEffect } from 'react';
import { fetchTasks } from '../effector/effects';

const Container = styled.ul`
    width: 95%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;
const TasksContainer = styled.li`
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    display: flex;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 1em;
    padding: 5px 10px 5px 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;
const TaskContainer = styled.p`
    flex-grow: 1;
    padding: 15px;
    color: red;
`;
const Actions = styled.div`
    display: flex;
    gap: 13px;
    flex-direction: column;
    margin: 10px 5px;
    justify-content: center;
`;
const Button = styled.button`
    display: flex;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    padding: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    & > img {
        width: 40px;
    }
    &:hover,
    &:focus-visible {
        background-color: rgba(230, 230, 230, 0.8);
        &:active {
            background-color: rgba(20, 20, 20, 0.8);
            color: rgba(230, 230, 230);
            & > img {
                filter: grayscale(1) invert(0.5) brightness(10000%) contrast(1);
            }
        }
    }
`;

const TodoList = () => {
    const tasks: Task[] = useUnit(store);

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Container>
            {tasks.map((task) => (
                <TasksContainer key={task.id}>
                    <TaskContainer style={task.completed ? { textDecoration: 'line-through', color: 'green' } : {}}>{task.text}</TaskContainer>
                    <Actions>
                        <Button onClick={() => removeTask(task.id)}>
                            <img src={Remove} alt="Удалить" />
                        </Button>
                        <Button onClick={() => toggleTaskStatus(task.id)}>
                            <img src={task.completed ? Confirm : Cancel} alt="Изменить статус" />
                        </Button>
                    </Actions>
                </TasksContainer>
            ))}
        </Container>
    );
};
export default TodoList;
