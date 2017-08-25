import React from 'react';

class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {stock: 0, bond: 0, cash: 0, international: 0, equity: 0, error: true};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // componentWillMount(){
  //   this.props.updateRiskLevel(this.props.id);
  // }

  calculateTotal(){

    const values = [this.state.stock,
                this.state.bond,
                this.state.cash,
                this.state.international,
                this.state.equity];
    const sum = values.reduce((a,b)=>Number(a)+Number(b));

    if (sum === 100){
      this.props.updateAllocation({values});
      this.setState({error: false});
    } else {
      this.setState({error: true});
    }
  }

  error(){
    if (this.state.error && this.props.active){
      return (<td className={"errorMessage"}>
        Total must be 100
      </td>);
    } else {
      return (
        <td className={"errorMessage"}></td>
      );
    }
  }

  handleClick(e){
    this.props.updateRiskLevel(this.props.id);
    this.calculateTotal();
  }

  handleUpdate(field){
    let that = this;
    return (e)=>{
      this.setState({[field]: e.target.value}, this.calculateTotal);
    };
  }

  toggle(){
    return this.props.active ? "selected" : "notSelected";
  }

  render(){
    return (
        <tr onClick={this.handleClick} className={this.toggle()}>
          <td className={"riskLevel"}>{this.props.id}</td>
          <td><input onChange={this.handleUpdate("stock")} value={this.state.stock} /></td>
          <td><input onChange={this.handleUpdate("bond")} value={this.state.bond} /></td>
          <td><input onChange={this.handleUpdate("cash")} value={this.state.cash} /></td>
          <td><input onChange={this.handleUpdate("international")} value={this.state.international} /></td>
          <td><input onChange={this.handleUpdate("equity")} value={this.state.equity} /></td>
          {this.error()}
        </tr>

    );
  }
}

export default Row;
