import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import Results from "./Results";
import "./App.css";
import logo from "./assets/ravens.png";

function App() {
  const [employees, setEmployees] = useState([]);
  const [expoName, setExpoName] = useState("");
  const [expoPercent, setExpoPercent] = useState("");
  const [foodSales, setFoodSales] = useState("");
  const [expoAdded, setExpoAdded] = useState(false);

  // Add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Add expo as an employee
  const addExpo = () => {
    if (!expoName || !expoPercent || !foodSales) return;
    // Only one expo allowed
    if (expoAdded) return;
    setEmployees([
      {
        name: expoName,
        tip: 0,
        hours: 0,
        isExpo: true,
        expoPercent: parseFloat(expoPercent),
        foodSales: parseFloat(foodSales),
      },
      ...employees,
    ]);
    setExpoAdded(true);
  };

  // Remove an employee by index
  const removeEmployee = (index) => {
    // If removing expo (first and isExpo), reset expoAdded
    if (employees[index]?.isExpo) setExpoAdded(false);
    setEmployees(employees.filter((_, i) => i !== index));
  };

  // Reset all fields
  const resetAll = () => {
    setEmployees([]);
    setExpoName("");
    setExpoPercent("");
    setFoodSales("");
    setExpoAdded(false);
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
        <form
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <input
            name="expoName"
            placeholder="Expo Name"
            value={expoName}
            onChange={(e) => setExpoName(e.target.value)}
            disabled={expoAdded}
          />
          <input
            name="expoPercent"
            type="number"
            min="0"
            max="100"
            step="0.01"
            placeholder="Expo Tip-Out % of Food Sales (e.g. 10)"
            value={expoPercent}
            onChange={(e) => setExpoPercent(e.target.value)}
            disabled={expoAdded}
          />
          <input
            name="foodSales"
            type="number"
            min="0"
            step="0.01"
            placeholder="Total Food Sales"
            value={foodSales}
            onChange={(e) => setFoodSales(e.target.value)}
            disabled={expoAdded}
          />
          <button
            type="button"
            onClick={addExpo}
            disabled={expoAdded}
            style={{ width: "90%", maxWidth: 260 }}
          >
            {expoAdded ? "Expo Added" : "Add Expo"}
          </button>
        </form>
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
