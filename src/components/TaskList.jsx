import TaskCard from "./TaskCard";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <section className="task-list">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No matching tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))
      )}
    </section>
  );
}

export default TaskList;