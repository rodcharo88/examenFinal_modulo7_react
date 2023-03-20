
import './tableComp.css';


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
            {filasData.map(val => <tr>{columnasData.map(col => <td> {col} </td>)}</tr>)}
        </table>
      )
};

export { TableComp };

