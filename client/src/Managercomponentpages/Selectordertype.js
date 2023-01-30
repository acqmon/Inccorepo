import React from 'react';
import { useNavigate } from 'react-router-dom';

const Selectordertype = () => {
  const navigate = useNavigate();

  const navpromotionorder = () => {
    navigate('/promotionorder');
  };
  const navsalesorder = () => {
    navigate('/salesorder');
  };

  return (
    <div className='selectlogintype'>
      <div className='selectlogintype1'>
        <div className='selectlogintypeeventbtn'>
          <button className='btnselectlogintype' onClick={navpromotionorder} type='button'>promotion order</button>
          <button className='btnselectlogintype' onClick={navsalesorder} type='button'>sales order</button>
        </div>
      </div>
    </div>
  );
};

export default Selectordertype;