import React, { useState } from 'react';

const AddEmplloyee = ({ onAddEmployee }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const handleAddEmployee = () => {
        fetch('http://localhost:5084/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName: name, position: position }),
        })
            .then(response => response.json())
            .then(data => {
                onAddEmployee(data);
                setName('');
            })
            .catch(error => console.error('Error adding employee:', error));
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Employee Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
            />
            <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
    );
};

export default AddEmplloyee;