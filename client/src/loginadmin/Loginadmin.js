import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../userregisterpage/Registeruser.css";

const Login = () => {
  const navigate = useNavigate();

  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");

  // const [loginadminstatus, setLoginadminstatus] = useState("");

  axios.defaults.withCredentials = true;

  const adminlogin = () => {
    axios.post("http://localhost:5000/loginadmin", {
      adminid: adminid,
      password: password
    }).then((response) => {
      if (response.data.messege) {
        // setLoginadminstatus(response.data.messege);
        alert(response.data.messege);
      } else {
        // setLoginadminstatus(response.data[0].firstname);
        navigate("/homemanager");
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/loginadmin").then((response) => {
      if (response.data.loggedin === true) {
        // setLoginadminstatus(response.data.user[0].firstname);
      }
    });
  }, []);

  return (
    <div className='registerusercontainer'>
      <form className='formuserregister'>
      <h3 className='headingregisteruser'>Login</h3>
     
        ManagerID: <div className='inputdiv'><input className='input' onChange={(e) => { setAdminid(e.target.value); }} type="username" /></div>
        Password: <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="password" /></div>
        <button className='btnregisteruser' onClick={adminlogin} type='button'>Log-In</button>
  
      </form>
    </div>
  );
};

export default Login;