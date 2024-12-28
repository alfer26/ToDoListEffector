import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    return (
        <>
            <header>
                <h1>Список задач</h1>
            </header>
            <main>
                <TodoInput />
                <TodoList />
            </main>
        </>
    );
}

export default App;
