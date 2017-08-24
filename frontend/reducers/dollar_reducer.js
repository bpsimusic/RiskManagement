import {merge} from 'lodash';
import {UPDATE_DOLLAR} from '../actions/dollar_actions';
const _default = {stock: 0, bond: 0, cash: 0, international: 0, equity: 0};


const DollarReducer = (state = _default, action)=>{
  Object.freeze(state);

  switch(action.type){
    case UPDATE_DOLLAR:
      const newState = merge({}, state, action.dollars);
      return newState;
    default:
      return state;
  }
};


export default DollarReducer;
