import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import User from '../User/User';
import '../../styles/index.css';
import Login from '../Login/Login'


function App (){
    return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />

            </Routes>
    );
}

export default App;