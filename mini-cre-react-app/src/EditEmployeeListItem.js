import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployees } from './api';
import { Link } from 'react-router-dom';

const EditEmployeeListItem = ({ employee }) => {
    // return (
    //     <div key={employee.id}>
    //         <span>{employee.fullName} - {employee.position}</span>
    //         <Link to={`/edit-employee/${employee.id}`}>
    //             <button>Edit</button>
    //         </Link>
    //     </div>
    // );

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);

    const handleEditEmployee = async (employeeId) => {
        // try {
        //     await edit(employeeId);
        //     navigate('/');
        // } catch (error) {
        //     console.error('Error editing employee:', error);
        // }
        navigate(`${employeeId}`)
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.fullName} - {employee.position}
                        <button onClick={() => handleEditEmployee(employee.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EditEmployeeListItem;