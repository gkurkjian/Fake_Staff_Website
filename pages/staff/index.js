import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import UserCard from "../components/UserCard"

export default function StaffPage() {
  const { users, error } = useContext(UserContext)

  console.log('loading the users', users)
  return (
    <main>
      <h1>Our Staff</h1>
      <div>
        {users.map(user => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </main>
  )
}
