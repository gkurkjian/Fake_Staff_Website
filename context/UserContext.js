import { createContext, useEffect, useState } from "react";

// 1. Creating the context first
const UserContext = createContext();

// 2. Create the provider component
function UserProvider({ children }) {
    const [ users, setUsers ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        async function loadUsers() {
        try {
            const res = await fetch('https://reqres.in/api/users?page=2', {  // we're fetching it from here
                headers: { 'x-api-key': 'reqres-free-v1' },  // here we must include this header in order to access to the data, otherwise 401 error
            })
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            setUsers(data.data)
        } catch (err) {
            setError(err.message)
        }
    }

    loadUsers()
    }, [])


    return (
        <UserContext.Provider value={{ users, error }}>
            {children}
        </UserContext.Provider>
    )
}

// 3. Exporting both the function and the provider
export { UserContext, UserProvider}