import { createContext, useState } from "react";
import "./App.css";

import { Counter } from "./components/Counter";
import { EmployeeForm } from "./components/EmployeeForm";
import { EmployeeTable } from "./components/EmployeeTable";
import Routing from "./components/Routing";

type CounterContextType = {
  count: number;
  onIncrementCounterContext: any | undefined;
  onDecrementCounterContext: any | undefined;
};

export const CounterContext = createContext<CounterContextType>(
  {} as CounterContextType
);

function App() {
  const [count, setCount] = useState(0);

  const onIncrementCounterContext = () => {
    console.log(`onIncrementCounterContext ${count}`);

    setCount(count + 1);
  };
  const onDecrementCounterContext = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <EmployeeForm />
      <EmployeeTable /> */}
      {/* <Parent /> */}
      {/* <CounterContext.Provider
        value={{ count, onIncrementCounterContext, onDecrementCounterContext }}
      >
        <Counter />
      </CounterContext.Provider> */}
      <Routing></Routing>
    </div>
  );
}

export default App;
