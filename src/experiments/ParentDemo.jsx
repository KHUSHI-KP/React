import { useState } from "react";
import ChildDemo from "./ChildDemo";

function ParentDemo() {
  const [count, setCount] = useState(0);

  const student = {
    name: "Khushi",
    age: 21,
  };

  console.log("ParentDemo rendered");

  return (
    <div>
      <h2>Parent Demo</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <ChildDemo student={student} />
    </div>
  );
}

export default ParentDemo;