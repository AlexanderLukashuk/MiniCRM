import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTaskPage = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();

    const handleDeleteTask = () => {
        fetch(`http://localhost:5084/api/task/${taskId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // console.log('Task deleted');
                navigate('/task');
            } else {
                console.error('Error deleting tasl:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <div>
            <h2>Delete Task</h2>
            <p>Are you sure you want to delete this task?</p>
            <button onClick={handleDeleteTask}>Delete Task</button>
        </div>
    );
};

export default DeleteTaskPage;