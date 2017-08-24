import AllocationReducer from '../reducers/allocation_reducer';
import RootReducer from '../reducers/root_reducer';
import {createStore} from 'redux';

describe('Reducers', ()=>{

  describe('AllocationReducer', ()=>{
    it('exports a function', ()=>{
      expect(typeof AllocationReducer).toEqual('function');
    });

    it('should initialize with a specific object', ()=>{
      expect(AllocationReducer(undefined, {})).toEqual({values: [20,20,20,20,20], risk_level: 1});
    });

    it('should return the previous state if no actions match', ()=>{
      const prevState = {values: [1], risk_level: 2};
      const action = {type: "dummy"};
      expect(AllocationReducer(prevState, action)).toEqual(prevState);
    });
  });


  describe('RootReducer', ()=>{
    let fakeStore;

    beforeAll(()=>{
      fakeStore = createStore(RootReducer);
    });

    it('exports a function', ()=>{
      expect(typeof RootReducer).toEqual('function');
    });

    // it(`updates allocation when AllocationReducer
    // is hit with specific action`, ()=>{
    //   expect(fakeStore.getState().allocation)
    //   .toEqual(AllocationReducer(undefined, {}));
    // });
  });
});
