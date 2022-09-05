import React, {useEffect, useState} from 'react'

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .finally(() => setLoading(false))
    },[]); // componentDidMount     


  return (
    <div>

        {loading && <div>Yükleniyor...</div>}

        <h2>Users</h2>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users