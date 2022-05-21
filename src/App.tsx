import { useState } from 'react';
import './App.css';

function App() {
	const [todo, setTodo] = useState<string>('');
	const [todoList, setTodoList] = useState<Array<string>>([]);

	const handleTodoInput = (e: React.FormEvent<HTMLInputElement>) => {
		setTodo(e.currentTarget.value);
	};

	const addTodo = () => {
		if (todo) {
			const updatedTodoList = [...todoList, todo];
			setTodoList(updatedTodoList);
			setTodo('');
		}
	};

	return (
		<div className="App">
			<div>Todo</div>
			<div>
				<input type="text" value={todo} onChange={handleTodoInput} />
				<button onClick={addTodo}>Add</button>
			</div>
			<div>
				{todoList.map(todo => (
					<li>{todo}</li>
				))}
			</div>
		</div>
	);
}

export default App;
