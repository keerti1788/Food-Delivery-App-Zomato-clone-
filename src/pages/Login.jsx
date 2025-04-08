import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }) // ← use correct keys
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Login Successful');

        if (data.role === 'admin') {
          window.location.href = 'https://admin.yoursite.com';
        } else {
          navigate('/');
        }
      } else {
        setMessage(data.message || 'Login failed. Please try again.');
      }

    } catch (error) {
      console.error('Error:', error);
      setMessage('Login failed. Please check your connection.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" required />
        </div>
        <div className="login-form">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="login-form">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        {message && (
          <h2 style={{ color: message === 'Login Successful' ? 'green' : 'red', marginTop: '10px' }}>
            {message}
          </h2>
        )}
      </form>

      <div className="login-image">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.0vx6GP-CGH8rZcuGrSEDkQHaE7&pid=Api&P=0&h=180"
          style={{ width: '900px', height: '500px' }}
          alt="login"
        />
      </div>
    </div>
  );
};

export default Login;
