import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate= useNavigate();
  const handleAdmin =()=>{
    navigate('/createadmin')

  }
  const handleUser=()=>{
    navigate('/userdetails')
  }
  const handleImage=()=>{
    navigate('/imagedetails')
  }
  const handleImageUpload=()=>{
    navigate('/uploadimage')
  }
  return (
    <div>
      welcome to admin panel<br/>
      <Button onClick={handleAdmin}>Create New Admin</Button>
      <Button onClick={handleUser}>User Details</Button>
      <Button onClick={handleImage}>Images Details</Button>
      <Button onClick={handleImageUpload}>Upload New Image</Button>
    </div>
  )
}

export default AdminDashboard
