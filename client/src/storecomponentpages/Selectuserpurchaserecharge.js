import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import Modal from 'react-modal';
import "./Storecomponent.css";

Modal.setAppElement('#root');

const Selectuserpurchaserecharge = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const [rechtype, setRechtype] = useState("");
  const [rechamount, setRechamount] = useState("");
  const [purchbalance, setPurchbalance] = useState("");
  const [useridentity, setUseridentity] = useState("");
  const [storeidentity, setStoreidentity] = useState("");
  const [storeid, setStoreid] = useState("");

  const [modalisopen, setIsopen] = useState(false);

  const openmodal = () => {
    setIsopen(true);
  };

  const closemodal = () => {
    setIsopen(false);
    navigate("/homestore");
  };

  const scan = (result) => {
    if (result) {
      setUserid(result.text);
      setUseridentity(result.text);
      console.log(result.text);
      openmodal();
      fillplan();
    } else {
      console.log("please scan qr code");
    }
  };

  const getstoreid = () => {
    axios.get("http://localhost:5000/loginstore").then((response) => {
      if (response.data.loggedin === true) {
        setStoreidentity(response.data.user[0].storeid);
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

  const fillplan = () => {
    axios.get(`http://localhost:5000/selectuserpurchaserecharge/${param.id}`).then((response) => {
      setAmount(response.data[0].rechargeamount);
      setBalance(response.data[0].purchasebalance);

      setRechtype(response.data[0].rechargetype);
      setRechamount(response.data[0].rechargeamount);
      setPurchbalance(response.data[0].purchasebalance);
    }).then(() => {
      getstoreid();
    }).catch((error) => {
      console.log(error);
    });
  };

  const recharge = () => {
    axios.put("http://localhost:5000/buttonuserpurchaserecharge", {
      userid: userid,
      balance: balance
    }).then(() => {
      totalrechargeamount();
      addhistory();
      addtocalculate();
      console.log(userid);
      console.log(balance);
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
    axios.post("http://localhost:5000/adduserpurchaserechargehistory", {
      rechtype: rechtype,
      rechamount: rechamount,
      purchbalance: purchbalance,
      useridentity: useridentity,
      storeidentity: storeidentity
    });
  };

  const addtocalculate = () => {
    axios.post("http://localhost:5000/adduserpurchasetocalculate", {
      rechtype: rechtype,
      rechamount: rechamount,
      purchbalance: purchbalance,
      useridentity: useridentity,
      storeidentity: storeidentity
    });
  };

  return (
    <div>
      <div className='qrscaner'>
        <div className='scaner'>
          <QrReader
            constraints={{ facingMode: "environment" }}
            scanDelay={500}
            onResult={scan}
          /> <br /><br />
        </div>
      </div>

      <div className='model'>
        <Modal isOpen={modalisopen} onRequestClose={() => { setIsopen(false); }} style>
          <div className='model1'>
            {/* <h1>userid: {userid}</h1><br /> */}
            userid<input defaultValue={userid} type="text" placeholder='scanned userid' readOnly/>
            <br />
            Recharge Amount <input defaultValue={amount} type="text" placeholder='recharge amount' readOnly/>
            <br />
            balance <input defaultValue={balance} type="text" placeholder='purchase balance' readOnly/>
            <br />
            <div className='btnstore'><button className='btn' onClick={recharge} type='button'>Recharge User</button></div>
            <button className='btn' onClick={closemodal}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Selectuserpurchaserecharge;