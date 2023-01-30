import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Selectsalespromotionplans = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [userid, setUserid] = useState("");
    const [managerid, setManagerid] = useState("");

    const [rechargeamount, setRechargeamount] = useState("");
    const [orderamount, setOrderamount] = useState("");
    const [phase, setPhase] = useState("");
    const [orderperphase, setOrderperphase] = useState("");
    const [cut, setCut] = useState("");


    const [modalisopen, setIsopen] = useState(false);

    const openmodal = () => {
        setIsopen(true);
    };

    const closemodal = () => {
        setIsopen(false);
        navigate("/homemanager");
    };



    const scan = (result) => {
        if (result) {
            setUserid(result.text);
            console.log(result.text);
            openmodal();
            fillplan();
        } else {
            console.log("please scan qr code");
        }
    };

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

    const fillplan = () => {
        axios.get(`http://localhost:5000/selectsalespromotionplanmanager/${param.id}`).then((response) => {
            setRechargeamount(response.data[0].rechargeamount);
            setOrderamount(response.data[0].orderamount);
            setPhase(response.data[0].phase);
            setOrderperphase(response.data[0].orderperphase);
            setCut(response.data[0].cut);
        }).then(() => {
            getmanagerid();
        }).catch((error) => {
            console.log(error);
        });
    };

    const recharge = () => {
        axios.post("http://localhost:5000/addsalespromotionrechargehistory", {
            rechargeamount: rechargeamount,
            orderamount: orderamount,
            phase: phase,
            orderperphase: orderperphase,
            cut: cut,
            userid: userid,
            managerid: managerid
        }).then(() => {
            addtocalculate();
            addtocalculatecashmanager();
            navigate("/homemanager");
        }).catch((error) => {
            console.log(error);
        });
    };

    const addtocalculate = () => {
        axios.post("http://localhost:5000/addsalespromotiontocalculate", {
            rechargeamount: rechargeamount,
            orderamount: orderamount,
            phase: phase,
            orderperphase: orderperphase,
            cut: cut,
            userid: userid,
            managerid: managerid
        });
    };

    const addtocalculatecashmanager = () => {
        axios.put("http://localhost:5000/addpromotionandsalespromotioncashtocashcalculatemanager", {
            rechargeamount: rechargeamount,
            managerid: managerid
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
                        User-ID <input defaultValue={userid} type="text" placeholder='scanned userid' readOnly/>
                        <br />
                        Recharge Amount <input defaultValue={rechargeamount} type="text" placeholder='recharge amount' readOnly/>
                        <br />
                        Order Amount <input defaultValue={orderamount} type="text" placeholder='purchase balance' readOnly/>
                        <br />
                        Phase <input defaultValue={phase} type="text" placeholder='purchase balance' readOnly/>
                        <br />
                        Order Per Phase <input defaultValue={orderperphase} type="text" placeholder='purchase balance' readOnly/>
                        <br /><br />
                        Cut <input defaultValue={cut} type="text" placeholder='purchase balance' readOnly/>
                        <br />
                        <button className='btn' onClick={recharge} type='button'>Recharge</button><br />
                        <button className='btn' onClick={closemodal}>Close</button>
                    </div>
                </Modal>
            </div>


        </div>
    );
};

export default Selectsalespromotionplans;