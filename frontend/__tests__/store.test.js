
import configureStore from '../store/store';
jest.mock('redux');
describe('Store', ()=>{
    let createStore;

    it('exports a configureStore function', ()=>{
      expect(typeof configureStore).toEqual('function');
    });

    it('should create a store', ()=>{
      createStore = require('redux').createStore;
      configureStore();
      expect(createStore).toBeCalled();
    });
});
