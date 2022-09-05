import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
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