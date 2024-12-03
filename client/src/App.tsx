import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<UserForm />} />
            <Route path="/users" element={<UserList />} />
        </Routes>
    </Router>
);

export default App;
