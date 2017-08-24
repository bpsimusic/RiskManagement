import {connect} from 'react-redux';
import Row from './row';
import {updateAllocation} from '../actions/allocation_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    updateAllocation: (data)=>dispatch(updateAllocation(data))
  };
};


export default connect(null, mapDispatchToProps)(Row);
