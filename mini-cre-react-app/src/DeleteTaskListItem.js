import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeTasks } from "./api";

const DeleteTaskListItem = () => {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getEmployeeTasks(id);
            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleDeleteTask = async (taskId) => {
        navigate(`delete-task/${taskId}`);
    }

    return (
        <div>
            <h2>Delete Task</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.description} - {task.startDate} - {task.deadline} - {task.completionPercentage}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteTaskListItem;