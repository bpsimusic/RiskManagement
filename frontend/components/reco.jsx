import React from 'react';


let recos;

function addRecommendation(hash){
  recos = [];

  const types = Object.keys(hash);
  types.forEach(type=>{
    let value = hash[type];
    switch(type){
      case "stock":
        if (value < 100){
          recos.push("You need to invest more stocks!");
        }
        return;
      case "bond":
        if (value < 100){
          recos.push("You need to sell more bonds!");
        }
        return;
      case "cash":
        if (value < 100){
          recos.push("You need to save more cash!");
        }
        return;
      case "international":
        if (value < 100){
          recos.push("You need to travel!");
        }
        return;
      case "equity":
        if (value < 100){
          recos.push("You need to invest in more equity!");
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
        <ul>
          {recos.map((el, idx)=>{
            return (<li key={idx}>{el}</li>);
          })}
        </ul>
      </div>
  );
};


export default Reco;
