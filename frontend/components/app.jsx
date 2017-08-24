import React from 'react';
import Table from './table';
import DonutContainer from './donut_container';
import DollarFormContainer from './dollar_form_container';
import RecoContainer from './reco_container';

const App = ()=>(
  <div>
    <h1>Risk Management</h1>
    <div className={"riskProfile"}>
      <div className={"tableSection"}>
        <h2 className={"finances"}>Finances</h2>
        <div className={"tableContainer"}>
          <h2 className={"riskLevel"}>Risk Level</h2>
          <Table />
        </div>
      </div>
      <DonutContainer/>
    </div>
    <div className={"dollarForm"}>
      <DollarFormContainer/>
      <RecoContainer/>
    </div>
  </div>
);



export default App;
