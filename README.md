# 🧑‍💼 Fake Staff Directory (Next.js Project)

A simple but powerful staff directory built using **Next.js**, with **global state** managed through **Context API**. It fetches data from the public API at [reqres.in](https://reqres.in/api/users?page=2) and provides individual staff profile pages.

---

## 🚀 Features

- Fetches and displays fake users from `https://reqres.in/api/users?page=2`
- Uses `Context` and `Provider` to share user data across the app
- Displays user avatars, names, and emails using a reusable `UserCard` component
- Routes dynamically to each staff member's profile using `[id].js`
- Layout is extendable and ready for integration with Bootstrap

---

## 📡 API Source

We use the public API:

```
https://reqres.in/api/users?page=2
```

To avoid a **401 Unauthorized error**, we include the required header in the fetch request:

```js
headers: {
  'x-api-key': 'reqres-free-v1'
}
```

This header is mandatory; without it, the request will be rejected.

---

## 🧠 Tech Stack

- **Next.js 15+**
- **React Context API** for global state
- **Next Router** for dynamic routing with `[id].js`
- **Dynamic components** with props (`UserCard`)
- **Bootstrap-compatible**
- **Modular folder structure**

---

## 📁 Project Structure

```
.
├── components
│   └── UserCard.js         # Reusable component to display avatar, name, etc.
├── context
│   └── UserContext.js      # Creates Context and Provider for global access
├── pages
│   ├── index.js            # Homepage with welcome message + link to staff
│   ├── staff
│   │   ├── index.js        # Lists all staff using Context
│   │   └── [id].js         # Shows individual staff details using router query
├── styles
│   └── globals.css         # Global styling (e.g., keep link color blue)
```

---

## 🔄 Global State via Context

Instead of fetching data on every page, we created a single **Context** provider in `UserContext.js`:

```js
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch('https://reqres.in/api/users?page=2', {
          headers: { 'x-api-key': 'reqres-free-v1' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, error }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
```

Then wrap the entire app in `pages/_app.js`:

```js
import { UserProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
```

Now `users` and `error` are available in any component like:

```js
const { users, error } = useContext(UserContext);
```

---

## 🧱 Dynamic Routes with `[id].js`

We use dynamic routing to render user-specific pages:

```js
const router = useRouter();
const { id } = router.query;
const user = users[parseInt(id) - 1]; // Adjust for zero-based index
```

Each staff page is accessible via:

```
/staff/1
/staff/2
/staff/3
...
```

---

## 🧩 Components

### `UserCard.js`

Reusable component to display user avatar and name:

```js
<Image src={user.avatar} alt="user avatar" width={150} height={150} />
<p>{user.first_name} {user.last_name}</p>
```

Keeps layout clean and DRY.

---

## 🔗 Styling Hyperlinks Globally

To keep visited links blue, add this in `styles/globals.css`:

```css
a {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: blue;
}
```

---

## ✅ Summary

- Data is **fetched once** via Context
- `x-api-key` header avoids 401 error
- Staff list available at `/staff`
- Individual user pages at `/staff/[id]`
- Clean UI with `UserCard` component
- Styling with global CSS and Bootstrap-ready
