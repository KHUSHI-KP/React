
import { useState } from "react";

import initialTasks from "./data/initialTasks";

import Header from "./components/Header";
import StatsPanel from "./components/StatsPanel";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
 
  const [tasks, setTasks] = useState(initialTasks);

  // Search and filter states
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [category, setCategory] = useState("All");

  function addTask(newTask) {
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  }

  
  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }


  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      (status === "Completed" && task.completed) ||
      (status === "Pending" && !task.completed);

    const matchesPriority =
      priority === "All" ||
      task.priority === priority;

    const matchesCategory =
      category === "All" ||
      task.category === category;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority &&
      matchesCategory
    );
  });

  return (
    <>
      <Header appName="TaskFlow" userName="Khushi" />

      <main>
        <h2>My Dashboard</h2>

       
        <StatsPanel tasks={tasks} />

        
        <TaskForm onAddTask={addTask} />

       
        <TaskFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
          category={category}
          setCategory={setCategory}
        />
 
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
