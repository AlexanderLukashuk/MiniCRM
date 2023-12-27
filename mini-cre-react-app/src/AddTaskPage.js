import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddTaskPage = () => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [completionPercentage, setCompletionPercentage] = useState('');
    const navigate = useNavigate();

    const handleAddTask = () => {
        fetch('http://localhost:5084/api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskName, startDate, endDate, completionPercentage }),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Task added:', data);
                navigate(`/task/${data.id}`);
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <div>
            <h2>Add Task</h2>
            <label>Task Name:</label>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <label>Start Date:</label>
            <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label>End Date:</label>
            <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <label>Completion Percentage:</label>
            <input
                type="number"
                value={completionPercentage}
                onChange={(e) => setCompletionPercentage(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTaskPage;