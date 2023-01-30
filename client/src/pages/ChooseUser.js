import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ChooseUser.css";

const ChooseUser = () => {
  const navigate = useNavigate();

  const navuserregister = () => {
    navigate("/registeruser");
  };

  const navstoreregister = () => {
    navigate("/registerstore");
  };

  const navsellerregister = () => {
    navigate("/registermarketer");
  };

  return (
    <div className='chooseuser'>
      <div className='chooseuser1'>
        <div className='btnregisterevntbtn'>
          <h3 className='headingchooseuserregister'>Select Reg. Type</h3>
          <button className='btnuserregister' onClick={navuserregister} type='button'>User</button>
          <button className='btnuserregister' onClick={navstoreregister} type='button'>Store</button>
          <button className='btnuserregister' onClick={navsellerregister} type='button'>Marketer</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;