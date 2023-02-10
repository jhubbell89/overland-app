import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import AuthPage from '../authpage/AuthPage';
import Home from "../../components/home/Home";
import NavBar from "../../components/navbar/NavBar";
import { getUser } from "../../utilities/users-service";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/* {user ?
        <>
          <NavBar user={user} setUser={setUser} />
        </>
        :
        <AuthPage setUser={setUser} />
      } */}
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
