import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="navbar-container">
                <ul id="navbar-logo" className="left">
                    <li>
                        Underwhelm
                    </li>
                </ul>
                <ul id="navbar-list" className="middle">
                    <li>
                        See All Tasks
                    </li>
                    <li>
                        Tutorial
                    </li>
                </ul>
                <ul id="navbar-right" className="right">
                    <li>
                        Words
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;