import { useState } from 'react';

export default function TaskForm({ onTaskAdded }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName) return;

    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskName, description })
    });

    setTaskName('');
    setDescription('');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
        style={{ marginRight: '1rem' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}