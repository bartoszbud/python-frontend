import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import Users from './pages/Users';
import CreateUserForm from './pages/CreateUserForm';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/users' element={<Users />} />
        <Route path='/createusers' element={<CreateUserForm />} />
      </Routes>
    </>
  );
}

export default App;
