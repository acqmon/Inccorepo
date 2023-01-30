import React from 'react';
import { useNavigate } from 'react-router-dom';

const Promotionandsalespage = () => {
  const navigate = useNavigate();

  const navpromotionrecharge = () => {
    navigate("/promotionrecharge");
  };
  const navsalesrecharge = () => {
    navigate("/salesrecharge");
  };
  return (
    <div className='selectlogintype'>
      <div className='selectlogintype1'>
      <div className='selectlogintypeeventbtn'>
      <button className='btnselectlogintype' onClick={navpromotionrecharge} type='button'>Promotion Recharge</button>
      <button className='btnselectlogintype' onClick={navsalesrecharge} type='button'>Sales Recharge</button>
      </div>
      </div>
    </div>
  );
};

export default Promotionandsalespage;