import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate= useNavigate();
  const handleUser=()=>{
    navigate('/userdetails')
  }
  return (
    <div>
      welcome to admin panel
      <Button onClick={handleUser}>User Details</Button>
    </div>
  )
}

export default AdminDashboard
