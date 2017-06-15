import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import appStore from './stores/todoAppStore';
import VisibleTodoList from './components/visibleTodoList';
import AddTodo from './components/addTodo';
import Footer from './components/footer';

const App = () => 
	<div>
		<AddTodo />
		<VisibleTodoList/>
		<Footer/>
	</div>
	

render(
	<Provider store={appStore}>
		<App />
	</Provider>
	, document.getElementById('root'));