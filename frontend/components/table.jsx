import React from 'react';
import RowContainer from './row_container';

function createRows(){
    const table = [];
    for (let i = 0; i < 10; i++) {
      table.push(<RowContainer key={i}/>);
    }
    return table;
}

const Table = ()=>{
    return (
      <table>
        <tbody>
          {
            createRows()
          }
        </tbody>
      </table>
    );
};


export default Table;
