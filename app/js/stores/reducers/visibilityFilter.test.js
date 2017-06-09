import visibilityFilter from './visibilityFilter';
import deepFreeze from 'deep-freeze';

test('non covered action defaults to before state', () => {

    const state = {}
    const action = { type: 'any' }

    deepFreeze(action);
    deepFreeze(state);

    expect(
        visibilityFilter(state, action)
    ).toEqual(state);

});

test('undefined state defaults to \'SHOW_ALL\'', () => {

    const afterState = 'SHOW_ALL'
    const action = { type: 'any' }

    deepFreeze(action);

    expect(
        visibilityFilter(undefined, action)
    ).toEqual(afterState);

});

test('SET_VISIBILITY_FILTER action changes filter to action.filter', () => {

	const beforeState = 'ACTIVE'
    const action = { type: 'SET_VISIBILITY_FILTER', filter: 'COMPLETED' }
    const afterState = 'COMPLETED'

    deepFreeze(beforeState)
    deepFreeze(action);

    expect(
        visibilityFilter(beforeState, action)
    ).toEqual(afterState);

});