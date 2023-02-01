import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from'react-dom';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../../components/navbar/NavBar';

import './App.css';

export default function App() {
  // const [user, setUser] = useState(getUser());
  
  return (
    <main className='App'>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <NavBar />
      
    </main>
  );
}