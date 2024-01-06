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
                navigate('/');
            } else {
                console.error('Error deleting tasl:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting task:', error));
    };

    const handleCancelDeleteTask = () => {
        navigate('/');
    }

    return (
        <div>
            <h2>Delete Task</h2>
            <p>Are you sure you want to delete this task?</p>
            <div>
                <button onClick={handleDeleteTask}>Delete Task</button>
                <button onClick={handleCancelDeleteTask}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteTaskPage;