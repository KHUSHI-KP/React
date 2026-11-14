import PriorityBadge from "./PriorityBadge";

function TaskCard({ task, onDeleteTask, onToggleTask }) {
  return (
    <article className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <PriorityBadge priority={task.priority} />

      <p>Category: {task.category}</p>

      <p>Status: {task.completed ? "Completed" : "Pending"}</p>

      <button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Mark Pending" : "Mark Completed"}
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </article>
  );
}

export default TaskCard;