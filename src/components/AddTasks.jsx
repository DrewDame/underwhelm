import React, { useState, useRef, useEffect } from 'react';
import "../styles/AddTasks.css";

const AddTasks = () => {
    const [formData, setFormData] = useState({
        name: '',
        duration: ''
    });

    const nameInputRef = useRef(null);

    useEffect(() => {
        // Set focus on the name input field when the component mounts
        nameInputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve existing tasks from localStorage
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // Add the new task to the array
        const updatedTasks = [...existingTasks, formData];
        // Save the updated array back to localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        // Clear the form
        setFormData({
            name: '',
            duration: ''
        });
        console.log('Task added:', formData);
        // Animate button
        const button = e.target.querySelector('button[type="submit"]');
        animateButton(button);
    };

    const animateButton = (button) => {
        button.innerText = "✔ Task Added!";
        button.style.backgroundColor = "#A1CCA5";
        const resetButton = () => {
            button.innerText = "Add Task";
            button.style.backgroundColor = "";
            button.removeEventListener('mouseleave', resetButton);
        };
        button.addEventListener('mouseleave', resetButton);
    };

    return (
        <div id="add-container">
            <form id="add-form" onSubmit={handleSubmit}>
                <h2>Add a Task</h2>
                <div id="add-name">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        ref={nameInputRef} // Attach the ref to the input element
                        required
                    />
                </div>
                <div id="add-duration">
                    <label>Pick a Duration:</label>
                    <div id="add-duration-option-container">
                        <label className="add-duration-option">
                            <input
                                type="radio"
                                name="duration"
                                value="5"
                                checked={formData.duration === '5'}
                                onChange={handleChange}
                                required
                            />
                            5 minutes
                        </label>
                        <label className="add-duration-option">
                            <input
                                type="radio"
                                name="duration"
                                value="15"
                                checked={formData.duration === '15'}
                                onChange={handleChange}
                                required
                            />
                            15 minutes
                        </label>
                        <label className="add-duration-option">
                            <input
                                type="radio"
                                name="duration"
                                value="30"
                                checked={formData.duration === '30'}
                                onChange={handleChange}
                                required
                            />
                            30 minutes
                        </label>
                        <label className="add-duration-option">
                            <input
                                type="radio"
                                name="duration"
                                value="60"
                                checked={formData.duration === '60'}
                                onChange={handleChange}
                                required
                            />
                            1 hour
                        </label>
                        <label className="add-duration-option">
                            <input
                                type="radio"
                                name="duration"
                                value="120"
                                checked={formData.duration === '120'}
                                onChange={handleChange}
                                required
                            />
                            2 hours
                        </label>
                    </div>
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTasks;