import { Snackbar } from '@mui/material'
import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoApiRequest, getTodosApiRequest, updateTodosApiRequest } from "../../services/todoService";
import '../../styles/TodoList/list.scss'
import { DataTable } from '../DataTable/Table';
export const ToDoList = () => {
    const dispatch = useDispatch();

    const todo = useSelector((state) => state.todos);


    useEffect(() => {
        dispatch(getTodosApiRequest())
    }, [])



    return (
        <div className='list-contanier'>
            <DataTable dataSource={todo.todos} />
        </div>
    )
}
