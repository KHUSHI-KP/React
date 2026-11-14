

import { useState } from "react";

function CompletionToggle() {
  const [completed, setCompleted] = useState(false);

  function toggleCompletion() {
    setCompleted(!completed);
  }

  return (
    <div>
      <h2>Completion Toggle</h2>

      <p>
        Status: {completed ? "Completed" : "Pending"}
      </p>

      <button onClick={toggleCompletion}>
        {completed ? "Mark Pending" : "Mark Completed"}
      </button>
    </div>
  );
}

export default CompletionToggle;
