import React, { useState, useEffect } from 'react';
import "../styles/ReceiveTasks.css";

const ReceiveTasks = () => {
    const [formData, setFormData] = useState({
        name: '',
        duration: ''
    });
    const [selectedTask, setSelectedTask] = useState(null); // State to store the selected task
    const [fade, setFade] = useState(false); // State to handle fade transition
    const [taskDurations, setTaskDurations] = useState({}); // State to store available task durations

    useEffect(() => {
        updateTaskDurations();
    }, []);

    const updateTaskDurations = () => {
        // Retrieve existing tasks from localStorage
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // Count tasks by duration
        const durations = existingTasks.reduce((acc, task) => {
            acc[task.duration] = (acc[task.duration] || 0) + 1;
            return acc;
        }, {});
        setTaskDurations(durations);
    };

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
        // Filter tasks that match the selected duration
        const matchingTasks = existingTasks.filter(task => task.duration === formData.duration);
        // Randomly select a task from the matching tasks
        if (matchingTasks.length > 0) {
            const randomTask = matchingTasks[Math.floor(Math.random() * matchingTasks.length)];
            setFade(true); // Trigger fade out
            setTimeout(() => {
                setSelectedTask(randomTask); // Set the selected task
                setFade(false); // Trigger fade in
                console.log('Selected Task:', randomTask);
            }, 500); // Duration of the fade out transition
        } else {
            console.log('No tasks found for the selected duration.');
        }
    };

    const handleComplete = () => {
        // Retrieve existing tasks from localStorage
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // Filter out the completed task
        const updatedTasks = existingTasks.filter(task => task.name !== selectedTask.name);
        // Save the updated array back to localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        // Clear the selected task and reset the form data
        setSelectedTask(null);
        setFormData({
            name: '',
            duration: ''
        });
        // Update task durations
        updateTaskDurations();
        console.log('Task completed:', selectedTask);
    };

    return (
        <div id="receive-container">
            <div className={`fade-transition ${fade ? 'fade-out' : 'fade-in'}`}>
                {selectedTask ? (
                    <div id="receive-task-container">
                        <div className="task-card">
                            <h2>Selected Task</h2>
                            <p><strong>Name:</strong> {selectedTask.name}</p>
                            <p><strong>Duration:</strong> {selectedTask.duration} minutes</p>
                        </div>
                        <button id="complete-button" onClick={handleComplete}>Mark Task as Completed</button>
                    </div>
                ) : (
                    <form id="receive-form" onSubmit={handleSubmit}>
                        <div id="receive-duration">
                            <label>How much time do you have?</label>
                            <div id="receive-duration-option-container">
                                {['5', '15', '30', '60', '120'].map(duration => (
                                    <label
                                        key={duration}
                                        className={`receive-duration-option ${!taskDurations[duration] ? 'unavailable' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name="duration"
                                            value={duration}
                                            checked={formData.duration === duration}
                                            onChange={handleChange}
                                            disabled={!taskDurations[duration]} // Disable if no tasks of this duration
                                            required
                                        />
                                        {duration} minutes
                                        {!taskDurations[duration] && (
                                            <span className="tooltiptext">No tasks available for this duration</span>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button type="submit">Receive Task</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReceiveTasks;