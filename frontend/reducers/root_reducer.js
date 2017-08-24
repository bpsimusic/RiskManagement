import {combineReducers} from 'redux';
import AllocationReducer from './allocation_reducer';
import DollarReducer from './dollar_reducer';


const rootReducer = combineReducers({
  allocation: AllocationReducer,
  dollar: DollarReducer
});


export default rootReducer;
