import { AppBar, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <AppBar position='relative'>
                <Toolbar>
                    <MenuItem>
                        <Typography variant='h6' href="/">
                            ToDo List
                        </Typography>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </div>
    )
}
