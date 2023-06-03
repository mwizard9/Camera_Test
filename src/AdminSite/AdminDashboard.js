import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate('/createadmin');
  };

  const handleUser = () => {
    navigate('/userdetails');
  };

  const handleImage = () => {
    navigate('/imagedetails');
  };

  const handleImageUpload = () => {
    navigate('/uploadimage');
  };

  // const user = localStorage.getItem('token.name');
  const user = JSON.parse(localStorage.getItem("usertoken"));
  console.log(user?.name,'this is user name')
  return (
    <div className="dashboard-container">
      <div className="user-profile">
        <UserOutlined className="user-icon" />
        <span className="admin-name">{user.name}</span>
      </div>
      <h1>Welcome to the Admin Panel</h1>
      <div className="button-container">
        <Button type="primary" onClick={handleAdmin}>
          Create New Admin
        </Button>
        <Button onClick={handleUser}>User Details</Button>
        <Button onClick={handleImage}>Images Details</Button>
        <Button onClick={handleImageUpload}>Upload New Image</Button>
      </div>
    </div>
  );
};

export default AdminDashboard;