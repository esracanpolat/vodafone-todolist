import { Snackbar } from '@mui/material'
import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoApiRequest, getTodosApiRequest, updateTodosApiRequest } from "../../services/todoService";
import '../../styles/TodoList/list.scss'
import { DataTable } from '../DataTable/Table';
export const ToDoList = () => {
    const dispatch = useDispatch();

    const todo = useSelector((state) => state.todos);
    const message = useSelector((state) => state.todos);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        dispatch(getTodosApiRequest())
    }, [])


    function deleteItem(todo) {
        dispatch(deleteTodoApiRequest(todo));
        setShowMessage(true);
    }

    function checked(res) {
        dispatch(updateTodosApiRequest({ id: res.data.id, todo: res.data.todo, isChecked: res.e.target.checked }));
        setShowMessage(true);
    }
    return (
        <div className='list-contanier'>
            <Snackbar
                open={showMessage}
                autoHideDuration={3000}
                onClose={() => setShowMessage(false)}
                message={message ? message.message : ''}
            />
            <DataTable dataSource={todo.todos} deleteItem={deleteItem} checked={checked} />
        </div>
    )
}
