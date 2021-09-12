import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h2 data-test="title-count" value={count}>
        {' '}
        The count is: {count}{' '}
      </h2>
      <button data-test="increment-btn" onClick={increment}>
        +
      </button>
      <button data-test="decrement-btn" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
