
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "Learning",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a task title");
      return;
    }

    const newTask = {
      id: Date.now(),
      ...formData,
      title: formData.title.trim(),
      completed: false,
    };

    onAddTask(newTask);

    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      category: "Learning",
    });
  }

  return (
    <section className="create-task">
      <h2>Create Task</h2>

      <form className="task-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Task Title</label>
    <input
      type="text"
      name="title"
      placeholder="Enter task title"
      value={formData.title}
      onChange={handleChange}
    />
  </div>

  <div className="form-group">
    <label>Description</label>
    <textarea
      name="description"
      placeholder="Enter task description"
      value={formData.description}
      onChange={handleChange}
    />
  </div>

  <div className="form-group">
    <label>Priority</label>
    <select name="priority" value={formData.priority} onChange={handleChange}>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  </div>

  <div className="form-group">
    <label>Category</label>
    <select name="category" value={formData.category} onChange={handleChange}>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
      <option value="Learning">Learning</option>
    </select>
  </div>

  <button type="submit">Add Task</button>
</form>
    </section>
  );
}

export default TaskForm;
