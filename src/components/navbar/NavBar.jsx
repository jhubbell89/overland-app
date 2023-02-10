import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState(false);
  const user = [];

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div class="bg-stone-600">
      <div className={`topnav ${isExpanded ? "responsive" : ""}`}>
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/destinations" className="">
              Destinations
            </Link>
            <Link to="/trips" className="">
              My Adventures
            </Link>
            <Link to="/social" className="">
              social
            </Link>
            <Link to="/shop" className="">
              Shop
            </Link>
            <Link to="/help" className="">
              Help
            </Link>
            <Link to="/logout" className="m-1">
              Log Out
            </Link>
            <Link to="" className="icon " onClick={handleClick}>
              <FaBars />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/auth/google">Log In</Link>
          </>
        )}
      </div>
    </div>
  );
}
