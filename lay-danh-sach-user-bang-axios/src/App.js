import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:9000/api/users");
            const data = response.data;
            console.log(data)
            setUsers(data); // sau khi setState thì re-render lại
        }

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
