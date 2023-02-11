import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AuthPage from "../authpage/AuthPage";
import Home from "../../components/home/Home";
import Destinations from "../../components/Destinations/Destinations";
import Adventures from "../../components/myadventures/MyAdventures";
import Social from "../../components/social/Social";
import Shop from "../../components/shop/Shop";
import Help from "../../components/help/Help";
import NavBar from "../../components/navbar/NavBar";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getUser } from "../../utilities/users-service";

export default function App() {
  const [user, setUser] = useState(getUser());
  

  return (
    <main className="App min-h-screen">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/social" element={<Social />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/help" element={<Help />} />
        <Route path="/authpage" element={<AuthPage />} />
      </Routes>
      <BottomNav />
    </main>
  );
}
