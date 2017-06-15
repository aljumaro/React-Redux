import React from 'react';
import { connect } from 'react-redux';

import appStore from '../stores/todoAppStore';
import { addTodo } from '../actions/actions';

let externalId = 0;

let AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<input ref={(node) => {
				input = node;
			}}/>
			<button onClick={ () => {
					dispatch(addTodo(input.value));
					input.value = '';
				}}>
			Add todo</button>
		</div>
	)
}

AddTodo = connect(
	null,
	null //Dispatch injected as a prop by default if you specify null as a second argument
)(AddTodo);

export default AddTodo