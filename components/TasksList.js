import TaskItem from './TasksItem';

export default function TaskList({ tasks, refreshTasks }) {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.taskid} task={task} refreshTasks={refreshTasks} />
      ))}
    </div>
  );
}