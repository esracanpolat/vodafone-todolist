import * as actionTypes from "./todoActionTypes";

export const addTodo = (todo) => ({ type: actionTypes.ADD_TODO, payload: todo })
export const removeTodo = (todo) => ({ type: actionTypes.REMOVE_TODO, payload: todo })
export const filterTodo = (todo) => ({ type: actionTypes.FILTER_TODO, payload: todo })

export const getTodosApi = (todos) => ({ type: actionTypes.GET_TODOS_API, payload: todos })

