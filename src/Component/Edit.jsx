import React, { useState } from "react";

const Edit = (props) => {
  const [username, setUsername] = useState(props.data.name);
  const [descript, setDescript] = useState(props.data.desg);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    props.saveEdit(props.data.id, username, descript); // call the saveEdit function from props with the updated data
  };

  return (
    <div className="form-outer">
      <h2 className="form-title"> Edit Details</h2>
      <form className="form-body" onSubmit={handleSubmit}>
        <div>
          <label className="input-label "> Name</label>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />
          <label className="input-label">Designation</label>
          <input
            type="text"
            placeholder="Designation"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
        </div>

        <button className="btn btn-success" type="submit">
          Save
        </button>

        <button className="btn btn-danger" onClick={props.cancelEdit}>
          Cancel
        </button>

        <br />
      </form>
    </div>
  );
};

export default Edit;
