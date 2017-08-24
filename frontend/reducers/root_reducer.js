import {combineReducers} from 'redux';
import AllocationReducer from './allocation_reducer';


const rootReducer = combineReducers({
  allocation: AllocationReducer
});


export default rootReducer;
