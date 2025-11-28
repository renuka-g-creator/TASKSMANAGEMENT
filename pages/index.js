import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Task Management System</h1>
      <p>
        <Link href="/tasks">Go to Tasks Page</Link>
      </p>
    </div>
  );
}