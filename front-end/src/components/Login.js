import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    console.warn('email,password', email, password);
    let result = await fetch(`${baseUrl}/login`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);

    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/');
    } else {
      alert('please enter correct details');
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='Enter email'
        className='inputBox'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Enter password'
        className='inputBox'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className='appButton' type='button'>
        Login
      </button>
    </div>
  );
};

export default Login;
