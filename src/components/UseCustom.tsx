import React, { useDebugValue, useEffect, useState } from "react";

function useDisplayName() {
  const [displayName, setDisplayName] = useState<string>();

  useEffect(() => {
    setDisplayName("Satyadeep");
  }, []);

  useDebugValue(displayName ?? "loading...");
  return displayName;
}

export const UseCustom = () => {
  const displayName = useDisplayName();
  return <button className="btn btn-dark">{displayName}</button>;
};
