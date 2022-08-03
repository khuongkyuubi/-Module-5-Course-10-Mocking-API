import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import {Link} from "react-router-dom";

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const handleCreate = () => {

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                async function fetchData() {
                    const response = await axios.get("http://localhost:9000/api/users");
                    const data = response.data;
                    console.log(data)
                    setUsers(data); // sau khi setState thì re-render lại
                    setIsLoading(false)
                }

                fetchData();
            }

        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, []);
    console.log(isLoading)

    return isLoading ? (<h1>Loading...</h1>) : (

        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <Link to={`users/${user.id}`} key={user.id}>
                        <li> {user.name} </li>
                    </Link>
                ))}
            </ul>
            <Link to={"users/create"}>
                <button onClick={handleCreate}>Create user</button>
            </Link>
        </div>
    );
}

export default App;
