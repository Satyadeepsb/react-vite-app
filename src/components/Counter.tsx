import React, { useContext, useEffect, useState } from "react";
import { legacy_createStore as createStore } from "redux";
import { counter } from "../reducers/Counter";
import { CounterContext } from "../App";

const store = createStore(counter);

export const Counter = () => {
  // Using react Context
  const { count, onIncrementCounterContext, onDecrementCounterContext } =
    useContext(CounterContext);

  // Using Redux

  //   const [count, setCount] = useState(store.getState());
  //   const onIncrement = () => {
  //     store.dispatch({ type: "INCREMENT" });
  //     // setCount(store.getState());
  //   };
  //   const onDecrement = () => {
  //     store.dispatch({ type: "DECREMENT" });
  //     // setCount(store.getState());
  //   };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={onIncrementCounterContext}>+</button>
        <button onClick={onDecrementCounterContext}>-</button>
      </div>
    </div>
  );
};
