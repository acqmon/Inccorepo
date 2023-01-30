import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const Selectstorepurchaserecharge = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [storeid, setStoreid] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const [rechtype, setRechtype] = useState("");
  const [rechamount, setRechamount] = useState("");
  const [purchbalance, setPurchbalance] = useState("");
  const [useridentity, setUseridentity] = useState("");
  const [storeidentity, setStoreidentity] = useState("");

  const getstoreid = () => {
    axios.get("http://localhost:5000/loginstore").then((response) => {
      if (response.data.loggedin === true) {
        setStoreid(response.data.user[0].storeid);

        setUseridentity(response.data.user[0].storeid);
        setStoreidentity(response.data.user[0].storeid);
      }
    }).then(() => {
      fillplan();
    });
  };

  const fillplan = () => {
    axios.get(`http://localhost:5000/selectstorepurchaserecharge/${param.id}`).then((response) => {
      setAmount(response.data[0].rechargeamount);
      setBalance(response.data[0].purchasebalance);

      setRechtype(response.data[0].rechargetype);
      setRechamount(response.data[0].rechargeamount);
      setPurchbalance(response.data[0].purchasebalance);
    });
  };

  const rechargestore = () => {
    axios.put("http://localhost:5000/buttonstorepurchaserecharge", {
      balance: balance,
      storeid: storeid
    }).then(() => {
      addhistory();
      addtocalculate();
      totalrechargeamount();
      navigate("/homestore");
    }).catch((error) => {
      console.log(error);
    });
  };

  const totalrechargeamount = () => {
    axios.put("http://localhost:5000/totalrechargeamount", {
      storeid: storeid,
      rechamount: rechamount
    });
  };

  const addhistory = () => {
    axios.post("http://localhost:5000/addstorepurchaserechargehistory", {
      rechtype: rechtype,
      rechamount: rechamount,
      purchbalance: purchbalance,
      useridentity: useridentity,
      storeidentity: storeidentity
    });
  };

  const addtocalculate = () => {
    axios.post("http://localhost:5000/addstorepurchasetocalculate", {
      rechtype: rechtype,
      rechamount: rechamount,
      purchbalance: purchbalance,
      useridentity: useridentity,
      storeidentity: storeidentity
    });
  };

  useEffect(() => {
    getstoreid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className='selectplan'>
      <div className='plandiv'>
        Store-ID <input defaultValue={storeid} type="text" readOnly/><br /><br />
        Recharge Amount <input defaultValue={amount} type="text" readOnly/><br /><br />
        Balance <input defaultValue={balance} type="text" readOnly/><br /><br />
        <button className='btn' onClick={rechargestore} type='button'>Recharge</button>
      </div>
    </div>
  );
};

export default Selectstorepurchaserecharge;