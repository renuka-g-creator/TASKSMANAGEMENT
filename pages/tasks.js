import { useEffect, useState } from 'react';
import TaskForm from '../components/TasksForm.js';
import TaskList from '../components/TasksList.js';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tasks Management System</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      {loading ? <p>Loading...</p> : <TaskList tasks={tasks} refreshTasks={fetchTasks} />}
    </div>
  );
}