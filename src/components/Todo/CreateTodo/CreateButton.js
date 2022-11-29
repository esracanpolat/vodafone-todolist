import React from 'react'

export const CreateButton = ({ CreateTodoItem }) => {
    return (
        <>
            <button type="submit" className='create-button' onClick={() => CreateTodoItem()}>
                Add
            </button>
        </>
    )
}
