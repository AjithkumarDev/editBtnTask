import React, { useState } from "react";
import "./Addedit.css";

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [desg, setDesg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(name);
    setDesg(desg);
    addEmployee(name, desg);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h2>Add Employee</h2>
              <div className="row">
                <div className="col-12">
                  <label>Name:</label>
                  <input
                    className="form form-control"
                    style={{ justifyItems: "center" }}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <label>Designation:</label>
                  <input
                    className="form form-control"
                    style={{ justifyItems: "center" }}
                    type="text"
                    value={desg}
                    onChange={(e) => setDesg(e.target.value)}
                  />
                </div>
              </div>
              <button
                href="/"
                style={{ margin: " 10px 0" }}
                className="btn btn-primary form-control"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddEmployee;
