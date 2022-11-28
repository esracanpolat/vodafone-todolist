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