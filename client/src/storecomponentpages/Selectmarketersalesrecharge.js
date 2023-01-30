import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import Modal from 'react-modal';
import "./Storecomponent.css";

Modal.setAppElement('#root');

const Selectmarketersalesrecharge = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [salebalance, setSalebalance] = useState("");
  const [marketerid, setMarketerid] = useState("");

  const [useridentity, setUseridentity] = useState("");
  const [rechamount, setRechamount] = useState("");
  const [sellingbalance, setSellingbalance] = useState("");
  const [disc, setDiscount] = useState("");
  const [rechtype, setRechtype] = useState("");
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
      setMarketerid(result.text);
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

  const rechargemarketer = () => {
    axios.put("http://localhost:5000/buttonmarketersalesrecharge", {
      salebalance: salebalance,
      marketerid: marketerid
    }).then(() => {
      totalrechargeamount();
      addhistory();
      addtocalculate();
      navigate("/homestore");
      console.log(salebalance);
      console.log(marketerid);
    });
  };

  const fillplan = () => {
    axios.get(`http://localhost:5000/selectmarketersalesrecharge/${param.id}`).then((response) => {
      setSalebalance(response.data[0].salesbalance);

      setRechamount(response.data[0].rechargeamount);
      setSellingbalance(response.data[0].salesbalance);
      setDiscount(response.data[0].discount);
      setRechtype(response.data[0].rechargetype);
    });
  };

  const totalrechargeamount = () => {
    axios.put("http://localhost:5000/totalrechargeamount", {
      storeid: storeid,
      rechamount: rechamount
    });
  };

  const addhistory = () => {
    axios.post("http://localhost:5000/addmarketersalesrechargehistory", {
      rechtype: rechtype,
      rechamount: rechamount,
      sellingbalance: sellingbalance,
      disc: disc,
      useridentity: useridentity,
      storeidentity: storeidentity
    });
  };

  const addtocalculate = () => {
    axios.post("http://localhost:5000/addmarketersalestocalculate", {
      rechtype: rechtype,
      rechamount: rechamount,
      sellingbalance: sellingbalance,
      disc: disc,
      useridentity: useridentity,
      storeidentity: storeidentity
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
            {/* <h1>userid: {useridentity}</h1><br /> */}
            Userid <input defaultValue={useridentity} type="text" placeholder='scanned userid' readOnly/>
            <br /><br />
            Recharge Amount<input defaultValue={rechamount} type="text" placeholder='recharge rechamount' readOnly/>
            <br /><br />
            Balance <input defaultValue={sellingbalance} type="text" placeholder='purchase balance' readOnly/>
            <br /><br />
            Disc. % <input defaultValue={disc} type="text" placeholder='purchase balance' readOnly/>
            <br /><br />
            <div className='btnstore'><button className='btn' onClick={rechargemarketer} type='button'>Recharge</button></div>
            <button className='btn' onClick={closemodal}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Selectmarketersalesrecharge;