import { createContext, useContext, useState } from "react";

// Sol with context and undo
const CounterWithUndoContext = createContext(null);

const Incrementer = () => {
  const { setPrevFns, setCount } = useContext(CounterWithUndoContext);
  const onIncrement = () => {
    setCount((c) => c + 1);
    setPrevFns((pFns) => [...pFns, () => setCount((c) => c - 1)]);
  };

  return <button onClick={onIncrement}>Increment</button>;
};

const Decrementer = () => {
  const { setPrevFns, setCount } = useContext(CounterWithUndoContext);
  const onDecrement = () => {
    setCount((c) => c - 1);
    setPrevFns((pFns) => [...pFns, () => setCount((c) => c + 1)]);
  };
  return <button onClick={onDecrement}>Decrement</button>;
};

const Undo = () => {
  const { prevFns } = useContext(CounterWithUndoContext);
  const undo = () => {
    if (prevFns.length === 0) return;
    const lastFn = prevFns.pop();
    lastFn();
  };
  return <button onClick={undo}>Undo</button>;
};

const Form = () => {
  return (
    <div>
      <Incrementer />
      <Decrementer />
      <Undo />
    </div>
  );
};

const CounterWithUndo = () => {
  const [count, setCount] = useState(0);
  const [prevFns, setPrevFns] = useState([]);

  return (
    <div>
      <CounterWithUndoContext.Provider value={{ prevFns, setPrevFns, setCount }}>
        <h2>Count: {count}</h2>
        <Form />
      </CounterWithUndoContext.Provider>
    </div>
  );
};

export default CounterWithUndo;
