import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import User from '../User/User';
import Register from '../Register/Register'
import '../../styles/index.css';

function App (){
    return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/user" element={<User />} />
                <Route path="/register" element={<Register />} />
            </Routes>
    );
}

export default App;