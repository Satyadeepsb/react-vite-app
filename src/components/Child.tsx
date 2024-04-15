import React from "react";

export const Child = (props: any) => {
  const data = Math.floor(Math.random() * 6) + 1;
  return (
    <div>
      Child Component Baby Name = <b>{props.name}</b>
      <button onClick={() => props.callback(data)}>Click Me</button>
    </div>
  );
};
