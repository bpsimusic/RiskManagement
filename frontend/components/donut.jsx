
import React from 'react';
import DonutChart from 'react-donut-chart';

class Donut extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {values} = this.props;
    const types = values.map(el=>Number(el));

    return (
      <div>
    <DonutChart
        data={[{

            label: `Stock`,
            value: types[0]
        },
        {
            label: 'Bond',
            value: types[1]
        },
        {
            label: 'Cash',
            value: types[2]
        },
        {
            label: 'International',
            value: types[3]
        },
        {
            label: 'Equity',
            value: types[4]
        }]} />
    </div>
    );
  }
}

export default Donut;
