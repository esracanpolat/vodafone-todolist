import { Snackbar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export const SnackBarMessage = ({ showMessage }) => {
    const message = useSelector((state) => state.todos);
    return (
        <div>
            <Snackbar
                open={showMessage}
                autoHideDuration={2000}
                message={message ? message.message : ''}
            />
        </div>
    )
}
