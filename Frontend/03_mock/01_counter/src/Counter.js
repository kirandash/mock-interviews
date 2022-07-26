import { useState } from "react";

// Sol with Prop drilling
const Incrementer = ({ onClick }) => {
  return <button onClick={onClick}>Increment</button>;
};

const Decrementer = ({ onClick }) => {
  return <button onClick={onClick}>Decrement</button>;
};

const Form = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <Incrementer onClick={onIncrement} />
      <Decrementer onClick={onDecrement} />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Form onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

export default Counter;
