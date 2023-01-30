import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const navagencylogin = () => {
    navigate("/loginadmin");
  };

  // const navagencyreg = () => {
  //   navigate("/registeradmin");
  // };

  return (
    <div className='registerusercontainer'>
      <div className='formuserregister'>
        <div style={{
          width: "100%",
          height: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <h3 className='headingregisteruser'>Agency Log-In</h3>
          <button className='btnselectlogintype' onClick={navagencylogin} type='button'>Login</button>
          {/* <button  className='btn' onClick={navagencyreg} type='button'>Register</button><br /><br /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;