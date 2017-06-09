import todos from './todos';
import deepFreeze from 'deep-freeze';

const ADD_TODO_ACTION = {
    type: "ADD_TODO",
    id: 0,
    text: 'Learn REDUX'
};

const ADD_TODO_AFTER_STATE = [{
    id: 0,
    text: 'Learn REDUX',
    completed: false
}];

const NON_EMPTY_BEFORE_STATE = [{
    id: 0,
    text: 'Learn REDUX',
    completed: false
}, {
    id: 1,
    text: 'other todo',
    completed: false
}];

test('undefined state before initializes to empty array', () => {

    expect(
        todos(undefined, ADD_TODO_ACTION)
    ).toEqual(ADD_TODO_AFTER_STATE);

});

test('non covered action defaults to before state', () => {

    const action = {
        type: 'any'
    }

    expect(
        todos(NON_EMPTY_BEFORE_STATE, action)
    ).toEqual(NON_EMPTY_BEFORE_STATE);

});

test('todo was added to state', () => {

    const stateBefore = [];

    deepFreeze(stateBefore);
    deepFreeze(ADD_TODO_ACTION);

    expect(
        todos(stateBefore, ADD_TODO_ACTION)
    ).toEqual(ADD_TODO_AFTER_STATE);

});

test('todo state was toggled', () => {

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }

    const afterState = [{
        id: 0,
        text: 'Learn REDUX',
        completed: false
    }, {
        id: 1,
        text: 'other todo',
        completed: true
    }]

    deepFreeze(NON_EMPTY_BEFORE_STATE);
    deepFreeze(action);

    expect(
        todos(NON_EMPTY_BEFORE_STATE, action)
    ).toEqual(afterState);

});
