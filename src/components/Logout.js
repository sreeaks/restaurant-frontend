// src/components/Logout.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/logout'); // Assuming you have a logout endpoint on your backend
        localStorage.removeItem('token'); // Clear token from local storage
        history.push('/login'); // Redirect to login page
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

    logout();
  }, [history]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
