import React, { useState } from 'react';

const AdminPage = ({ users }) => {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAddUser = () => {
    // Add logic to handle adding user
  };

  const handleDeleteUser = (username) => {
    // Add logic to handle deleting user
  };

  return (
    <div className="container">
      <h2>Admin Page</h2>
      <div>
        <h3>User List</h3>
        <ul>
          {users.map(user => (
            <li key={user.username}>
              {user.username}
              <button onClick={() => handleDeleteUser(user.username)} className="btn btn-danger btn-sm ml-2">Delete</button>
            </li>
          ))}
        </ul>
        <div className="form-inline mt-3">
          <input 
            type="text" 
            className="form-control mr-2" 
            placeholder="Username" 
            value={newUser} 
            onChange={(e) => setNewUser(e.target.value)} 
          />
          <input 
            type="password" 
            className="form-control mr-2" 
            placeholder="Password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
          />
          <button onClick={handleAddUser} className="btn btn-primary">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
