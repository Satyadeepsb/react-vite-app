import React, { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>{expensiveCount}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        CLICK
      </button>
    </div>
  );
};
