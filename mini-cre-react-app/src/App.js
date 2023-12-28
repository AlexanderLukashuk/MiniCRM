// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import EmployeeList from './EmployeeList';
// import MainPage from './MainPage';
// import AddEmplloyeePage from './AddEmployeePage';

// const App = () => {
//   return (
//     <div>
//       <h1>MiniCRM</h1>
//       {/* <EmployeeList /> */}
//       <MainPage />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from "./HomePage";
import EmployeeTaskPage from "./EmployeeTasksPage";
import OverdueTaskPage from "./OverdueTasksPage";
import AddTaskPage from "./AddTaskPage";
import EditTaskPage from "./EditTaskPage";
import DeleteTaskPage from "./DeleteTaskPage";
import AddEmplloyeePage from "./AddEmployeePage";
import DeleteEmployeePage from "./DeleteEmployeePage";
import EditEmployeeListItem from "./EditEmployeeListItem";
import EditEmployeePage from "./EditEmployeePage";
import EmployeeList from "./EmployeeList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add-task">Add Task</Link>
            </li>
            <li>
              <Link to="/edit-task">Edit Task</Link>
            </li>
            <li>
              <Link to="/delete-task">Delete Task</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/employee/:id/tasks" element={<EmployeeTaskPage />} />
          <Route path="/overdue-tasks" element={<OverdueTaskPage />} />

          <Route path="/add-employee" element={ <AddEmplloyeePage />} />
          <Route path="/delete-employee" element={ <DeleteEmployeePage />} />
          <Route path="/edit-employee" element={ <EditEmployeeListItem /> } />
          <Route path="/edit-employee/:id" element={ <EditEmployeePage /> } />
          <Route path="employee-tasks" element={ <EmployeeList /> } />
          <Route path="employee-tasks/:id" element={ <EmployeeTaskPage /> } />
          
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/edit-task" element={<EditTaskPage />} />
          <Route path="/delete-task" element={<DeleteTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;