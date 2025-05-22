import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Posts from './Posts';
import Home from './Home';
import Login from './Login';
import Register from './Register';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}
