import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeTasks } from "./api";

const EditTaskListItem = () => {
    const { id  } = useParams();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getEmployeeTasks(id);
            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleEditTask = async (taskId) => {
        navigate(`edit-task/${taskId}`);
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.description} - {task.startDate} - {task.deadline} - {task.completionPercentage}
                        <button onClick={() => handleEditTask(task.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EditTaskListItem;