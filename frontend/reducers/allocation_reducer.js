import {merge} from 'lodash';

const _default = {values: [], risk_level: "N/A"};


const AllocationReducer = (state = _default, action)=>{
  Object.freeze(state);
  switch(action.type){
    default:
      return state;
  }
};


export default AllocationReducer;
