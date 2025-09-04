import React, { useState } from "react";

const CounterApps = () => {
  const [count, setcount] = useState(0);

  const handleAddButton = () => {
    setcount(count + 1);
  };

  const handleLessButton = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

    const handleRestButton = () => {
     setcount(0);
  };

  return (
    <div>
      <h1>Count Number: {count}</h1>

      <div>
        <button onClick={handleLessButton}>-</button>
        <button onClick={handleAddButton}>+</button>
      </div>
      <button onClick={handleRestButton}>Reset All</button>
    </div>
  );
};

export default CounterApps;
