import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import UserCard from "../components/UserCard"
import Link from "next/link";

export default function StaffPage() {
  const { users, error } = useContext(UserContext)

  console.log('loading the users', users)
  return (
    <main>
      <h1>Our Staff</h1>
      <div>
        {users.map((user, index) => (
          <Link key={user.id} href={`/staff/${index + 1}`} style={{ textDecoration: 'none' }}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </main>
  )
}
