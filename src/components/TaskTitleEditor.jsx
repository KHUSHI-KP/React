
import { useState } from "react";

function TaskTitleEditor() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h2>Task Title Editor</h2>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter task title"
      />

      <h3>Preview:</h3>

      <p>{title || "Untitled Task"}</p>
    </div>
  );
}

export default TaskTitleEditor;
