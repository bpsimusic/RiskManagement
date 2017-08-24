import {connect} from 'react-redux';
import Reco from './reco';
import {updateDollars} from '../actions/dollar_actions';


const mapStateToProps = ({dollar}) => ({
  dollar
});

const mapDispatchToProps = (dispatch) => ({
  updateDollars: (dollars)=>dispatch(updateDollars(dollars))
});


export default connect(mapStateToProps, mapDispatchToProps)(Reco);
