// pages/_app.js
import '../styles/globals.css'
import { UserProvider } from '../context/UserContext';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleNavigation = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <UserProvider>
      <div className="layout">
      <header>
        <nav>
          <Link href="/" onClick={handleNavigation}>Home</Link>
        </nav>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <p>© 2025 My Fake Staff App</p>
      </footer>
    </div>
    </UserProvider>
  )
}
