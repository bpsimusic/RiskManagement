import {merge} from 'lodash';

const _default = {values: [20,20,20,20,20], risk_level: 1};


const AllocationReducer = (state = _default, action)=>{
  Object.freeze(state);
  switch(action.type){
    default:
      return state;
  }
};


export default AllocationReducer;
