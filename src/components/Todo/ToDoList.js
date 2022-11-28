import { List, ListItem, Avatar, ListItemText, IconButton, TableContainer, ListItemAvatar, Grid, ListItemIcon, TableCell, Table, TableBody, TableRow } from '@mui/material'
import { React, useEffect, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { getTodosApiRequest } from "../../services/todoService";
import { todoRemove, todoFilter } from "../../redux/actions/todo/todoActions";
import Checkbox from '@mui/material/Checkbox';
import '../../styles/TodoList/list.scss'
export const ToDoList = () => {

    const dispatch = useDispatch();
    // Selects the state value from the store.
    const todo = useSelector((state) => state.todos);

    // Dispatches action to add the data
    useEffect(() => {
        dispatch(getTodosApiRequest())
    }, [])


    function deleteItem(todo) {
        dispatch(todoRemove(todo))
    }

    function checked(e) {
        dispatch(todoFilter({ Id: e.data.Id, todo: e.data.todo, isChecked: e.e.target.checked }));

    }
    return (<>
        <TableContainer>
            <Table >
                <TableBody>
                    {todo.todos !== undefined && todo.todos.map((data, index) =>
                    (<TableRow key={index}>
                        <TableCell>
                            <div className='table-cell'>
                                <div>
                                    <Checkbox
                                        checked={data.isChecked}
                                        onChange={(e) => checked({ e, data })} />
                                </div>
                                <div>
                                    <p className={data.isChecked ? 'text-decation-line' : 'text-decation-none'} >{data.todo}</p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='table-cell-handle'>
                                <IconButton aria-label="delete" onClick={() => deleteItem(data)}>
                                    <DeleteIcon className='delete-button' />
                                </IconButton>
                            </div>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )
}
