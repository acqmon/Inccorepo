import React from 'react';
import { useNavigate } from "react-router-dom";

const Storechoosehistory = () => {
  const navigate = useNavigate();

  const navrechargehistory = () => {
    navigate("/rechargehistory");
  };
  const navpurchasehistory = () => {
    navigate("/purchasehistorystore");
  };
  const navsaleshistory = () => {
    navigate("/saleshistorystore");
  };

  return (
    <div className='marketerchoosehistory'>
      <div className='choosemrkhis'>
        <button className='hisbtnmrk' onClick={navrechargehistory} type='button'>Recharge History</button><br /><br />
        <button className='hisbtnmrk' onClick={navpurchasehistory} type='button'>Purchase History</button><br /><br />
        <button className='hisbtnmrk' onClick={navsaleshistory} type='button'>Sales History</button>
      </div>
    </div>
  );
};

export default Storechoosehistory;