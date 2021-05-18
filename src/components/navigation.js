  
import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Log In</Link>
            </li>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation;