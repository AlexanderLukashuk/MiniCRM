import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import handleAddTask from "./AddTaskPage";
import handleEditTask from "./EditTaskPage";
import handleDeleteTask from "./DeleteTaskPage";

const EmployeeTaskPage = ({ match }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employeeTasks, setEmployeeTasks] = useState([]);

    const fetchEmployeeTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5084/api/task/employee/${id}`);
            const data = await response.json();
            setEmployeeTasks(data);
        } catch (error) {
            console.log('Error fetching employee tasks:', error);
        }
    };

    useEffect(() => {
        fetchEmployeeTasks();
    }, [id]);

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
                            <td>{task.title}</td>
                            <td>{task.startDate}</td>
                            <td>{task.deadline}</td>
                            <td>{task.completionPercentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Home</Link>
        </div>
    );
};

export default EmployeeTaskPage;