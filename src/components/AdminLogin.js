import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/admin/login', { username, password });
      if (response.status === 200) {
        history.push('/admin/dashboard');
      }
    } catch (error) {
      console.error('Login failed', error);
      history.push('/login-fail');
    }
  };

  return (
    <div>
      <h1 className="mt-5 tb mb-3">Admin Login</h1>
      <div className="d-flex flex-row  justify-content-center">
      <form onSubmit={handleSubmit} className="car">
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="pranava"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="pranava"/>
        </div>
        <button type="submit" className="btn-work-reg btn btn-secondary mt-0 mb-3">Login</button>
        Don't have an account yet?
        <Link to='/admin/register'><button id="register-link" className="btn-work-reg btn btn-secondary mt-0">Register</button></Link>
      </form>
      </div>  
    </div>
  );
};

export default AdminLogin;
