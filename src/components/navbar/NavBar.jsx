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
      {user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/destinations" className="m-1">
            Destinations
          </Link>
          <Link to="/adventures" className="m-1">
            My Adventures
          </Link>
          <Link to="/social" className="m-1">
            Social
          </Link>
          <Link to="/shop" className="m-1">
            Shop
          </Link>
          <Link to="/help" className="m-1">
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
  );
}
