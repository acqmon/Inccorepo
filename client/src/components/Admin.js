import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [totalusers, setTotalusers] = useState("");
  const [totalstores, setTotalstores] = useState("");
  const [totalmarketers, setTotalmarketers] = useState("");
  const [totalpromotions, setTotalpromotions] = useState("");
  const [totalsalespromotions, setTotalsalespromotions] = useState("");
  const [totalstorerechargecash, setTotalstorerechargecash] = useState("");
  const [totalstorecashpayable, setTotalstorecashpayable] = useState("");
  const [totalmanagercashrecievable, setTotalmanagercashrecievable] = useState("");

  const totaluser = () => {
    axios.get("http://localhost:5000/admintotalusers").then((response) => {
      setTotalusers(response.data[0].id);
    });
  };
  const totalstore = () => {
    axios.get("http://localhost:5000/admintotalstores").then((response) => {
      setTotalstores(response.data[0].id);
    });
  };
  const totalmarketer = () => {
    axios.get("http://localhost:5000/admintotalmarketers").then((response) => {
      setTotalmarketers(response.data[0].id);
    });
  };
  const totalpromotion = () => {
    axios.get("http://localhost:5000/admintotalpromotion").then((response) => {
      setTotalpromotions(response.data[0].sumpromotion);
    });
  };
  const totalsalespromotion = () => {
    axios.get("http://localhost:5000/admintotalsalespromotion").then((response) => {
      setTotalsalespromotions(response.data[0].sumsalespromotion);
    });
  };
  const totalstorerechargeamountreceivable = () => {
    axios.get("http://localhost:5000/admintotalstorecashreceivable").then((response) => {
      setTotalstorerechargecash(response.data[0].sumrechargeamount);
    });
  };
  const totalstorepayable = () => {
    axios.get("http://localhost:5000/admintotalstorecashpayable").then((response) => {
      setTotalstorecashpayable(response.data[0].sumpayable);
    });
  };
  const totalmanagercashreceive = () => {
    axios.get("http://localhost:5000/admintotalmanagercashrecievable").then((response) => {
      setTotalmanagercashrecievable(response.data[0].sumtotalcashmanager);
    });
  };

  useEffect(() => {
    totaluser();
    totalstore();
    totalmarketer();
    totalpromotion();
    totalsalespromotion();
    totalstorerechargeamountreceivable();
    totalstorepayable();
    totalmanagercashreceive();
  }, []);

  const navuserrechargesystem = () => {
    navigate("/userrechargesystem");
  };
  const navstorerechargesystem = () => {
    navigate("/storerechargesystem");
  };
  const navstoresalesrechargesystem = () => {
    navigate("/storesalesrechargesystem");
  };
  const navmarketersalesrechargesystem = () => {
    navigate("/marketersalesrechargesystem");
  };
  const navpromotion = () => {
    navigate("/promotionpage");
  };
  const navsalesorder = () => {
    navigate("/salesorderpage");
  };
  const navproductlist = () => {
    navigate("/productlist");
  };
  const navsupplydiscount = () => {
    navigate("/supplydiscount");
  };
  const navmanagercash = () => {
    navigate("/managercashadmin");
  };
  const navstorecashdetails = () => {
    navigate("/storecashdetailsadmin");
  };
  const navpromotiondetails = () => {
    navigate("/promotiondetailsadmin");
  };
  const navsupplydetails = () => {
    navigate("/supplydetailsadmin");
  };
  const navprintqr = () => {
    navigate("/printqr");
  };
  const navagencyreg = () => {
    navigate("/registeradmin");
  };

  const logoutuser = ()=>{
    axios.post("http://localhost:5000/logout").then(()=>{
      navigate("/")
    })
  }

  return (
    <div className='adminmainpage'>

      <div className='navadminmainpage'>
        <h1 className='btnnavhead'>Admin</h1>
        <button className='btnadminlogout' onClick={logoutuser}>Logout</button>
      </div>

      <div className='infoadmin'>
        <div className='infoadmin1'>

          <div className='admininfo'>

            TOTAL USERS <br />
            {totalusers}
          </div>

          <div className='admininfo'>

            TOTAL STORES <br />
            {totalstores}
          </div>

          <div className='admininfo'>

            TOTAL DISTRIBUTORS <br />
            {totalmarketers}
          </div>

          <div className='admininfo'>

            PENDING PROMOTION <br />
            {totalpromotions}
          </div>

          <div className='admininfo'>

            PENDING SALES PROMOTION <br />
            {totalsalespromotions}
          </div>

          <div className='admininfo'>

            STORE CASH RECEIVABLE <br />
            {totalstorerechargecash}
          </div>

          <div className='admininfo'>

            STORE CASH PAYABLE <br />
            {totalstorecashpayable}
          </div>

          <div className='admininfo'>

            MANAGER CASH RECEIVABLE <br />
            {totalmanagercashrecievable}
          </div>

        </div>

        <div className='eventadminbtn'>
          <div className='adminbtn1'>
            <button className='btnadmin' onClick={navuserrechargesystem} type='button'>User Recharge System</button>
            <button className='btnadmin' onClick={navstorerechargesystem} type='button'>Store Recharge System</button>
            <button className='btnadmin' onClick={navstoresalesrechargesystem} type='button'>Store Sales Recharge System</button>
            <button className='btnadmin' onClick={navmarketersalesrechargesystem} type='button'>Marketer Sales Recharge System</button>
          </div>

          <div className='adminbtn1'>
            <button className='btnadmin' onClick={navpromotion} type='button'>Promotion</button>
            <button className='btnadmin' onClick={navsalesorder} type='button'>Sales Promotion</button>

            <button className='btnadmin' onClick={navproductlist} type='button'>Product List</button>
            <button className='btnadmin' onClick={navsupplydiscount} type='button'>Supply Discount</button>
          </div>

          <div className='adminbtn1'>
            <button className='btnadmin' onClick={navmanagercash} type='button'>Manager Cash</button>
            <button className='btnadmin' onClick={navstorecashdetails} type='button'>Store Cash Details</button>

            <button className='btnadmin' onClick={navpromotiondetails} type='button'>Promotion Pending</button>
            <button className='btnadmin' onClick={navsupplydetails} type='button'>Supply Details</button>
          </div>

          <div className='adminbtn1'>
            <button className='btnadmin' onClick={navprintqr} type='button'>Print_QR</button>
            <button className='btnadmin' onClick={navagencyreg} type='button'>Register New Manager</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;