import { Box, Grid, Skeleton } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { CreateToDo } from './Todo/CreateToDo'
import { ToDoList } from './Todo/ToDoList'
import "../styles/Main/main.scss"
export const Main = () => {
    return (
        <div className='main-contanier'>
            <h1 className='main-title'>ToDo List</h1>
            <Grid container padding={5} columns={16}>
                <Grid xs={16} className="main-align-contanier">
                    <CreateToDo />
                </Grid>
                <Grid xs={16} className="main-align-contanier">
                    <ToDoList />
                </Grid>
            </Grid>
        </div>
    )
}
