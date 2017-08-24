import {merge} from 'lodash';
import {UPDATE_ALLOCATION} from '../actions/allocation_actions';
const _default = {values: [20,20,20,20,20], risk_level: 1};


const AllocationReducer = (state = _default, action)=>{
  Object.freeze(state);

  switch(action.type){
    case UPDATE_ALLOCATION:
      const newState = merge({}, state, {values: action.values});
      return newState;
    default:
      return state;
  }
};


export default AllocationReducer;
