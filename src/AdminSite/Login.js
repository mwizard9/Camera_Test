import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Login = (props) => {
    const[credentials, setCredentials] = useState({email:"",password:""})  
    let navigate = useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/adminlogin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json=await response.json()
    if (json.success){
        //save the auth token and redirect
        localStorage.setItem('token',json.jwtData);
        navigate("/admind")
    }
    else{
        alert("invalid credentials")
    }
        
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='container' >
      <Button>
      <h1>Welcome TO The Admin Panel</h1>
      </Button>
      <TomatoButton>
      <h5>This page is only for only Authorized persons<br/>
      Please Login For View The Admin Portal</h5>
      </TomatoButton>
      <div className='container' style={{width:'50%'}}>
     <form onSubmit={handleSubmit}>
  <div className="mb-3" >
    <label htmlFor="emai1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="password1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
    </div>
   
  )
}

export default Login

const Button = styled.h1`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
border: none;
  color: gray;
  border-color: tomato;
`;
