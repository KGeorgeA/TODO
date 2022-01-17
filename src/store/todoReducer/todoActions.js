import * as types from "../../constants/ActionTypes"

export const addTodo = (value) => ({
    type: types.ADD_TODO,
    id: Math.random() * 1000,
    value: value,
});

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    id: id,
});

export const deleteAllCompleted = () => ({
    type: types.DELETE_ALL_COMPLETED
});

export const toggleCompleted = (id) => ({
    type: types.TOGGLE_COMPLETED,
    id: id,
});

export const toggleAllCompleted = () => ({
    type: types.TOGGLE_ALL_COMPLETED,
});