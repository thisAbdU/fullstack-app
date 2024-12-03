import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users', { name, email })
            .then(() => {
                setName('');
                setEmail('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
