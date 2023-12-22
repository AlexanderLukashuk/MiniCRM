import React, { useState, useEffect } from 'react';
import AddEmplloyee from './AddEmployee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleAddEmployee = newEmployee => {
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
      <AddEmplloyee onAddEmployee={handleAddEmployee} />
    </div>
  );
};

export default EmployeeList;
