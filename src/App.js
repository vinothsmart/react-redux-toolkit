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

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
