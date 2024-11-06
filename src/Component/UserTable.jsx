import React, { useState, useEffect } from 'react';
import "./UserTable.css";

const UserTableHome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลผู้ใช้จาก localStorage เมื่อคอมโพเนนต์ถูกเรียกใช้
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers)); // แปลงข้อมูลจาก JSON เป็น array
    }
  }, []);

  return (
    <div className="table-container">
      <h2>User Information</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.Email}</td>
                <td>{user.position}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No user data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTableHome;