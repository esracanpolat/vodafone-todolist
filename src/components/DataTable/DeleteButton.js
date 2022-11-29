import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { SnackBarMessage } from '../SnackBarMessage/SnackBarMessage';
import { deleteTodoApiRequest } from '../../services/todoService';
export default function DeleteButton({ todo }) {

    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch();

    function deleteItem() {
        dispatch(deleteTodoApiRequest(todo));
        setShowMessage(true);
    }
    return (
        <>
            <SnackBarMessage showMessage={showMessage} />
            <div className='table-cell-handle'>
                <IconButton aria-label="delete" onClick={() => deleteItem()}>
                    <DeleteIcon className='delete-button' />
                </IconButton>
            </div>
        </>
    )
}
