import React from 'react';
import Table from './table';

let recos;

function addRecommendation(hash){
  recos = [];

  const types = Object.keys(hash);
  types.forEach(type=>{
    let value = hash[type];
    switch(type){
      case "stock":
        if (value < 100){
          recos.push([100, 0]);
        } else {
          recos.push([0, 100]);
        }
        return;
      case "bond":
        if (value < 100){
          recos.push([100, 0]);
        } else {
          recos.push([0, 100]);
        }
        return;
      case "cash":
        if (value < 100){
          recos.push([100, 0]);
        } else {
          recos.push([0, 100]);
        }
        return;
      case "international":
        if (value < 100){
          recos.push([100, 100]);
        } else {
          recos.push([0, 100]);
        }
        return;
      case "equity":
        if (value < 100){
          recos.push([100, 0]);
        } else {
          recos.push([0, 0]);
        }
        return;
      default:
        return;
    }
  });
  if (recos.length === 0){
    recos.push("Your finances look good!");
  }
}

const Reco = ({dollar})=>{
  addRecommendation(dollar);
  return (
      <div className="reco">
        <p>Recommendations</p>
          <table className="buySell">
            <tbody>
              <tr className="tableHead">
                <th style={{"border": "none"}}></th>
                <th>Buy</th>
                <th>Sell</th>
              </tr>
              <tr>
                <td className="label">Stock</td>
                <td>{recos[0][0]}</td>
                <td>{recos[0][1]}</td>
              </tr>
              <tr>
                <td className="label">Bond</td>
                <td>{recos[1][0]}</td>
                <td>{recos[1][1]}</td>
              </tr>
              <tr>
                <td className="label">Cash</td>
                <td>{recos[2][0]}</td>
                <td>{recos[2][1]}</td>
              </tr>
              <tr>
                <td className="label">Int.</td>
                <td>{recos[3][0]}</td>
                <td>{recos[3][1]}</td>
              </tr>
              <tr>
                <td>Equity</td>
                <td>{recos[4][0]}</td>
                <td>{recos[4][1]}</td>
              </tr>

            </tbody>
          </table>
      </div>
  );
};


export default Reco;
