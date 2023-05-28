import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate= useNavigate();
  const handleUser=()=>{
    navigate('/userdetails')
  }
  const handleImage=()=>{
    navigate('/imagedetails')
  }
  return (
    <div>
      welcome to admin panel<br/>
      <Button onClick={handleUser}>User Details</Button>
      <Button onClick={handleImage}>Images Details</Button>
    </div>
  )
}

export default AdminDashboard
