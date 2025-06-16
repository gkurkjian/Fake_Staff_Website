// pages/_app.js
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <header>
        <h1>Fake Staff Directory</h1>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <p>© 2025 My Fake Staff App</p>
      </footer>
    </div>
  )
}
