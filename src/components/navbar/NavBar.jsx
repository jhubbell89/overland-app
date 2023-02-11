import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <div className="bg-stone-600">
      <Link to="/">Home</Link>
      <Link to="/destinations" className="m-1">
        Destinations
      </Link>
      {user ? (
        <>
          <Link to="/authpage" className="m-1">
            My Adventures
          </Link>
          <Link to="/authpage" className="m-1">
            Social
          </Link>
        </>
      ) : (
        <>
          <Link to="/adventures" className="m-1">
            My Adventures
          </Link>
          <Link to="/social" className="m-1">
            Social
          </Link>
        </>
      )}
      <Link to="/shop" className=" m-1">
        Shop
      </Link>
      <div className="float-right">
        <Link to="/help" className=" m-1">
          Help
        </Link>
        {user ? (
          <>
            <Link to="" className="right-0">
              Log In
            </Link>
          </>
        ) : (
          <>
            <Link to="" onClick={handleLogOut} className="">
              Log Out
            </Link>
          </>
        )}
      </div>
      <Link to="" className="" onClick={handleClick}>
        <FaBars />
      </Link>
    </div>
  );
}
