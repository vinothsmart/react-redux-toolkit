import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch(actions.increment());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(actions.decrement());
  }, [dispatch]);

  const addBy = useCallback(() => {
    dispatch(actions.addBy(10));
  }, [dispatch]);

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
