import React, { useState, useEffect } from 'react';
import AddEmplloyee from './AddEmployee';

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([]);
    const [authorized, setAuthorized] = useState(true);

    useEffect(() => {

    }, []);

    return (
        <div>
            <h2>Main Page</h2>
            {!authorized && <p>Для просмотра списка сотрудников и задач нужно авторизоваться</p>}
            <div>
                {/* <button onClick={() => handleAddEmployee()}>Добавить</button> */}
                <button>Добавить</button>
                {/* <button onClick={() => handleEditEmployee()}>Редактировать</button> */}
                <button>Редактировать</button>
                {/* <button onClick={() => handleDeleteEmployee()}>Удалить</button> */}
                <button>Удалить</button>
                {/* <button onClick={() => handleTasks()}>Задачи</button> */}
                <button>Задачи</button>
                {/* <button onClick={() => handleReport()}>Отчет</button> */}
                <button>Отчет</button>
                <input
                    type="text"
                    placeholder="Поиск по ФИО"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* <EmployeeTable employees={employees} /> */}
            </div>
        </div>
    );
};

export default MainPage;