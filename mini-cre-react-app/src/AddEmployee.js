import React, { useState } from 'react';

const AddEmplloyee = ({ onAddEmployee }) => {
    const [name, setName] = useState('');

    const handleAddEmployee = () => {
        fetch('http://localhost:5004/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
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
            <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
    );
};

export default AddEmplloyee;