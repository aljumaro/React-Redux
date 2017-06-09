import React from 'react';

import Todo from './todo';

//Presentational TodoList component
const TodoList = ({ todos, onTodoClick }) => {

	return (
		<ul>
			{todos.map(t => <Todo key={t.id} {...t} onClick={() => onTodoClick(t.id)} />)}
		</ul>
	)

}

export default TodoList