import React, { useState, useEffect } from "react";

const EmployeeTaskPage = ({ match }) => {
    const [employeeTasks, setEmployeeTasks] = useState([]);

    const fetchEmployeeTasks = async () => {
        try {
            const response = await fetch('http://localhost:5084/api/employee/${match.params.employeeId/tasks}');
            const data = await response.json();
            setEmployeeTasks(data);
        } catch (error) {
            console.log('Error fetching employee tasks:', error);
        }
    };

    useEffect(() => {
        fetchEmployeeTasks();
    }, [match.params.employeeId]);

    return (
        <div>
            <h2>Employee Tasks Page</h2>
            <div>
                <button onClick={handleAddTask}>Add task</button>
                <button onClick={handleEditTask}>Edit task</button>
                <button onClick={handleDeleteTask}>Delete task</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Start date</th>
                        <th>Finish date</th>
                        <th>Percentage of completion</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeTasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.taskName}</td>
                            <td>{task.startDate}</td>
                            <td>{task.endDate}</td>
                            <td>{task.percentComplete}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTaskPage;