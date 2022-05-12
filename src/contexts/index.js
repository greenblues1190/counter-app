import { createContext } from 'react';
import { createStore } from 'redux';

const initialState = {
  count: 0,
  diff: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...initialState };
    case 'UPDATE_DIFF':
      return { ...state, diff: action.payload.diff };
    default:
      return state;
  }
}

let store = createStore(counter);

const reduxStore = {
  store,
};

const ReduxContext = createContext(reduxStore);

export { reduxStore, ReduxContext };
