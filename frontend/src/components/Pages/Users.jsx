import React from "react";
import "./Users.css";

const Users = () => {
  // Dummy data untuk daftar pengguna
  const users = [
    { name: "John Doe", email: "john.doe@example.com", status: "Active" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive" },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      status: "Active",
    },
    { name: "Emily Davis", email: "emily.davis@example.com", status: "Active" },
  ];

  return (
    <div className="users">
      <h2>Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
