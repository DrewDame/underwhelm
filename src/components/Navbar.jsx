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
                    <li onClick={() => showPopup(
                        <div id="tutorial-popup-container">
                            <h2>Tutorial: How to Use Underwhelm</h2>
                            <p>Welcome to <strong>Underwhelm</strong>, a productivity tool designed to help you focus on one task at a time, reduce decision fatigue, and avoid feeling overwhelmed.</p>
                            
                            <h3>Adding Tasks</h3>
                            <p>1. Go to the <strong>"Add Tasks"</strong> section.</p>
                            <p>2. Enter the name of the task you want to complete.</p>
                            <p>3. Select the estimated duration for the task (e.g., 5 minutes, 15 minutes, etc.).</p>
                            <p>4. Click <strong>"Add Task"</strong> to save it. Your tasks will be hidden from view to help you focus on the present moment.</p>
                            
                            <h3>Receiving Tasks</h3>
                            <p>1. Go to the <strong>"Receive a Task"</strong> section.</p>
                            <p>2. Select how much time you have available (e.g., 15 minutes, 30 minutes, etc.).</p>
                            <p>3. Click <strong>"Receive Task"</strong> to let the site randomly choose a task for you from your list. This eliminates the stress of deciding what to do next.</p>
                            
                            <h3>Why Underwhelm?</h3>
                            <p><strong>Less Overwhelming:</strong> By hiding your task list, you can focus on one task at a time without distractions.</p>
                            <p><strong>Eliminates Decision Fatigue:</strong> The site chooses your next task for you, so you can spend less time deciding and more time doing.</p>
                            
                            <p>Take it one step at a time, and let Underwhelm guide you toward productivity without the stress.</p>
                      </div>
                    )}>
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