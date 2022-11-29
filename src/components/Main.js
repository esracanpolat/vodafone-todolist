import React from 'react'
import { ToDoList } from './Todo/ToDoList'
import "../styles/Main/main.scss"
import { CreateToDo } from './Todo/CreateTodo/CreateToDo'
export const Main = () => {
    return (
        <div className='main-contanier'>
            <h1 className='main-title'>ToDo List</h1>
            <div className="main-align-contanier">
                <CreateToDo />
            </div>
            <div className="main-align-contanier">
                <ToDoList />
            </div>
        </div>
    )
}
