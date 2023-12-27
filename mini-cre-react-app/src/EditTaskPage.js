import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTaskPage = () => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [completionPercentage, setCompletionPercentage] = useState('');
    const navigate = useNavigate();
    const { taskId } = useParams();

    const handleEditTask = () => {
        fetch(`http://localhost:5084/api/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskName, startDate, endDate, completionPercentage }),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Task edited:', data);
                navigate(`/task/${taskId}`);
            })
            .catch(error => console.error('Error editing task', error));
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <label>Task Name:</label>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <label>Completion Percentage:</label>
            <input
                type="number"
                value={completionPercentage}
                onChange={(e) => setCompletionPercentage(e.target.value)}
            />
            <button onClick={handleEditTask}>Edit Task</button>
        </div>
    );
};

export default EditTaskPage;