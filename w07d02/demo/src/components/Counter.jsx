import { useState } from 'react';

// let count = 0;

const Counter = () => {
  // const arr = useState(0);
  // const getter = arr[0];
  // const setter = arr[1];

  const [count, setCount] = useState(0);

  const increment = () => {
    // state should be read only
    // count++; // this is BAD
    setCount(count + 1);

    console.log(count);
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count: { count }</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
