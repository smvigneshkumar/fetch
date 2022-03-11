import { useEffect, useState } from "react";
import "./styles.css";
import User from "./User";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    </div>
  );
}
