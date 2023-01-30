import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../userregisterpage/Registeruser.css";

const Login = () => {
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  // const [loginuserstatus, setloginuserstatus] = useState("");

  axios.defaults.withCredentials = true;

  const userlogin = () => {
    axios.post("http://localhost:5000/loginuser", {
      userid: userid,
      password: password
    }).then((response) => {
      if (response.data.messege) {
        // setloginuserstatus(response.data.messege);
        alert(response.data.messege);
      } else {
        // setloginuserstatus(response.data[0].firstname);
        navigate("/homeuser");
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/loginuser").then((response) => {
      if (response.data.loggedin === true) {
        // setloginuserstatus(response.data.user[0].firstname);
      }
    });
  }, []);

  return (
    <div className='registerusercontainer'>
      <form className='formuserregister'>
        <h3 className='headingregisteruser'>Login</h3>

        Enter User ID <div className='inputdiv'><input className='input' onChange={(e) => { setUserid(e.target.value); }} type="username" /></div>
        Enter Password <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }}
          type="password" /></div>
        <button className='btnregisteruser' onClick={userlogin} type='button'>Log-In</button>

      </form>
    </div>
  );
};

export default Login;