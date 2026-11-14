import StatCard from "./StatCard";

function StatsPanel({ tasks }) {
    
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter( (task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks === 0 ? 0  : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="stats-panel">
      <StatCard
        label="Total Tasks"
        value={totalTasks}
        description="All tasks"
      />

      <StatCard
        label="Completed"
        value={completedTasks}
        description="Finished tasks"
      />

      <StatCard
        label="Pending"
        value={pendingTasks}
        description="Tasks remaining"
      />

      <StatCard
        label="Completion"
        value={`${completionPercentage}%`}
        description="Overall progress"
      />
    </section>
  );
}

export default StatsPanel;