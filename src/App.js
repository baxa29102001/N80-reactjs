import React, { Component } from "react";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";

function App() {
  const { counterObject, loginObject } = useSelector((state) => state);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increseByFive = () => {
    dispatch(counterActions.increase(5));
  };
  return (
    <div>
      <h2>Counter</h2>
      <h3>{counterObject.counter}</h3>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increseByFive}>Incrment 5</button>
    </div>
  );
}

export default App;
