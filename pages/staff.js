import { useState, useEffect } from 'react'
import  UserCard  from '../pages/components/UserCard'

export default function StaffPage() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2', {
      headers: {
        'x-api-key': 'reqres-free-v1',  // This header was needed in order to fetch the data, before was showing 401 error
      },
    }).then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      }).then((data) => setUsers(data.data)).catch((err) => setError(err.message))
  }, [])

  if (error) return <p>Error: {error}</p>

  return (
    <main>
      <h1 >Our Staff</h1>
      <ul>
        {users.map((user) => (
          <>
            <UserCard user={user}/>
          </>
        ))}
      </ul>
    </main>
  )
}
