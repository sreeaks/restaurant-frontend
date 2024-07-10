// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

// const AdminRegister = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/admin/register', { username, password });
//       if (response.status === 201) {
//         history.push('/login');
//       }
//     } catch (error) {
//       console.error('Registration failed', error);
//       history.push('/register-fail');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/admin/register', { username, password });
      if (response.status === 201) {
        history.push('/login');
      }
    } catch (error) {
      console.error('Registration failed', error);
      history.push('/register-fail');
    }
  };

  return (
    <div>
      <h1 className="mt-5 tb mb-3">Admin Register</h1>
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
        <button type="submit" className="btn-work-reg btn btn-secondary mt-0 mb-3">Register</button>
        <p className="text-light mt-3 mb-0">Already have an account?</p>
        <Link to='/admin/login'><button id="login-link" className="btn-work  btn btn-secondary mt-0">Login</button></Link>
      </form>
      </div>  
    </div>
  );
};

export default AdminRegister;


