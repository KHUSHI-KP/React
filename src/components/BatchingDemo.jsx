
import { useState } from "react";

function BatchingDemo() {
  const [count, setCount] = useState(0);

  function directUpdates() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  function functionalUpdates() {
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>Batching Demo</h2>

      <h3>{count}</h3>

      <button onClick={directUpdates}>
        Direct Updates x3
      </button>

      <button onClick={functionalUpdates}>
        Functional Updates x3
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default BatchingDemo;
