function TodoItem(props) {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked}
      />
      <span className="p-3">{props.description}</span>
    </li>
  );
}

export default TodoItem;
