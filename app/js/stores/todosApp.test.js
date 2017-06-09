import todosApp from './todosApp';
import deepFreeze from 'deep-freeze';

test('undefined initial state returns emtpy array and \'SHOW_ALL\' filter', () => {

    
    const action = { type: 'any' }
    const afterState = {
    	todos: [],
    	visibilityFilter : 'SHOW_ALL'
    }

    deepFreeze(action);

    expect(
        todosApp(undefined, action)
    ).toEqual(afterState);

});
