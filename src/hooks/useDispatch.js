import { useContext, useCallback } from 'react';
import { ReduxContext } from '../contexts';

const useDispatch = () => {
  const { store } = useContext(ReduxContext);
  const dispatch = useCallback(
    ({ type, payload = null }) => {
      store.dispatch({
        type,
        payload,
      });
    },
    [store],
  );

  return dispatch;
};

export default useDispatch;
