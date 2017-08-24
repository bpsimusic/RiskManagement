import {merge} from 'lodash';
import {UPDATE_ALLOCATION, RISK_LEVEL} from '../actions/allocation_actions';
const _default = {values: [20,20,20,20,20], risk_level: ""};


const AllocationReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState;
  switch(action.type){
    case UPDATE_ALLOCATION:
      newState = merge({}, state, {values: action.values});
      return newState;
    case RISK_LEVEL:
      newState = merge({}, state, {risk_level: action.risk_level});
      return newState;
    default:
      return state;
  }
};


export default AllocationReducer;
