import { useEffect } from "react";
import './tableComp.css';
// import PropTypes from 'prop-types'
// import { TableProps } from './intefaces/TableProps.interface'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComp = ({filas, columnas, headers}) => {
    
    
    let filasData = [];
    let columnasData = [];
    
    for (let i = 0; i < filas; i++) {
        filasData.push('');
    }
    
    for (let j = 0; j < columnas; j++) {
        columnasData.push('');
    }
       
    
      return (
        <table>
            <tr>{headers.map(headers => <th>{headers}</th>)}</tr>
            {filasData.map(val => <tr>{columnasData.map(col => <th> {col} </th>)}</tr>)}
        </table>
      )
};

export { TableComp };

