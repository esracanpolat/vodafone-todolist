import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FormControl, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd } from '../../redux/actions/todo/todoActions';
import '../../styles/CreateTodo/CreateTodo.scss';
import { postTodosApiRequest } from '../../services/todoService';


export const CreateToDo = () => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState('');
    const [validateFormValue, setValidateFormValue] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const message = useSelector((state) => state.todos);


    function CreateTodoItem() {
        if (formValue) {
            dispatch(postTodosApiRequest({ todo: formValue, isChecked: false }));
            setFormValue('');
            setShowMessage(true)
            setValidateFormValue(false)

        }
        else {
            setValidateFormValue(true)
        }
    }

    return (<>
        <Snackbar
            open={showMessage}
            autoHideDuration={3000}
            onClose={() => setShowMessage(false)}
            message={message ? message.message : ''}
        />
        <div className='createTodo-contanier'>
            <Grid container paddingY={5} columns={12}>
                <Grid md={10} xs={10} className="create-input-grid">
                    <div>
                        <input placeholder='New Task' className="create-input" maxLength={200} value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                    </div>
                    <div className={validateFormValue ? 'display-block' : "display-none"}>
                        <small className='create-input-validate'>Plaese entry world </small>
                    </div>
                </Grid>
                <Grid md={2} xs={2} className="create-button-grid">
                    <button type="submit" className='create-button' onClick={() => CreateTodoItem()}>
                        Add
                    </button>
                </Grid>
            </Grid>
        </div>
    </>
    )
}
