import React from 'react';
import Row from './row';

function createRows(){
    const table = [];
    for (let i = 0; i < 10; i++) {
      table.push(<Row key={i}/>);
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
