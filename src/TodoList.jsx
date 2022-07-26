import TodoItem from "./TodoItem";

function TodoList(props) {
	return (
		<ul className="list-group">
			{props.todos.map((todoItem) => (
				<TodoItem
					isChecked={todoItem.isChecked}
					description={todoItem.description}
				/>
			))}
		</ul>
	);
}

export default TodoList;
