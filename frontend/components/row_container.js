import {connect} from 'react-redux';
import Row from './row';
import {updateAllocation, updateRiskLevel} from '../actions/allocation_actions';


const mapStateToProps = ({allocation}, ownProps) => {
  const active = allocation.risk_level === ownProps.id ? true : false;
  return {
    active
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllocation: (data)=>dispatch(updateAllocation(data)),
    updateRiskLevel: (id)=>dispatch(updateRiskLevel(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Row);
