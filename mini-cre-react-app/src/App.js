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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from "./HomePage";
import EmployeeTaskPage from "./EmployeeTasksPage";
import OverdueTaskPage from "./OverdueTasksPage";
import AddTaskPage from "./AddTaskPage";
import EditTaskPage from "./EditTaskPage";
import DeleteTaskPage from "./DeleteTaskPage";

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

        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="home" component={HomePage} />
          <Route path="/employee/:id/tasks" component={EmployeeTaskPage} />
          <Route path="/overdue-tasks" component={OverdueTaskPage} />

          <Route path="/add-task">
            <AddTaskPage />
          </Route>
          <Route path="/edit-task">
            <EditTaskPage />
          </Route>
          <Route path="/delete-task">
            <DeleteTaskPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;