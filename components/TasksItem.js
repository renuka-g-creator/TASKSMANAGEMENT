import { useState } from 'react';

export default function TaskItem({ task, refreshTasks }) {
  const [editing, setEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.taskname);
  const [description, setDescription] = useState(task.description);

  const handleDelete = async () => {
    await fetch(`/api/tasks/${task.taskid}`, { method: 'DELETE' });
    refreshTasks();
  };

  const handleUpdate = async () => {
    await fetch(`/api/tasks/${task.taskid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskName, description, status: task.status }),
    });
    setEditing(false);
    refreshTasks();
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '0.5rem 0', padding: '0.5rem' }}>
      {editing ? (
        <>
          <input value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <strong>{task.taskname}</strong> - {task.description} - Status: {task.status ? 'Done' : 'Pending'}
          <button onClick={() => setEditing(true)} style={{ marginLeft: '1rem' }}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: '0.5rem' }}>Delete</button>
        </>
      )}
    </div>
  );
}