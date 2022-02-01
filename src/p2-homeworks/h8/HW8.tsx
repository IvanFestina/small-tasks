import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export type UserType = {
    _id: number
    name: string
    age: number
}

export const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)


    const finalPeople = people.map((p: UserType) => (
        <TableRow key={p._id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component="th" scope="row">{p.name}</TableCell>
            <TableCell align="right">{p.age}</TableCell>
        </TableRow>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
    const check_18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <hr/>
            homeworks 8
            <TableContainer style={ {marginTop: '15px', marginBottom: '15px'} } elevation={5} component={Paper}>
                <Table sx={{minWidth: 300}}>
                    <TableHead  style={{background: "lightblue", fontWeight: "bold"}}>
                        <TableRow>
                            <TableCell style={{fontWeight: "bold"}}>Name</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalPeople}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={ {display: "flex", justifyContent: "center"} }>
            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={check_18}>18+</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
