import Link from 'next/link'
import load from './staff';

export default function Home() {
  console.log(load())
  return (
    <>
    <main style={{ backgroundColor: '#fff', color: '#000'}}>
      <h1>Welcome to the Fake Staff Site</h1>
      <p>
        <Link href='/staff'>Got to Staff Directory</Link>
      </p>
    </main>
    </>
  );
}
