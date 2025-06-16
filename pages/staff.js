import { useState, useEffect } from 'react'

export default function StaffPage() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    }).then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      }).then((data) => setUsers(data.data)).catch((err) => setError(err.message))
  }, [])

  if (error) return <p>Error: {error}</p>

  return (
    <main>
      <h1>Our Staff</h1>
      <ul>
        {users.map((user) => (
          <>
            <ul key={user?.id}>User ID: {user?.id}</ul>
            <ul key={user?.first_name}>Name: {user?.first_name}</ul>
          </>
        ))}
      </ul>
    </main>
  )
}
