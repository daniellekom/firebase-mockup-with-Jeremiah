import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from "./scenes/Home";
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import { useState } from 'react';


function App() {
  const [user,setUser]= useState()
  return (
    <>
    <h1>Danielle and Jeremiah's App!</h1>
      <Routes>
        <Route path="/" element={user?<Home user={user}/>:<Login setUser={setUser}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/Signup" element={<Signup setUser={setUser} />} />
      </Routes>
   </>


  );
}

export default App;
