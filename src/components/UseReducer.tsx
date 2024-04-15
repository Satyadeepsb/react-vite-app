import React, { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "decrement":
      return state - 1;
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <p>Count: {state}</p>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </>
  );
};
