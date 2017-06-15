
let externalId = 0;
const addTodo = text => {
	return {
		type: 'ADD_TODO',
		id: externalId++,
		text,
	}
}

export { addTodo }

const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER', 
		filter
	}
}

export { setVisibilityFilter }

const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id,
	}
}

export { toggleTodo }