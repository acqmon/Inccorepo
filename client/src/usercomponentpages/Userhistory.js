import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userhistory = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");

  const navpurchasehistory = () => {
    navigate("/purchasehistoryuser");
  };
  const navrechargehistory = () => {
    navigate("/rechargehistoryuser");
  };

  const getuserid = () => {
    axios.get("http://localhost:5000/loginuser").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].userid);
      }
    });
  };

  useEffect(() => {
    getuserid();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('userid');
    if (data) {
      setUserid(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userid', `${userid}`);
  });

  return (
    <div className='selectlogintype'>
      <div className='selectlogintype1'>
      <div className='selectlogintypeeventbtn'>
        <button className='btnselectlogintype' onClick={navpurchasehistory} type='button'>Purchase History</button><br /><br />
        <button className='btnselectlogintype' onClick={navrechargehistory} type='button'>Recharge History</button>
      </div>
      </div>

    </div>
  );
};

export default Userhistory;