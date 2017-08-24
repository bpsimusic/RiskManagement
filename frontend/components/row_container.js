import {connect} from 'react-redux';
import Row from './row';
import {updateAllocation} from '../actions/allocation_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    updateAllocation: (values)=>dispatch(updateAllocation(values))
  };
};


export default connect(null, mapDispatchToProps)(Row);
