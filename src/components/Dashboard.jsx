
import StatsPanel from "./StatsPanel";
import TaskForm from "./TaskForm";
import TaskFilters from "./TaskFilters";
import TaskList from "./TaskList";
import Panel from "./Panel";

function Dashboard() {
  return (
    <main>
      <h2>Dashboard</h2>

      <Panel>
        <StatsPanel />
      </Panel>

      <Panel>
        <TaskForm />
      </Panel>

      <TaskFilters />
      <TaskList />
    </main>
  );
}

export default Dashboard;
