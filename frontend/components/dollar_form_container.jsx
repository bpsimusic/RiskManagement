import {connect} from 'react-redux';
import DollarForm from './dollar_form';
import {updateDollars} from '../actions/dollar_actions';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateDollars: (dollars)=>dispatch(updateDollars(dollars))
});


export default connect(mapStateToProps, mapDispatchToProps)(DollarForm);
