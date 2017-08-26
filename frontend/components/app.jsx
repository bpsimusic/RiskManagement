import React from 'react';
import Table from './table';
import DonutContainer from './donut_container';
import DollarFormContainer from './dollar_form_container';
import RecoContainer from './reco_container';

const App = ()=>(
  <div>
    <h1 className={"riskManagementHeader"}>Risk Management</h1>
    <div className={"riskProfile"}>
      <div className={"tableSection"}>
        <h2 className={"finances"}>Finances</h2>
        <div className={"tableContainer"}>
          <h2>Risk Level</h2>
          <Table />
        </div>
        <p className={"instructions"}>
          To see what your risk profile looks like, click on a row. Each number
          represents a percentage.
        </p>
      </div>
      <DonutContainer/>
    </div>
    <div className="divider"></div>
    <div className={"riskProfileTwo"}>
      <h1>Money Advice</h1>
      <div className={"dollarSection"}>
        <DollarFormContainer/>
        <RecoContainer/>
      </div>
    </div>
  </div>
);



export default App;
