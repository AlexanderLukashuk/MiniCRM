import React, { useState, useEffect } from "react";

const OverdueTaskPage = () => {
    const [overdueTasks, setOverdueTasks] = useState([]);

    const fetchOverdueTasks = async () => {
        try {
            const response = await fetch('http://localhost:5084/api/tasks/overdue');
            const data = await response.json();
            setOverdueTasks(data);
        } catch (error) {
            console.error('Error fetching overdue tasks:', error);
        }
    };

    useEffect(() => {
        fetchOverdueTasks();
    }, []);

    return (
        <div>
            <h2>Overdue Tasks Page</h2>
            <div>
                <button onClick={() => window.print()}>Print</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee Name</th>
                        <th>Task Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Percentage of completion</th>
                        <th>Days overdue</th>
                    </tr>
                </thead>
                <tbody>
                    {overdueTasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.employeeName}</td>
                            <td>{task.taskName}</td>
                            <td>{task.startDate}</td>
                            <td>{task.endDate}</td>
                            <td>{task.percentComplete}</td>
                            <td>{task.daysOverdue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OverdueTaskPage;