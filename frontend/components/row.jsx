import React from 'react';

class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {stock: 0, bond: 0, cash: 0, international: 0, equity: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({stock: e.target.value});
  }
  render(){
    return (
      <tr>
        <td><input onChange={this.handleSubmit} value={this.state.stock} /></td>
        <td><input onChange={this.handleSubmit} value={this.state.bond} /></td>
        <td><input onChange={this.handleSubmit} value={this.state.cash} /></td>
        <td><input onChange={this.handleSubmit} value={this.state.international} /></td>
        <td><input onChange={this.handleSubmit} value={this.state.equity} /></td>
      </tr>
    );
  }
}

export default Row;
