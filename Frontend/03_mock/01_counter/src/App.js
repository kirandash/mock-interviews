import { createContext, useContext, useState } from "react";

// Sol with context
const CountContext = createContext(null);

const Incrementer = () => {
  const setCount = useContext(CountContext);
  const onIncrement = () => setCount((c) => c + 1);

  return <button onClick={onIncrement}>Increment</button>;
};

const Decrementer = () => {
  const setCount = useContext(CountContext);
  const onDecrement = () => setCount((c) => c - 1);

  return <button onClick={onDecrement}>Decrement</button>;
};

const Form = () => {
  return (
    <div>
      <Incrementer />
      <Decrementer />
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={setCount}>
        <h2>Count: {count}</h2>
        <Form />
      </CountContext.Provider>
    </div>
  );
};

export default App;
