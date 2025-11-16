import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
