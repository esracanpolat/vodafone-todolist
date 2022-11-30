import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTodosApiRequest } from '../../services/todoService';
import { SnackBarMessage } from '../SnackBarMessage/SnackBarMessage';

export const CheckData = ({ todo }) => {
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch();

    function checked(e) {
        dispatch(updateTodosApiRequest({ id: todo.id, todo: todo.todo, isChecked: e.target.checked }));
        setShowMessage(true);
    }
    return (
        <>
            <SnackBarMessage showMessage={showMessage} setShowMessage={setShowMessage} />
            <div className='table-cell'>
                <div>
                    <Checkbox
                        checked={todo.isChecked}
                        onChange={(e) => checked(e)} />
                </div>
                <div>
                    <p className={todo.isChecked ? 'text-decation-line' : 'text-decation-none'} >{todo.todo}</p>
                </div>
            </div>
        </>
    )
}
