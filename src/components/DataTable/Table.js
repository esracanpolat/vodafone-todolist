import { IconButton, TableContainer, Table, TableRow, TableCell, Checkbox, TableBody } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/DataTable/dataTable.scss'

export const DataTable = ({ dataSource, deleteItem, checked }) => {
    return (
        <div className='table-border-radius'>
            <TableContainer>
                <Table>
                    <TableBody>
                        {dataSource !== undefined && dataSource.map((data, index) =>
                        (<TableRow key={index}>
                            <TableCell>
                                <div className='table-cell'>
                                    <div>
                                        <Checkbox
                                            checked={data.isChecked}
                                            onChange={(e) => checked({ e, data })} />
                                    </div>
                                    <div>
                                        <p className={data.isChecked ? 'text-decation-line' : 'text-decation-none'} >{data.todo}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className='table-cell-handle'>
                                    <IconButton aria-label="delete" onClick={() => deleteItem(data)}>
                                        <DeleteIcon className='delete-button' />
                                    </IconButton>
                                </div>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
