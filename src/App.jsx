import './App.css';

import ButtonGroup from './ButtonGroup';
import ShowCount from './ShowCount';
import InputRange from './InputRange';
import useSelector from './hooks/useSelector';
import useDispatch from './hooks/useDispatch';

function App() {
  const { count, diff } = useSelector((state) => ({
    count: state.count,
    diff: state.diff,
  }));
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const onReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleDiff = ({ target }) => {
    dispatch({
      type: 'UPDATE_DIFF',
      payload: { diff: target.valueAsNumber },
    });
  };

  return (
    <div className="App">
      <main className="App-main">
        <ShowCount count={count} diff={diff} />
        <InputRange handleDiff={handleDiff} diff={diff} />
        <ButtonGroup
          onDecrement={onDecrement}
          onReset={onReset}
          onIncrement={onIncrement}
        />
      </main>
    </div>
  );
}

export default App;
