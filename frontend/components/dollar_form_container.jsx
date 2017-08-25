import {connect} from 'react-redux';
import DollarForm from './dollar_form';
import {updateDollar} from '../actions/dollar_actions';


// const mapStateToProps = (state) => ({
//
// });

const mapDispatchToProps = (dispatch) => ({
  updateDollar: (dollars)=>dispatch(updateDollar(dollars))
});


export default connect(null, mapDispatchToProps)(DollarForm);
