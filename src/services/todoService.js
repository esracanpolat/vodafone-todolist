import axios from "axios";
import * as actionCreators from "../redux/actions/todo/todoActions";
import axiosInstance from "./axiosInstance";

export function getTodosApiRequest() {
    return async (dispatch) => {
        axiosInstance.get("/todos")
            .then((data) => {
                dispatch(actionCreators.getTodosApi(data.data))
            });
    };
}
export function postTodosApiRequest(todo) {
    return async (dispatch) => {
        axiosInstance.post("/todos", todo)
            .then((res) => {
                dispatch(actionCreators.addTodo(res))
            }).catch((err) => {
                dispatch(actionCreators.removeTodo(err))
            });
    };
}
export function updateTodosApiRequest(todo) {
    return async (dispatch) => {
        axiosInstance.put("/todos/" + todo.id, todo)
            .then((data) => {
                dispatch(actionCreators.filterTodo(data))
            }).catch((err) => {
                dispatch(actionCreators.removeTodo(err))
            });
    };
}
export function deleteTodoApiRequest(todo) {
    return async (dispatch) => {
        axiosInstance.delete("/todos/" + todo.id)
            .then((data) => {
                dispatch(actionCreators.removeTodo({ id: todo.id, data }))
            }).catch((err) => {
                dispatch(actionCreators.removeTodo(err))
            });
    };
}