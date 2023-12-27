import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const AddEmplloyeePage = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const navigate = useNavigate();

    const handleAddEmployee = (employeeData) => {
        fetch('http://localhost:5084/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName: name, position: position }),
        })
            .then(response => response.json())
            .then(data => {
                // onAddEmployee(data);
                navigate('/');
            })
            .catch(error => console.error('Error adding employee:', error));
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <label>Name:</label>
            <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <label>Position:</label>
            <input
                type="text"
                placeholder="Employee Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
            />
            <br />
            <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
    );
};

export default AddEmplloyeePage;