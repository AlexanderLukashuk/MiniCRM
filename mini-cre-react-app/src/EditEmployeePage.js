import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployeePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({
        fullName: "",
        position: ""
    });

    useEffect(() => {
        fetch(`http://localhost:5084/api/employee/${id}`)
            .then(response => response.json())
            .then(data => setEmployee(data))
            .catch(error => console.error('Error fetching employee:', error));
    }, [id]);

    const handleEditEmployee = () => {
        fetch(`http://localhost:5084/api/employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Employee edited');
                    navigate('/');
                } else {
                    console.error('Error editing employee:', response.statusText);
                }
            })
            .catch(error => console.error('Error editing employee:', error));
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <label>Name:</label>
            <input
                type="text"
                placeholder="Employee Name"
                value={employee.fullName}
                onChange={e => setEmployee({ ...employee, fullName: e.target.value })}
            />
            <br />
            <label>Position:</label>
            <input
                type="text"
                placeholder="Employee Position"
                value={employee.position}
                onChange={e => setEmployee({ ...employee, position: e.targetvalue })}
            />
            <br />
            <button onClick={handleEditEmployee}>Edit Employee</button>
        </div>
    );
};

export default EditEmployeePage;