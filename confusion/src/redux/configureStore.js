import { createStore } from 'redux';
import { Reducer , initialState } from './reducer';

export const ConfigureStore = () => {
  const state = createStore(
    Reducer,
    initialState
  );
  return state;
};