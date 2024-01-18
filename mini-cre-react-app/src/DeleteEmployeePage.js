import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const DeleteEmployeePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteEmployee = () => {
        fetch(`http://localhost:5084/api/employee/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Error deleting employee: ', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting employee: ', error));
    };

    const handleCancelDeleteEmployee = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Delete Employee</h2>
            <p>Are you sure you want to delete this employee?</p>
            <div>
                <button onClick={handleDeleteEmployee}>Delete</button>
                <button onClick={handleCancelDeleteEmployee}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteEmployeePage;