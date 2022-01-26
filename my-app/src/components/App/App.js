import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../Homepage/Homepage';
import User from '../User/User';
<<<<<<< Updated upstream
import Login from '../Login/Login';
import Register from '../Register/Register';
import Comunity from '../Comunity/Comunity';
import Blog from '../Blog/Blog';

=======
import Register from '../Register/Register'
import Login from '../Login/LoginS'
>>>>>>> Stashed changes
import '../../styles/index.css';


function App (){
    return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/comunity" element={<Comunity />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
    );
}

export default App;