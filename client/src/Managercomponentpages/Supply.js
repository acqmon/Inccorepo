import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import Modal from 'react-modal';
import axios from 'axios';

const Supply = () => {
    const navigate = useNavigate();
    const [modalisopen, setIsopen] = useState(false);

    const [storeid, setStoreid] = useState("");
    const [managerid, setManagerid] = useState("");
    const [billamount, setBillamount] = useState("");
    const [discountrate, setDiscountrate] = useState("");
    const [halfamount, setHalfamount] = useState("");
    const [discountamount, setDiscountamount] = useState("");
    const [storediscount, setStorediscount] = useState("");
    const [sellerdiscount, setSellerdiscount] = useState("");

    const openmodal = () => {
        setIsopen(true);
    };

    const closemodal = () => {
        setIsopen(false);
    };

    const getstoreidscan = (result) => {
        if (result) {
            setStoreid(result.text);
            console.log(result.text);
            openmodal();
        } else {
            console.log("please scan store qr code");
        }
    };

    const homepage = () => {
        navigate("/homemanager");
    };

    const getdiscountrate = () => {
        axios.post("http://localhost:5000/camparesupply", {
            billamount: billamount
        }).then((response) => {
            setDiscountrate(response.data[0].discount);
            gethalfamount();
        });
    };

    const gethalfamount = () => {
        setHalfamount(billamount / 2);
    };

    const addtohistory = () => {
        axios.post("http://localhost:5000/addsupplyhistory", {
            billamount: billamount,
            halfamount: halfamount,
            discountrate: discountrate,
            discountamount: discountamount,
            storeid: storeid,
            managerid: managerid
        })
    };

    const usertotal = () => {
        axios.post("http://localhost:5000/getstorediscounttotal", {
            storeid: storeid
        }).then((response) => {
            setStorediscount(response.data[0].storediscount);
            setSellerdiscount(response.data[0].sellerdiscount);
            console.log(response);
        });
    };

    const halfofdiscountamount = discountamount / 2;
    const deductfromdiscounttable = () => {
        axios.put("http://localhost:5000/deductfromdiscounttable", {
            storeid: storeid,
            halfofdiscountamount: halfofdiscountamount
        });
    };

    const deduct = () => {
        if (storediscount >= halfofdiscountamount && sellerdiscount >= halfofdiscountamount) {
            deductfromdiscounttable();
            addtohistory()
            navigate("/homemanager");
        } else {
            alert("earned discount balance is low");
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

    useEffect(() => {
        if (halfamount !== "" && discountrate !== "") {
            setDiscountamount(halfamount * discountrate / 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [halfamount]);

    useEffect(() => {
        if (storeid !== "") {
            usertotal();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeid]);

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
                        <h3 className='heading'>Supply</h3><br /><br /><br /><br />
                        Bill Amount <input onChange={(e) => { setBillamount(e.target.value); }} placeholder='0' type="number" /> <br />
                        <button className='btn' onClick={getdiscountrate} type='button'>Get Discount</button><br />
                        Discountable Amount <input defaultValue={halfamount} placeholder='0' type="number" readOnly/>  <br />
                        Dicount <input defaultValue={discountamount} placeholder='0' type="number" readOnly/>  <br />
                        <button className='btn' onClick={deduct} type='button'>Check-Out</button><br />
                        <button className='btn' onClick={homepage} type='button'>Cancel Supply</button>
                        <button className='btn' onClick={closemodal}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Supply;