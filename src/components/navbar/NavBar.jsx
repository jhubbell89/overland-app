import React, { useState } from "react";
import { Link } from "react-router-dom";

import './NavBar.css';

export default function TopNav() {
    const [isExpanded, setExpanded] = useState(false);
    const user = [];

    const handleClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className={`topnav ${isExpanded ? "responsive" : ""}`}>
                {user ? (
                    <>
                        <Link to="/" className="active">
                            Home
                        </Link>
                        <Link to="/trips/new">Start An Adventure</Link>
                        <Link to="/trips">Adventures</Link>
                        <Link to="/destinations">Destinations</Link>
                        <Link to="/logout" className="split">
                            Log Out
                        </Link>
                        <Link to="" className="icon" onClick={handleClick}>
                            <i className="fa fa-bars"></i>
                        </Link>
                    </>
                ) : (
                    <Link to="/auth/google">Log In</Link>
                )}
            </div>
        </>
    );
}