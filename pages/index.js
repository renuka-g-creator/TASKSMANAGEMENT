import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Task Manager</h1>
      <p>
        <Link href="/tasks">Go to Tasks Page</Link>
      </p>
    </div>
  );
}