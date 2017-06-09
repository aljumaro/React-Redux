import React, { Component } from 'react';
import { render } from 'react-dom';

import appStore from './stores/todoAppStore';
import FilterLink from './components/filterLink';

let externalId = 0;

const getVisibleTodos = (todos, filter) => {

	switch(filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
}

class App extends Component {
	render() {
		const {todos, visibilityFilter} = this.props;

		const visibleTodos = getVisibleTodos(todos, visibilityFilter);

		return (
			<div>
				<input ref={(node) => {
					this.input = node;
				}}/>
				<button onClick={ () => {
						appStore.dispatch({
							type: 'ADD_TODO',
							id: externalId++,
							text: this.input.value
						});
						this.input.value = '';
					}}>
				Add todo</button>
				<ul>
					{visibleTodos.map(t => 
							<li 
								key={t.id}
								onClick={ () => {
									appStore.dispatch({
										type: 'TOGGLE_TODO',
										id: t.id,
									});
								}}
								style={{
										textDecoration: t.completed ? 'line-through': 'none'
									}}
							>
								{t.text}
							</li>
						)
					}
				</ul>
				<p>
					Show: &nbsp;
					<FilterLink filter='SHOW_ALL' current={visibilityFilter}>All</FilterLink>&nbsp;
					<FilterLink filter='SHOW_ACTIVE' current={visibilityFilter}>Active</FilterLink>&nbsp;
					<FilterLink filter='SHOW_COMPLETED' current={visibilityFilter}>Completed</FilterLink>&nbsp;
				</p>
			</div>
		)
	}
}

const appRender = () => render(<App {...appStore.getState()}/>, document.getElementById('root'));

appStore.subscribe(appRender);

appRender();