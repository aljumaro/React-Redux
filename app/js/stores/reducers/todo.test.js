import todo from './todo';
import deepFreeze from 'deep-freeze';

test('non covered action defaults to before state', () => {

    const state = {}
    const action = { type: 'any' }

    deepFreeze(action);
    deepFreeze(todo);

    expect(
        todo(state, action)
    ).toEqual(state);

});
