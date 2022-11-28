import * as actionTypes from "./todoActionTypes";

export const todoAdd = (todo) => ({ type: actionTypes.TODO_ADD, payload: todo })
export const todoRemove = (todo) => ({ type: actionTypes.TODO_REMOVE, payload: todo })
export const todoFilter = (todo) => ({ type: actionTypes.TODO_FILTER, payload: todo })
//Apiden gelecek todoları bu action ile reducer'a göndereceğiz.
export const getTodosApi = (todos) => ({ type: actionTypes.GET_TODOS_API, payload: todos })