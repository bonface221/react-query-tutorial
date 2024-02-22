import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
type Users = User[];

function App() {
  const [users, setUsers] = useState<Users>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<Users>(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (error) {
        setError("An Error Occured");
      }
    }

    fetchUsers();
  }, []);
  return (
    <div className="container">
      <h1 className="my-4">Welcome To React Query</h1>
      <hr />

      {error ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
