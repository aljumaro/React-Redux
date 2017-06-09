import React, { Component } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';

import todosApp from './stores/todosApp';

const appStore = createStore(todosApp);

let externalId = 0;

class App extends Component {
	render() {
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
					{this.props.todos.map(t => 
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
			</div>
		)
	}
}

const appRender = () => render(<App todos={appStore.getState().todos}/>, document.getElementById('root'));

appStore.subscribe(appRender);

appRender();