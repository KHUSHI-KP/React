function TaskFilters({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  category,
  setCategory,
}) {
  return (
    <section className="task-filters">
      <h2>Search & Filters</h2>

     
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

   
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

  
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="All">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

     
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Learning">Learning</option>
      </select>
    </section>
  );
}

export default TaskFilters;