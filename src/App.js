import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch({ type: "INC" });
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch({ type: "DEC" });
  }, [dispatch]);

  const addBy = useCallback(() => {
    dispatch({ type: "ADD", payload: 10 });
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
