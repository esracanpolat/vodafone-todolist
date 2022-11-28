import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FormControl, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../../redux/actions/todo/todoActions';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/CreateTodo/CreateTodo.scss';


export const CreateToDo = () => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState();
    const [warningFormValue, setWarningFormValue] = useState(false);
    console.log(warningFormValue, "formValue", formValue);
    function CreateTodoItem() {
        dispatch(todoAdd({ Id: uuidv4(), todo: formValue }));
        setFormValue();
        setWarningFormValue(true)
        setTimeout(() => {
            setWarningFormValue(false)
        }, 2000);
    }

    return (
        <div className='CreateTodo-Contanier'>
            <Snackbar open={warningFormValue}
                // autoHideDuration={200}
                onClose={() => setFormValue(false)}
                message="Added Task Success" />
            <Grid container paddingY={5} columns={12}>
                <Grid md={10} xs={10} className="create-input-grid">
                    <input placeholder='New Task' className="create-input" maxLength={200} helperText={warningFormValue === true && "Please enter your task"} onBlur={(e) => setFormValue(e.target.value)} />
                </Grid>
                <Grid md={2} xs={2} className="create-button-grid">
                    <button type="submit" className='create-button' onClick={() => CreateTodoItem()}>
                        Add
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}
