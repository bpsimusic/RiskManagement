import React from 'react';




class DollarForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {stock: 0, bond: 0, cash: 0, international: 0, equity: 0};
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  handleUpdate(field){
    let that = this;
    return (e)=>{
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateDollars({stock: this.state.stock,
      bond: this.state.bond,
      cash: this.state.cash,
      international: this.state.international,
      equity: this.state.equity});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="stock">Stock</label>
            <input id="stock" onChange={this.handleUpdate("bond")} value={this.state.stock} />
          </div>
          <div>
            <label htmlFor="bond">Bond</label>
            <input id="bond" onChange={this.handleUpdate("bond")} value={this.state.bond} />
          </div>
          <div>
            <label htmlFor="cash">Cash</label>
            <input id="cash" onChange={this.handleUpdate("cash")} value={this.state.cash} />
          </div>
          <div>
            <label htmlFor="int">Int.</label>
            <input id="int" onChange={this.handleUpdate("international")} value={this.state.international} />
          </div>
          <div>
            <label htmlFor="equity">Equity</label>
            <input id="equity" onChange={this.handleUpdate("equity")} value={this.state.equity} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default DollarForm;
