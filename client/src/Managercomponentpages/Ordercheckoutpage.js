import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Ordercheckoutpage = () => {
    const navigate = useNavigate();

    const [modalisopen, setIsopen] = useState(false);

    const openmodal = () => {
        setIsopen(true);
    };

    const closemodal = () => {
        setIsopen(false);
    };

    const [userid, setUserid] = useState("");
    const [managerid, setManagerid] = useState("");
    const [orderid, setOrderid] = useState("");

    const getstoreidscan = (result) => {
        if (result) {
            setUserid(result.text);
            console.log(result.text);
            openmodal();
        } else {
            console.log("please scan store qr code");
        }
    };

    const [disablebutton, setDisablebutton] = useState(false);
    const disablebtn = () => {
        setDisablebutton(true);
    };

    const placeorder = () => {
        if (disablebutton === false) {
            axios.post("http://localhost:5000/orders", {
                userid: userid,
                managerid: managerid
            }).then(() => {
                alert("order placed!");
            });
        } else {
            alert("Order Already Placed");
        }
        disablebtn();
    };


    const getidoforder = () => {
        axios.post("http://localhost:5000/ordersid", {
            userid: userid,
            managerid: managerid
        }).then((response) => {
            if (response.data.length > 0) {
                setOrderid(response.data[0].id);
            }
        });
    };

    const updateorderitemsorderid = () => {
        axios.put("http://localhost:5000/orders", {
            userid: userid,
            orderid: orderid,
            managerid: managerid
        }).then(() => {
            closemodal();
            navigate("/homemanager");
        });
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
        if (orderid !== "") {
            updateorderitemsorderid();
        }
    });

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
                        <h5 className='heading'>Order Generated</h5>
                        <button className='btn' onClick={placeorder} type='button'>PlaceOrder</button>
                        <button className='btn' onClick={getidoforder} type='button'>Go To Main</button>
                        {/* <button onClick={closemodal}>closemodal</button> */}
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Ordercheckoutpage;