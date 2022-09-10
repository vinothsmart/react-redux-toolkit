import { createStore } from "redux";

const reducerFn = (
  state = {
    counter: 10,
  },
  action
) => {
  // Synchronous Function
  //  We should not mutate the original state
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducerFn);
export default store;
