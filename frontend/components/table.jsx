import React from 'react';
import RowContainer from './row_container';




function createRows(){
    const table = [];
    for (let i = 0; i < 10; i++) {
      table.push(<RowContainer key={i} id={i+1}/>);
    }
    return table;
}



const Table = ()=>{
    return (
      <table>

        <tbody>
          <tr>
            <th></th>
            <th>Stock</th>
            <th>Bond</th>
            <th>Cash</th>
            <th>Int.</th>
            <th>Equity</th>
          </tr>
          {
            createRows()
          }
        </tbody>
      </table>
    );
};


export default Table;
