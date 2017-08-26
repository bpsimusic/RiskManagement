import React from 'react';

class Row extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }







  handleClick(e){
    const {values} = this.props;
    this.props.updateRiskLevel(this.props.id);
    this.props.updateAllocation([values[0], values[1], values[2], values[3], values[4]]);
  }


  toggle(){
    return this.props.active ? "selected" : "notSelected";
  }

  render(){
    return (
        <tr onClick={this.handleClick} className={this.toggle()}>
          <td className={"riskLevel"}>{this.props.id}</td>
          <td><input value={this.props.values[0]} readOnly/></td>
          <td><input value={this.props.values[1]} readOnly/></td>
          <td><input value={this.props.values[2]} readOnly/></td>
          <td><input value={this.props.values[3]} readOnly/></td>
          <td><input value={this.props.values[4]} readOnly/></td>
        </tr>

    );
  }
}

export default Row;
