import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.jwtData);
      history('/login');
    } else {
      alert('Invalid credentials');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  };

  const formStyle = {
    width: '300px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '8px 12px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" id="name" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={onChange} name="password" id="password" minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            onChange={onChange}
            name="cpassword"
            id="cpassword"
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;