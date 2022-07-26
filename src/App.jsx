import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const todos = [
	{ isChecked: true, description: "Walk Toby" },
	{ isChecked: false, description: "Setup new monitor" },
];

function App() {
	return (
		<div className="container mt-5">
			<h1>Todo List</h1>
			<TodoInput />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
