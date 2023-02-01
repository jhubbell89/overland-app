import React from 'react';
import { useState } from 'react';

// import AuthPage from '../authpage/AuthPage';
import NavBar from '../../components/navbar/NavBar';
import { getUser } from '../../utilities/users-service';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {/* {user ?
        <>
          <NavBar user={user} setUser={setUser} />
        </>
        :
        <AuthPage setUser={setUser} />
      } */}
<NavBar user={user} setUser={setUser} />
    </main>
  );
}