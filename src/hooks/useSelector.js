import { useLayoutEffect, useState, useContext, useCallback } from 'react';
import { ReduxContext } from '../contexts';

const useSelector = (selector) => {
  const { store } = useContext(ReduxContext);
  const [state, setState] = useState(selector(store.getState()));
  const updateState = useCallback(() => {
    setState(selector(store.getState()));
  }, [selector, store]);

  useLayoutEffect(() => {
    store.subscribe(updateState);

    // return () => {
    //   store.unsubscribe(updateState);
    // };
  }, [store, updateState]);

  return state;
};

export default useSelector;
