import React, { useState } from "react";

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", tip: "", hours: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.tip || !form.hours) return;
    onAdd({
      name: form.name,
      tip: parseFloat(form.tip),
      hours: parseFloat(form.hours),
    });
    setForm({ name: "", tip: "", hours: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Employee Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="tip"
        type="number"
        placeholder="Tip Amount"
        value={form.tip}
        onChange={handleChange}
      />
      <input
        name="hours"
        type="number"
        placeholder="Hours Worked"
        value={form.hours}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
