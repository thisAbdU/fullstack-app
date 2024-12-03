import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then((res) => setUsers(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
