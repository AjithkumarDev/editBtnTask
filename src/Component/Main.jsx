import React, { useState } from "react";
import Edit from "./Edit";
import Table from "./Table";

const Main = () => {
  const [data, setData] = useState([
    { id: 1, name: "John", desg: "Software Engineer" },
    { id: 2, name: "Jane", desg: "Web Developer" },
    { id: 3, name: "Bob", desg: "UI/UX Designer" },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const saveEdit = (id, updatedUser) => {
    setData((prevData) =>
      prevData.map((user) => (user.id === id ? updatedUser : user))
    );
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  const deleteUser = (id) => {
    setData((prevData) => prevData.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <a href="/add" className="btn btn-success" style={{ float: "left" }}>
        Add Employee
      </a>
      {editing ? (
        <Edit data={currentUser} saveEdit={saveEdit} cancelEdit={cancelEdit} />
      ) : (
        console.log("Ajee")
      )}
      <Table
        data={data}
        editUser={(user) => {
          setCurrentUser(user);
          setEditing(true);
        }}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default Main;
