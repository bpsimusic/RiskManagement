import React from 'react';

class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {stock: 0, bond: 0, cash: 0, international: 0, equity: 0};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidUpdate(){
    this.calculateTotal();
  }

  calculateTotal(){
    const values = [this.state.stock,
                this.state.bond,
                this.state.cash,
                this.state.international,
                this.state.equity];
    const sum = values.reduce((a,b)=>Number(a)+Number(b));
    if (sum === 100){
      this.props.updateAllocation({values, risk_level: this.props.id});

    }
  }

  handleClick(e){

    this.calculateTotal();
  }

  handleUpdate(field){
    let that = this;
    return (e)=>{
      this.setState({[field]: e.target.value});
    };
  }

  toggle(){
    if (this.props.active){
      return (
        <td>
          "Error"
        </td>
      );
    }
  }

  render(){
    return (
        <tr onClick={this.handleClick} >
          <td>{this.props.id}</td>
          <td><input onChange={this.handleUpdate("stock")} value={this.state.stock} /></td>
          <td><input onChange={this.handleUpdate("bond")} value={this.state.bond} /></td>
          <td><input onChange={this.handleUpdate("cash")} value={this.state.cash} /></td>
          <td><input onChange={this.handleUpdate("international")} value={this.state.international} /></td>
          <td><input onChange={this.handleUpdate("equity")} value={this.state.equity} /></td>
        </tr>

    );
  }
}

export default Row;
