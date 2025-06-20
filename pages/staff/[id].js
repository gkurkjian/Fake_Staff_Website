import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import UserCard from "../components/UserCard";
import { useRouter } from "next/router";
import Link from "next/link";

export default function StaffProfile() {
    const { users, error } = useContext(UserContext);
    const router = useRouter();
    const { id } = router.query;

    const virtualId = parseInt(id);
    const user = users[virtualId - 1]; // Adjusting for zero-based index

    if (error) return <p>Error loading user data</p>;
    if (!users || users.length === 0) return <p>Loading ...</p>;
    if (!user) return <p>User not found</p>;

    return(
        <main   main>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Staff Profile</h1>
                <Link href="/staff" style={{ textDecoration: 'none', color: 'blue' }}>Back to Staff List</Link>
            </div>
            <br />
            <UserCard user={user} />
            <h2>Welcome to {user?.first_name}&apos;s page.</h2><br />
            <h3>If you would like to keep in touch consider email to {user?.first_name} at <strong>{user?.email}</strong></h3>
        </main>
    )
}