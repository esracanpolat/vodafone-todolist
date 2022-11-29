import { IconButton, TableContainer, Table, TableRow, TableCell, Checkbox, TableBody } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/DataTable/dataTable.scss'
import DeleteButton from './DeleteButton';
import { CheckData } from './CheckData';

export const DataTable = ({ dataSource }) => {

    return (
        <div className='table-border-radius'>
            <TableContainer>
                <Table>
                    <TableBody>
                        {dataSource !== undefined && dataSource.map((data, index) =>
                        (<TableRow key={index}>
                            <TableCell>
                                <CheckData todo={data} />
                            </TableCell>
                            <TableCell>
                                <DeleteButton todo={data} />
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
