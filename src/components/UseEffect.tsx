import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("IN EFFECT");

    return () => {
      console.log("Destroy");
    };
  });

  return <div>{import.meta.env.VITE_API_URL}</div>;
};

export default UseEffect;
