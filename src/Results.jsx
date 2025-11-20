import React from "react";

function Results({ employees }) {
  const totalTip = employees.reduce((sum, emp) => sum + emp.tip, 0);
  const totalHours = employees.reduce((sum, emp) => sum + emp.hours, 0);
  const amountPerHour = totalHours > 0 ? totalTip / totalHours : 0;

  return (
    <div>
      <h2>Results</h2>
      <p>Total Tip Pool: ${totalTip.toFixed(2)}</p>
      <p>Total Hours: {totalHours}</p>
      <p>Amount Per Hour: ${amountPerHour.toFixed(2)}</p>
      <h3>Individual Shares</h3>
      <ul>
        {employees.map((emp, idx) => (
          <li key={idx}>
            {emp.name}: ${(emp.hours * amountPerHour).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
