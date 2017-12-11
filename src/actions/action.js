import * as types from '../constans/ActionTypes'

export const AddCount = (count) => ({
    type: types.ADD_COUNT,
    count: count
});

export const AddTodo = (text) => {
    return{
        type: types.ADD_TODO,
        text: text
    }
};

export const CompleteTodo = id => ({
    type: types.COMPLETE_TODO, id
});

export const DeleteTodo = id => ({
    type: types.DELETE_TODO, id
});