import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://localhost:5084/api/employee');
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees;', error);
        }
    };

    const handleSearch = () => {
        const filteredEmployees = employees.filter(employee =>
            employee.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setEmployees(filteredEmployees);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Home Page</h2>
            <div>
                <button onClick={() => console.log('Add clicked')}>Add</button>
                <button onClick={() => console.log('Edit clicked')}>Edit</button>
                <button onClick={() => console.log('Delete clicked')}>Delete</button>
                <button onClick={() => console.log('Tasks clicked')}>Tasks</button>
                <button onClick={() => console.log('Report clicked')}>Report</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Tasks</th>
                        <th>Completed Tasks(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.fullName}</td>
                            <td>{employee.position}</td>
                            <td>{/* Логика для отображения количества задач */}</td>
                            <td>{/* Логика для отображения процента выполнения */}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;