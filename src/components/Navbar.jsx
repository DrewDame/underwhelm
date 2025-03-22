import React from 'react';
import "../styles/Navbar.css";

const Navbar = ({showPopup}) => {
    return (
        <nav id="navbar">
            <div id="navbar-container">
                <ul id="navbar-logo" className="left">
                    <li>
                        Underwhelm
                    </li>
                </ul>
                <ul id="navbar-list" className="middle">
                <li onClick={() => showPopup(<h2>This feature has not yet been added</h2>)}>
                        See All Tasks
                    </li>
                    <li onClick={() => showPopup(<h2>This feature has not yet been added</h2>)}>
                        Tutorial
                    </li>
                </ul>
                <ul id="navbar-right" className="right">
                    <li onClick={() => showPopup(<h2>This feature has not yet been added</h2>)}>
                        Placeholder
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;