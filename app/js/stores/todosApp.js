import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';

const TodosApp = combineReducers({
    todos,
    visibilityFilter
})

export default TodosApp
