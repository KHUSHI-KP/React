
import { useState } from "react";

function generateTasks() {
  console.log("Generating 100 tasks");

  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `Task ${index + 1}`,
    completed: false,
  }));
}

function LazyInitializationDemo() {
  const [tasks, setTasks] = useState(generateTasks);

  return (
    <div>
      <h2>Lazy Initialization</h2>

      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default LazyInitializationDemo;
