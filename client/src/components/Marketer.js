import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Marketer.css";

const Marketer = () => {
  const navigate = useNavigate();
  const [marketerid, setMarketerid] = useState("");
  const [sellingbalance, setSellingbalance] = useState("");
  const [discount, setDiscount] = useState("");
  const [contact, setContact] = useState("");
  const [pendingpromotion, setPendingpromotion]=useState("")
  const [pendingsalespromotion, setPendingsalespromotion]=useState("")

  const navmyqrcode = () => {
    navigate("/marketerqrcode");
  };
  const navsale = () => {
    navigate("/sellingpage");
  };
  const navhistory = () => {
    navigate("/Choosehistorymarketer");
  };

  const gettotalsellingbalance = () => {
    axios.post("http://localhost:5000/getsellingbalancemarketer", {
      marketerid: marketerid
    }).then((response => {
      setSellingbalance(response.data[0].totalsellingbalance);
    }));
  };

  const getdiscount = () => {
    axios.post("http://localhost:5000/getsalesdiscountmarketer", {
      marketerid: marketerid
    }).then((response => {
      setDiscount(response.data[0].discountamount);
    }));
  };

  const getpromotion = () => {
    axios.post("http://localhost:5000/getpromotionbalance", {
      marketerid: marketerid
    }).then((response => {
      setPendingpromotion(response.data[0].totalpromotionbalance);
    }));
  };

  const getsalespromotion = () => {
    axios.post("http://localhost:5000/getsalespromotionbalance", {
      marketerid: marketerid
    }).then((response => {
      setPendingsalespromotion(response.data[0].totalsalespromotionbalance);
    }));
  };

  

  useEffect(() => {
    gettotalsellingbalance();
    getpromotion()
    getsalespromotion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketerid]);

  useEffect(() => {
    getdiscount();
  });

  const getmarketerid = () => {
    axios.get("http://localhost:5000/loginmarketer").then((response) => {
      if (response.data.loggedin === true) {
        setMarketerid(response.data.user[0].marketerid);
        setContact(response.data.user[0].contact);
      }
    });
  };

  useEffect(() => {
    getmarketerid();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('Marketerid');
    if (data) {
      setMarketerid(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Marketerid', `${marketerid}`);
  });


  const logoutuser = () => {
    axios.post("http://localhost:5000/logout").then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <div className='userloginmainpage'>

        <div className='navbaruserloginmainpage'>
          <p className='useridnavbar'>{marketerid}</p>
          <button className='logoutuserloginnavbar' onClick={logoutuser}>Log-Out</button>
        </div>

        <div className='userloginmainpage1'>
          <h1 className='usermainheading'>{contact}</h1>
          <div className='usermaininfo'>

            <h3>Sales Balance</h3>
            <p >{sellingbalance}</p>
            <h3>Discount</h3>
            <p > {discount}</p>
            <h3>Pending Promotion</h3>
            <p >{pendingpromotion}</p>
            <h3>Pending Sales Promotion</h3>
            <p > {pendingsalespromotion}</p>

          </div>
          <div className='btnusermainbtn'>
            <button className='btnusermainpage' onClick={navmyqrcode} type='button'>MyQRcode</button>
            <button className='btnusermainpage' onClick={navsale} type='button'>SellingPage</button>
            <button className='btnusermainpage' onClick={navhistory} type='button'>History</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Marketer;