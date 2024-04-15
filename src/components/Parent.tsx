import React, { useState } from "react";
import { Child } from "./Child";
import { Child1 } from "./Child1";

export const Parent = () => {
  const [number, setNumber] = useState(1);
  const callThisFromChildComponent = (data: any) => {
    console.log(`Data = ${data}`);
    setNumber(data);
  };
  return (
    <div>
      Parent Component
      <Child1 number={number} />
      <Child name="Baby" callback={callThisFromChildComponent} />
    </div>
  );
};
