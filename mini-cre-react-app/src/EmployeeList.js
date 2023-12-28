import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from './api';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);

    const handleEmployeeTasks = async (employeeId) => {
        navigate(`${employeeId}`);
    }

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.fullName} - {employee.position}
                        <button onClick={() => handleEmployeeTasks(employee.id)}>Tasks</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
