import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import Results from "./Results";
import "./App.css";
import logo from "./assets/ravens.png";

function App() {
  const [employees, setEmployees] = useState([]);

  // Add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Remove an employee by index
  const removeEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  // Reset all fields
  const resetAll = () => {
    setEmployees([]);
  };

  return (
    <div className="background-box">
      <div className="section-box">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginBottom: "1.2rem",
          }}
        >
          <h1 style={{ margin: 0 }}>Tip Calculator</h1>
          <div className="logo-img-circle">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
        </div>
        <EmployeeForm onAdd={addEmployee} />
      </div>
      <div className="section-box">
        <EmployeeList employees={employees} onRemove={removeEmployee} />
      </div>
      <div className="section-box">
        <Results employees={employees} />
      </div>
      <button
        className="reset-btn"
        onClick={resetAll}
        style={{ marginTop: "1.5rem", backgroundColor: "red" }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
