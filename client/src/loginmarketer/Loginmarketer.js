import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../userregisterpage/Registeruser.css";

const Login = () => {
  const navigate = useNavigate();

  const [marketerid, setmarketerid] = useState("");
  const [password, setPassword] = useState("");

  // const [loginmarketerstatus, setloginmarketerstatus] = useState("");

  axios.defaults.withCredentials = true;

  const marketerlogin = () => {
    axios.post("http://localhost:5000/loginmarketer", {
      marketerid: marketerid,
      password: password
    }).then((response) => {
      if (response.data.messege) {
        // setloginmarketerstatus(response.data.messege);
        alert(response.data.messege);
      } else {
        // setloginmarketerstatus(response.data[0].firstname);
        navigate("/homemarketer");
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/loginmarketer").then((response) => {
      if (response.data.loggedin === true) {
        // setloginmarketerstatus(response.data.user[0].firstname);
      }
    });
  }, []);

  return (
    <div className='registerusercontainer'>
      <form className='formuserregister'>
        <h3 className='headingregisteruser'>Login</h3>

        Marketer-ID <div className='inputdiv'><input className='input' onChange={(e) => { setmarketerid(e.target.value); }} type="username" /></div>
        Password <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="password" /></div>
        <button className='btnregisteruser' onClick={marketerlogin} type='button'>Log-In</button>

      </form>
    </div>
  );
};

export default Login;