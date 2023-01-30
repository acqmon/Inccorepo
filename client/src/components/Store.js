import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Store.css";

const Store = () => {
  const navigate = useNavigate();

  // const navuserrecharge = () => {
  //   navigate("/userrecharge");
  // };
  // const navstorerecharge = () => {
  //   navigate("/storerecharge");
  // };
  // const navstoresalesrecharge = () => {
  //   navigate("/storesalesrecharge");
  // };
  // const navmarketersalesrecharge = () => {
  //   navigate("/marketersalesrecharge");
  // };
  const navallrecharge = () => {
    navigate("/storeallrechargepage");
  };
  const navmyqrcode = () => {
    navigate("/myqrcode");
  };
  const navhistory = () => {
    navigate("/storechoosehistory");
  };

  const [storeid, setStoreid] = useState("");
  const [usertotaldiscount, setUsertotaldiscount] = useState("");
  const [sellertotaldiscount, setSellertotaldiscount] = useState("");
  const [totalrechargeamountpayable, setTotalrechargeamountpayable] = useState("");
  const [storepurchasebalance, setStorepurchasebalance] = useState("");
  const [storesellingbalance, setStoresellingbalance] = useState("");
  const [curdisc, setCurdisc] = useState("");

  const totaldiscount = usertotaldiscount + sellertotaldiscount;
  const usertotal = () => {
    axios.post("http://localhost:5000/userdiscounttotal", {
      storeid: storeid
    }).then((response) => {
      setUsertotaldiscount(response.data[0].storediscount);
      setSellertotaldiscount(response.data[0].sellerdiscount);
      console.log(response);
    });
  };

  const rechargetotal = () => {
    axios.post("http://localhost:5000/totalrechargeamount", {
      storeid: storeid
    }).then((response) => {
      setTotalrechargeamountpayable(response.data[0].totalrechargeamount);
    });
  };

  const totalpurchasebalance = () => {
    axios.post("http://localhost:5000/getpurchasebalancestore", {
      storeid: storeid
    }).then((response) => {
      setStorepurchasebalance(response.data[0].totalpurchasebalancestore);
    });
  };
  const totalsellingbalance = () => {
    axios.post("http://localhost:5000/getsellingbalancestore", {
      storeid: storeid
    }).then((response) => {
      setStoresellingbalance(response.data[0].totalsellingbalancestore);
    });
  };
  const totaldiscountpercentage = () => {
    axios.post("http://localhost:5000/getdiscountpercentagestore", {
      storeid: storeid
    }).then((response) => {
      setCurdisc(response.data[0].disc);
    });
  };

  useEffect(() => {
    rechargetotal();
    totalpurchasebalance();
    totalsellingbalance();
    totaldiscountpercentage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeid]);

  const getstoreid = () => {
    axios.get("http://localhost:5000/loginstore").then((response) => {
      if (response.data.loggedin === true) {
        setStoreid(response.data.user[0].storeid);
      }
    });
  };

  useEffect(() => {
    getstoreid();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('storeid');
    if (data) {
      setStoreid(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storeid', `${storeid}`);
  });

  useEffect(() => {
    if (storeid !== "") {
      usertotal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeid]);

  const logoutuser = () => {
    axios.post("http://localhost:5000/logout").then(() => {
      navigate("/");
    });
  };

  return (
    <div className='storemainpage'>

      <div className='navstore'>
        <input className='storeidinput' defaultValue={storeid} type="text" readOnly />
        <button className='logoutbtnstore' onClick={logoutuser}>Log-Out</button>
      </div>

      <div className='storemainpage1'>
        <div className='info'>

          Total Discount Given <div className='inputdiv'><input className='inputinfo' defaultValue={usertotaldiscount} type="number" readOnly /></div>
          Total Discount Received <div className='inputdiv'><input className='inputinfo' defaultValue={sellertotaldiscount} type="number" readOnly /></div>
          Total Receivable Amount <div className='inputdiv'><input className='inputinfo' defaultValue={totaldiscount} type="number" readOnly /></div>

          Recharge Amount Payable <div className='inputdiv'><input className='inputinfo' defaultValue={totalrechargeamountpayable}
          type="number" readOnly /></div>
          Purchase Balance <div className='inputdiv'><input className='inputinfo' defaultValue={storepurchasebalance} placeholder={0}type="number" readOnly /></div>
          Selling Balance <div className='inputdiv'><input className='inputinfo' defaultValue={storesellingbalance} placeholder={0} type="number" readOnly /></div>
          Current Discount % <div className='inputdiv'><input className='inputinfo' defaultValue={curdisc} placeholder={0} type="number" readOnly /></div>

        </div>

        <div className='storeeventbtn'>

          {/* <button className='btns' onClick={navstorerecharge} type='button'>Store Recharge</button>
          <button className='btns' onClick={navstoresalesrecharge} type='button'>Store Sales Recharge</button>

          <button className='btns' onClick={navmarketersalesrecharge} type='button'>Marketer Sales Recharge</button>
          <button className='btns' onClick={navuserrecharge} type='button'>User Recharge</button> */}

          <button className='btns' onClick={navallrecharge} type='button'>Recharge Page</button>
          <button className='btns' onClick={navhistory} type='button'>History</button>
          <button className='btns' onClick={navmyqrcode} type='button'>my QR-Code</button>
        </div>
      </div>

    </div>

  );
};

export default Store;