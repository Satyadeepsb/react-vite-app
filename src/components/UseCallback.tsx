import React, { useCallback, useState } from "react";

export const UseCallback = () => {
  const [count, setCount] = useState(60);
  const showCount = useCallback(() => {
    alert(`Count ${count}`);
  }, [count]);

  return (
    <div>
      <SomeChild handler={showCount} />
    </div>
  );
};

const SomeChild = (props: any) => {
  return <>{props.handler()}</>;
};
