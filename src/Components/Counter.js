import React, { useState } from "react";
import "./Item/Item.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <span className="positive" onClick={handleDecrement}>
        -
      </span>
      <span className="count">{count}</span>
      <span className="negative" onClick={handleIncrement}>
        +
      </span>
    </div>
  );
};

export default Counter;
