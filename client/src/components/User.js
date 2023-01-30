import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./User.css";

const User = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [purchasebalance, setPurchasebalance] = useState("");
  const [discount, setDiscount] = useState("");
  const [contact, setContact]=useState("")

  const navpurchase = () => {
    navigate("/purchase");
    console.log("hghg");
  };
  const navqrcode = () => {
    navigate("/qrcode");
  };
  const navhistory = () => {
    navigate("/userhistory");
  };

  const getpurchasebalance = () => {
    axios.post("http://localhost:5000/getuserpurchasebalancetotal", {
      userid: userid
    }).then((response) => {
      setPurchasebalance(response.data[0].totalpurchbalance);
    });
  };
  const discountamount = () => {
    axios.post("http://localhost:5000/getuserdiscountamount", {
      userid: userid
    }).then((response) => {
      setDiscount(response.data[0].discountamount);
    });
  };

  useEffect(() => {
    discountamount();
  });

  useEffect(() => {
    getpurchasebalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const getuserid = () => {
    axios.get("http://localhost:5000/loginuser").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].userid);
        setContact(response.data.user[0].contact);
      }
      console.log(response.data.user[0].userid);
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

  const logoutuser = ()=>{
    axios.post("http://localhost:5000/logout").then(()=>{
      navigate("/")
    })
  }

  return (
    <div className='userloginmainpage'>


      <div className='navbaruserloginmainpage'>
        <p className='useridnavbar'> {userid}</p>
        <button className='logoutuserloginnavbar' onClick={logoutuser}>Log-out</button>
      </div>

      <div className='userloginmainpage1'>
        <h1 className='usermainheading'>{contact}</h1>
        <div className='usermaininfo'>
          <h3 >Balance</h3>
          <p >{purchasebalance}</p>
          <h3 >Discount</h3>
          <p > {discount}</p>
        </div>
      

      <div className='btnusermainbtn'>
        <button className='btnusermainpage' onClick={navpurchase} type='button'>Purchase</button>
        <button className='btnusermainpage' onClick={navqrcode} type='button'>My QR_Code</button>
        <button className='btnusermainpage' onClick={navhistory} type='button'>History</button>
        </div>
      </div>

    </div>
  );
};

export default User;