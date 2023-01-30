import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../userregisterpage/Registeruser.css";

const Login = () => {
  const navigate = useNavigate();

  const [storeid, setstoreid] = useState("");
  const [password, setPassword] = useState("");

  // const [loginstorestatus, setloginstorestatus] = useState("");

  axios.defaults.withCredentials = true;

  const storelogin = () => {
    axios.post("http://localhost:5000/loginstore", {
      storeid: storeid,
      password: password
    }).then((response) => {
      if (response.data.messege) {
        // setloginstorestatus(response.data.messege);
        alert(response.data.messege);
      } else {
        // setloginstorestatus(response.data[0].firstname);
        navigate("/homestore");
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/loginstore").then((response) => {
      if (response.data.loggedin === true) {
        // setloginstorestatus(response.data.user[0].firstname);
      }
    });
  }, []);

  return (
    <div className='registerusercontainer'>
      <form className='formuserregister'>
        <h3 className='headingregisteruser'>Login</h3>

        Storeid <div className='inputdiv'><input className='input' onChange={(e) => { setstoreid(e.target.value); }} type="username" /></div>
        Password <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="password" /></div>
        <button className='btnregisteruser' onClick={storelogin} type='button'>Log-In</button>

      </form>
    </div>
  );
};

export default Login;