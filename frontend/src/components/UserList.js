import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userService';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getAllUsers();
            setUsers(users);
        };
        fetchUsers();
}, [])

return (
    <>
        <h1>User list</h1>
        <ul>
            {users.map(user => (
                <li key={user.userId}>{user.title} - {user.completed} </li>
            ))}
        </ul>
    </>
);
};

export default UserList;