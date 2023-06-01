import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("usertoken", JSON.stringify(json))
      // localStorage.setItem('token', json.jwtData);
      history('/selectImage');
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
    background: 'linear-gradient(120deg, #e0eafc, #cfdef3)',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  };
  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
  };

  const signupLinkStyle = {
    textAlign: 'center',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Please, first login to vote</h1>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          Submit
        </button>
      </form>
      <div style={signupLinkStyle}>
        <p>If you don't have an account, then&nbsp;</p>
        <Link to="/signup">Sign up here</Link>
      </div>
    </div>
  );
};

export default Login;