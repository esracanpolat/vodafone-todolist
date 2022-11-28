import { AppBar, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <AppBar position='relative'>
                <Toolbar>
                    {/* <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <Menu />
                    </IconButton> */}
                    <MenuItem>
                        <Typography variant='h6'>
                            ToDo List
                        </Typography>
                    </MenuItem>

                </Toolbar>
            </AppBar>
        </div>
    )
}
