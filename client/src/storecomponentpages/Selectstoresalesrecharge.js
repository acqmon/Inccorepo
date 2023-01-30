import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import Modal from 'react-modal';
import "./Storecomponent.css";

Modal.setAppElement('#root');

const Selectstoresalesrecharge = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [salebalance, setSalebalance] = useState("");
  const [storeid, setStoreid] = useState("");

  const [useridentity, setUseridentity] = useState("");
  const [rechamount, setRechamount] = useState("");
  const [sellingbalance, setSellingbalance] = useState("");
  const [disc, setDiscount] = useState("");
  const [rechtype, setRechtype] = useState("");
  const [storeidentity, setStoreidentity] = useState("");

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
      setStoreid(result.text);
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
      }
    });
  };

  const rechargestore = () => {
    axios.put("http://localhost:5000/buttonstoresalesrecharge", {
      salebalance: salebalance,
      storeid: storeid
    }).then(() => {
      totalrechargeamount();
      addhistory();
      addtocalculate();
      navigate("/homestore");
      console.log(salebalance);
      console.log(storeid);
    });
  };

  const fillplan = () => {
    axios.get(`http://localhost:5000/selectstoresalesrecharge/${param.id}`).then((response) => {
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
    axios.post("http://localhost:5000/addstoresalesrechargehistory", {
      rechtype: rechtype,
      rechamount: rechamount,
      sellingbalance: sellingbalance,
      disc: disc,
      useridentity: useridentity,
      storeidentity: storeidentity
    });
  };

  const addtocalculate = () => {
    axios.post("http://localhost:5000/addstoresalestocalculate", {
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
            {/* <h4 className='headingtable'>Enter Purchase Amount</h4>  */}
            {/* <h1>userid: {useridentity}</h1><br /> */}
            Userid: <input defaultValue={useridentity} type="text" placeholder='scanned userid' readOnly />

            Recharge Amount: <input defaultValue={rechamount} type="text" placeholder='recharge rechamount' readOnly />

            Balance: <input defaultValue={sellingbalance} type="text" placeholder='purchase balance' readOnly />

            Disc: <input defaultValue={disc} type="text" placeholder='purchase balance' readOnly />

            <div className='btnstore'>
              <button className='btn' onClick={rechargestore} type='button'>Recharge</button>
            </div>
            <button className='btn' onClick={closemodal}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Selectstoresalesrecharge;