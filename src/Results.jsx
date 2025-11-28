import React from "react";

function Results({ employees, totalCash }) {
  // Find expo if present
  const expo = employees.find((emp) => emp.isExpo);
  const regularEmployees = employees.filter((emp) => !emp.isExpo);
  const totalTip = regularEmployees.reduce((sum, emp) => sum + emp.tip, 0);
  const totalHours = regularEmployees.reduce((sum, emp) => sum + emp.hours, 0);
  let expoShare = 0;
  if (expo && expo.expoPercent > 0 && expo.foodSales > 0) {
    expoShare = expo.foodSales * (expo.expoPercent / 100);
  }
  const tipAfterExpo = totalTip - expoShare;
  const amountPerHour = totalHours > 0 ? tipAfterExpo / totalHours : 0;

  // Cash division
  const cashPerHour = totalHours > 0 ? totalCash / totalHours : 0;
  const totalCashDisplay = totalCash ? totalCash.toFixed(2) : "0.00";

  return (
    <div>
      <h2>Results</h2>
      <p>Total Tip Pool: ${totalTip.toFixed(2)}</p>
      <p>Total Cash Pool: ${totalCashDisplay}</p>
      {expo && (
        <>
          <p>Food Sales: ${expo.foodSales?.toFixed(2)}</p>
          <p>
            Expo Tip-Out: {expo.expoPercent}% of food sales = $
            {expoShare.toFixed(2)}
          </p>
        </>
      )}
      <p>Total Hours: {totalHours}</p>
      <p>Amount Per Hour: ${amountPerHour.toFixed(2)}</p>
      <p>Cash Per Hour: ${cashPerHour.toFixed(2)}</p>
      <h3>Individual Shares</h3>
      <ul>
        {expo && (
          <li key="expo">
            {expo.name} (Expo): ${expoShare.toFixed(2)}
          </li>
        )}
        {regularEmployees.map((emp, idx) => (
          <li key={idx}>
            {emp.name}: ${(emp.hours * amountPerHour).toFixed(2)} + $
            {(emp.hours * cashPerHour).toFixed(2)} cash
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
