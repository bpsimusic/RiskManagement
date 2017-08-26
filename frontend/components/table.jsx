import React from 'react';
import RowContainer from './row_container';




function createRows(){
    const table = [];
    let values = [[20, 10, 20, 30, 20],
                  [10, 10, 40, 30, 10],
                  [20, 0, 20, 60, 0],
                  [80, 0, 20, 0, 0],
                  [20, 10, 35, 15, 20],
                  [20, 40, 20, 0, 20],
                  [0, 0, 0, 100, 0],
                  [5, 5, 15, 50, 25],
                  [40, 10, 40, 5, 5],
                  [80, 5, 5, 5, 5],
                  ];
    for (let i = 0; i < 10; i++) {
      table.push(<RowContainer key={i} id={i+1} values={values[i]}/>);
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
