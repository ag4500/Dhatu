import React, { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="inline-flex items-center border border-gray-300 rounded">
      <button
        onClick={decreaseCount}
        className="px-4 py-2 text-[#606060] hover:bg-gray-200 focus:outline-none"
      >
        -
      </button>
      <span className="px-4 py-2 border-l border-r border-gray-300 text-[#606060] font-semibold">
        {count}
      </span>
      <button
        onClick={increaseCount}
        className="px-4 py-2 text-[#606060] hover:bg-gray-200 focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;
