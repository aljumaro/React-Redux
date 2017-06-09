import { createStore } from 'redux';

import todosApp from './reducers/todosApp';

const appStore = createStore(todosApp);

export default appStore