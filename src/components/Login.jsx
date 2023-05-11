import React, { useState } from "react";
import "./Login.css";
import userData from './data.json';
import adminData from './admin.json';
import companyData from './company.json';
import { Link, useNavigate} from "react-router-dom";


function Login() {
  const [activeTab, setActiveTab] = useState("admin");
  const [username, setUsername] = useState('');
  const [name,setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedin,setLoggedin] = useState("false");
  
  const navigate = useNavigate(); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    let users = [];
    if (activeTab === "admin") {
      users = adminData.users;
    } else {
      users = companyData.users;
    }
   
      const user = users.find(
        (u) => u.username === username &&  u.name === name && u.password === password
      );
    
    if (user) {
      console.log('Login successful');
      setLoggedin(true);
      setError('');

      // redirect to dashboard
      if (activeTab === "admin") {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    
      // redirect to dashboard
    } else {
      setError('Invalid username or password');
    }

    // if(loggedin){
    //     return <Navigate to="/Admin" />;
    // }


  };
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <div className="login-form-container">
        <div className="login-tab-container">
          <button
            className={`login-tab ${activeTab === "admin" ? "active" : ""}`}
            onClick={() => handleTabChange("admin")}
          >
            Admin
          </button>
          <button
            className={`login-tab ${activeTab === "company" ? "active" : ""}`}
            onClick={() => handleTabChange("company")}
          >
            Company
          </button>
        </div>


        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username}
            onChange={(e) => setUsername(e.target.value)} />

<label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name}
            onChange={(e) => setName(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button className="login-button">Login</button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
