import React, { useState, useEffect } from 'react';

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    Email: "",
    position: "",
  });
  const [isEditing, setIsEditing] = useState(false); // State to check if we're editing
  const [editIndex, setEditIndex] = useState(null); // State to store index of user being edited

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const handleRefresh = (e) => {
      if (e.persisted || e.type === "beforeunload") {
        localStorage.removeItem("users");
      }
    };

    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    if (!formData.name || !formData.age || !formData.Email || !formData.position) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return false;
    }

    if (isNaN(formData.age)) {
      alert("กรุณากรอกอายุเป็นตัวเลขเท่านั้น");
      return false;
    }

    return true;
  };

  const handleAddUser = () => {
    if (isFormValid()) {
      const updatedUsers = [...users, formData];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setFormData({ name: "", age: "", Email: "", position: ""});
    }
  };

  const handleEditUser = (index) => {
    setFormData(users[index]); // Populate form with user data
    setIsEditing(true); // Set editing state
    setEditIndex(index); // Store the index of the user being edited
  };

  const handleUpdateUser = () => {
    if (isFormValid()) {
      const updatedUsers = users.map((user, index) =>
        index === editIndex ? formData : user
      );
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setFormData({ name: "", age: "", Email: "", position: ""});
      setIsEditing(false); // Reset editing state
      setEditIndex(null); // Clear edit index
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <div className="form-container">
        <form className="input-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" name="name" value={formData.name} onChange={handleInputChange}/>
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="Enter Age" name="age" value={formData.age} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" name="Email" value={formData.Email} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Job Position</label>
            <input type="text" placeholder="Enter Job Position" name="position" value={formData.position} onChange={handleInputChange} />
          </div>

          <button
            type="button"
            className="add-data-button"
            onClick={isEditing ? handleUpdateUser : handleAddUser}
          >
            {isEditing ? "Update" : "Add Data"}
          </button>
        </form>
      </div>

      <div className="table-container">
        <table className="user-table">
          <thead className="table-header">
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {users.map((user, index) => (
              <tr key={index} className="table-row">
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.Email}</td>
                <td>{user.position}</td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-button" onClick={() => handleEditUser(index)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDeleteUser(index)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
