import React from 'react'

export const CreateInput = ({ formValue, setFormValue, validateFormValue }) => {
    return (
        <>
            <div>
                <input placeholder='New Task' className="create-input" maxLength={200} value={formValue} onChange={(e) => setFormValue(e.target.value)} />
            </div>
            <div className={validateFormValue ? 'display-block' : "display-none"}>
                <small className='create-input-validate'>this field cannot be empty </small>
            </div>
        </>
    )
}
