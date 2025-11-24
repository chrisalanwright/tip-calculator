import React from "react";

function EmployeeList({ employees, onRemove }) {
  return (
    <div className="employees-section">
      <h2>Employees</h2>
      <ul>
        {employees.map((emp, idx) => (
          <li key={idx} className="employee-card">
            <div className="employee-info-row">
              <span className="employee-name">
                {emp.isExpo ? `${emp.name} (Expo)` : emp.name}
              </span>
              {emp.isExpo ? (
                <>
                  <span className="employee-tip">
                    {emp.expoPercent}% of ${emp.foodSales} food sales
                  </span>
                  <span className="employee-hours">-</span>
                </>
              ) : (
                <>
                  <span className="employee-tip">${emp.tip} tip</span>
                  <span className="employee-hours">{emp.hours} hours</span>
                </>
              )}
            </div>
            {onRemove && <button onClick={() => onRemove(idx)}>Remove</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
