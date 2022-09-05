import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    // .then(res => {
    //     setUsers(res.data)
    //    axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
    //      .then(res => setPosts(res.data))
    //  })
    //   .finally(() => setLoading(false))
    getData();
  }, []); // componentDidMount

  const getData = async () => {
   try{
     const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
    );
    setLoading(false);
    setUsers(users);
    setPosts(posts); 
   }catch(err){
     console.log(err);
   }
  };

  return (
    <div>
      {loading && <div>Yükleniyor...</div>}

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
