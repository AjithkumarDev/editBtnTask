import React, { useState } from "react";

import { Data } from "./Data";
import AddEmployee from "./Addedit";

const Table = () => {
  const [employees, setEmployees] = useState(Data);

  const handleDelete = (id) => {
    setEmployees((prevState) =>
      prevState.filter((employee) => employee.id !== id)
    );
  };

  const handleDetails = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    alert(
      `The Employee Name is : ${employee.name} ,The Employee Designation is: ${employee.desg} `
    );
    console.log(employee);
  };

  return (
    <>
      <AddEmployee />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.desg}</td>
              <td>
                <a href={`/edit/${employee.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ padding: "0 5px " }}
                    // onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                </a>

                <button
                  className="btn btn-danger"
                  style={{ padding: "0 5px " }}
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info"
                  style={{ padding: "0 5px " }}
                  onClick={() => handleDetails(employee.id)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
