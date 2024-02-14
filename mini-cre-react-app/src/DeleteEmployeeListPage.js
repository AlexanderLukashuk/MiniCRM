import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from './api';
import './styles.css';

const DeleteEmployeeListPage = () => {
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
        // try {
        //     await deleteEmployee(employeeId);
        //     navigate('/');
        // } catch (error) {
        //     console.error('Error deleting employee:', error);
        // }


        navigate(`${employeeId}`);
    };

    return (
        <div className="list-container page-container">
            <h2 className="page-name">Delete Employee</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <div className="info">
                            {employee.fullName} - {employee.position}
                        </div>
                        <button className="list-action-buttons" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                        {/* <button onClick={handleDeleteEmployee}>Delete</button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteEmployeeListPage;