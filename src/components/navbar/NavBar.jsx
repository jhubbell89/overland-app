import {Link} from 'react-router-dom';

import './NavBar.css';

export default function NavBar(props) {
    
    //Function to help make the navbar responsive.
    //Not finished.
    // function myFunction() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //         x.className += " responsive";
    //       } else {
    //         x.className = "topnav";
    //       }
    // }

    return (
        <div>
            <div className="topnav" id="myTopnav">
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/trips/new'>Start An Adventure</Link>
                    <Link to='/trips/index'>Adventures</Link>
                </nav>
            </div>
        </div>
    )
}