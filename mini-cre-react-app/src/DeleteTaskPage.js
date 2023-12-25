import React from "react";

const DeleteTaskPage = () => {
    const handleDeleteTask = () => {
        fetch(`http://localhost:5084/api/task/${taskId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // console.log('Task deleted');
                history.push('/task');
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