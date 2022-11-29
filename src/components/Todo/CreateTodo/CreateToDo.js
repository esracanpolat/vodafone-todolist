import React, { useState } from 'react'
import { Grid, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/CreateTodo/CreateTodo.scss';
import { postTodosApiRequest } from '../../../services/todoService';
import { CreateInput } from './CreateInput';
import { CreateButton } from './CreateButton';


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
                    <CreateInput formValue={formValue} setFormValue={setFormValue} validateFormValue={validateFormValue} />
                </Grid>
                <Grid md={2} xs={2} className="create-button-grid">
                    <CreateButton CreateTodoItem={CreateTodoItem} />
                </Grid>
            </Grid>
        </div>
    </>
    )
}
