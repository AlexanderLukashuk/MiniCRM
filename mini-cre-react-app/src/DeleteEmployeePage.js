import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees, deleteEmployee } from './api';

const DeleteEmployeePage = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);

    const handleDeleteEmployee = async (employeeId) => {
        try {
            await deleteEmployee(employeeId);
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div>
            <h2>Delete Employee</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.fullName} - {employee.position}
                        <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteEmployeePage;