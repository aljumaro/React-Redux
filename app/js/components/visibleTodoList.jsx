import React, {Component} from 'react';
import { connect } from 'react-redux';

import TodoList from './todoList';

import { toggleTodo } from '../actions/actions';

const getVisibleTodos = (todos, filter) => {

	switch(filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => dispatch(toggleTodo(id))
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList