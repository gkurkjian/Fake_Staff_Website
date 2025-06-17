import Link from 'next/link'

export default function Home() {
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
