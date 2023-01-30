import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Selectlogintype.css";

const Login = () => {
  const navigate = useNavigate();

  const navuserlogin = () => {
    navigate("/loginuser");
  };

  const navstorelogin = () => {
    navigate("/loginstore");
  };

  const navmarketerlogin = () => {
    navigate("/loginmarketer");
  };

  return (
    <div className='selectlogintype'>
      <div className='selectlogintype1'>
        <h1 className='headingselectlogintype'>SELECT LOGIN-TYPE</h1>
        <div className='selectlogintypeeventbtn'>
          <button className='btnselectlogintype' onClick={navuserlogin} type='button'>User</button>
          <button className='btnselectlogintype' onClick={navstorelogin} type='button'>Store</button>
          <button className='btnselectlogintype' onClick={navmarketerlogin} type='button'>Marketer</button>
        </div>
      </div>
    </div>
  );
};

export default Login;