import React from "react";
import { useState } from "react";

// import AuthPage from '../authpage/AuthPage';
import NavBar from "../../components/navbar/NavBar";
import ContentContainer from "../../components/contentcontainer/ContentContainer";
import { getUser } from "../../utilities/users-service";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App bg-stone-600 flex  ">
      {/* {user ?
        <>
          <NavBar user={user} setUser={setUser} />
        </>
        :
        <AuthPage setUser={setUser} />
      } */}
      <NavBar user={user} setUser={setUser} />
      <ContentContainer user={user} setUser={setUser} />
    </main>
  );
}
