import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
// import Homemanager from '../pages/Homemanager';

const Storecashrecieved = () => {
    const navigate = useNavigate()
    const [modalisopen, setIsopen] = useState(false);
    const [storeid, setStoreid] = useState("");
    const [managerid, setManagerid]=useState("")

    const openmodal = () => {
        setIsopen(true);
    };

    // const closemodal = () => {
    //     setIsopen(false);
    // };

    const getstoreidscan = (result) => {
        if (result) {
            setStoreid(result.text);
            console.log(result.text);
            openmodal();
        } else {
            console.log("please scan store qr code");
        }
    };


    const [cashbalance, setCashbalance] = useState("");
    const [cash, setCash] = useState("");

    const getcashbalance = () => {
        axios.post("http://localhost:5000/getcashbalance", {
            storeid: storeid
        }).then((response) => {
            setCashbalance(response.data[0].totalrechargeamount);
        });
    };

    const updatecashbalance = () => {
        axios.put("http://localhost:5000/getcashbalance", {
            storeid: storeid,
            cash: cash
        });
    };

    const update = () => {
        if (cashbalance > 0 && cashbalance >= cash) {
            updatecashbalance();
            cashhistory()
            cashcalculate()
            navigate("/homemanager")
        } else {
            alert("cash balance is low");
        }
    };

    useEffect(() => {
        getcashbalance();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeid]);

    const cashhistory =()=>{
        axios.post("http://localhost:5000/cashhistorymanager",{
            cash: cash,
            storeid: storeid,
            managerid: managerid
        })
    }
    const cashcalculate =()=>{
        axios.put("http://localhost:5000/cashhistorymanager",{
            cash: cash,
            managerid: managerid
        })
    }

    const getmanagerid = () => {
        axios.get("http://localhost:5000/loginadmin").then((response) => {
          if (response.data.loggedin === true) {
            setManagerid(response.data.user[0].adminid);
          }
        });
      };
    
      useEffect(() => {
        getmanagerid();
      }, []);

      useEffect(() => {
        const data = localStorage.getItem('managerid');
        if (data) {
            setManagerid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('managerid', `${managerid}`);
    });

    return (
        <div>
            <div className='qrscaner'>
                <div className='scaner'>
                    <QrReader
                        constraints={{ facingMode: "environment" }}
                        scanDelay={500}
                        onResult={getstoreidscan}
                    /> <br /><br />
                </div>
            </div>

            <div className='model'>
                <Modal isOpen={modalisopen} onRequestClose={() => { setIsopen(false); }} style>
                    <div className='model1'>
                        <h3 className='heading'>Store cash recieved</h3><br /><br />
                        <input defaultValue={cashbalance} type="text" readOnly /><br /><br />
                        <input onChange={(e) => { setCash(e.target.value); }} placeholder='Enter Recieved Cash From Store' type="text" /><br /><br />
                        <button onClick={update} className='btn'>Confirm</button>
                        {/* <button className='btn' onClick={closemodal}>Close</button> */}
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Storecashrecieved;