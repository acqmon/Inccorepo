import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Sellingpage = () => {
    const navigate = useNavigate();
    const [storesales, setStoresales] = useState("");
    const [marketerid, setMarketerid] = useState("");
    const [storeid, setStoreid] = useState("");
    const [purchasebalance, setPurchasebalance] = useState("");
    const [purchasebalanceone, setPurchasebalanceone] = useState("");
    const [salebalance, setSalebalance] = useState("");
    const [salebalanceone, setSalebalanceone] = useState("");
    const [discount, setDiscount] = useState("");
    const [discountone, setDiscountone] = useState("");

    const [modalisopen, setIsopen] = useState(false);

    const openmodal = () => {
        setIsopen(true);
    };

    const closemodal = () => {
        setIsopen(false);
    };

    const getmarketerid = () => {
        axios.get("http://localhost:5000/loginmarketer").then((response) => {
            if (response.data.loggedin === true) {
                setMarketerid(response.data.user[0].marketerid);
            }
        });
    };

    useEffect(() => {
        getmarketerid();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('Marketerid');
        if (data) {
            setMarketerid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Marketerid', `${marketerid}`);
    });

    const getstoreidscan = (result) => {
        if (result) {
            setStoreid(result.text);
            console.log(result.text);
            openmodal();
        } else {
            console.log("please scan store qr code");
        }
    };

    const getstoredatafromcalculatediscount = () => {
        axios.post("http://localhost:5000/getstoreshistoryfromcalculate", {
            storeid: storeid
        }).then((response) => {
            console.log(response.data);
            if (response.data.length === 0) {
                console.log("response is zero");
            } else {
                if (response.data.length > 1) {
                    console.log("data is greater than 1");
                    setPurchasebalance(response.data[0].purchbalance);
                    setPurchasebalanceone(response.data[1].purchbalance);
                } else {
                    console.log("data is not empty");
                    setPurchasebalance(response.data[0].purchbalance);
                }
            }
        });
    };

    const getmarketerdatafromcalculatediscount = () => {
        axios.post("http://localhost:5000/getmarketerhistoryfromcalculate", {
            marketerid: marketerid
        }).then((response) => {
            console.log(response.data);
            if (response.data.length === 0) {
                console.log("response is zero");
            } else {
                if (response.data.length > 1) {
                    console.log("data is greatyer than 1");
                    setSalebalance(response.data[0].sellingbalance);
                    setDiscount(response.data[0].disc);
                    setSalebalanceone(response.data[1].sellingbalance);
                    setDiscountone(response.data[1].disc);
                } else {
                    console.log("data is not empty");
                    setSalebalance(response.data[0].sellingbalance);
                    setDiscount(response.data[0].disc);
                }
            }
        });
    };

    const updatecalculatedpurchasebalance = () => {
        axios.put("http://localhost:5000/updatecalculatepurchasebalancemarketer", {
            storesales: storesales,
            purchasebalance: purchasebalance,
            storeid: storeid
        });
    };

    const updatecalculatedsellingbalance = () => {
        axios.put("http://localhost:5000/updatecalculatesellingbalancemarketer", {
            storesales: storesales,
            salebalance: salebalance,
            marketerid: marketerid
        });
    };

    const discountamount = storesales * discount / 100;
    const discountcalculation = () => {
        axios.post("http://localhost:5000/discountcalculatemarketer", {
            storeid: storeid,
            marketerid: marketerid,
            storesales: storesales,
            discountamount: discountamount
        }).then(() => {
            alert(`Incco Discount ${discountamount}`);
        });
    };

    const adddiscounttodiscounttable = () => {
        axios.put("http://localhost:5000/adddiscounttodiscounttable", {
            storeid: storeid,
            discountamount: discountamount
        });
    };

    const updatedstoresales = storesales - purchasebalance;
    const updatedstoresalesone = updatedstoresales;
    const updatecalculatedstoresalesamount = () => {
        axios.put("http://localhost:5000/updatecalculatedstoresalesamountmarketer", {
            purchasebalance: purchasebalance,
            storeid: storeid
        });
    };
    const updatecalculatedpurchasebalanceone = () => {
        axios.put("http://localhost:5000/updatecalculatepurchasebalanceonemarketer", {
            updatedstoresalesone: updatedstoresalesone,
            purchasebalanceone: purchasebalanceone,
            storeid: storeid
        });
    };

    const updatestoresales = storesales - salebalance;
    const updatedsalesstoreone = updatestoresales;
    const updatecalculatedstoresalesamountone = () => {
        axios.put("http://localhost:5000/updatecalculatedstoresalesamountonemarketer", {
            salebalance: salebalance,
            marketerid: marketerid
        });
    };
    const updatecalculatedsellingbalanceone = () => {
        axios.put("http://localhost:5000/updatecalculatesellingbalanceonemarketer", {
            updatedsalesstoreone: updatedsalesstoreone,
            salebalanceone: salebalanceone,
            marketerid: marketerid
        });
    };
    const discountsalebalance = salebalance * discount / 100;
    const discountsalebalancetwo = updatedsalesstoreone * discountone / 100;
    const totaldiscount = discountsalebalance + discountsalebalancetwo;
    const discountcalculationone = () => {
        axios.post("http://localhost:5000/discountcalculateonemarketer", {
            storeid: storeid,
            marketerid: marketerid,
            storesales: storesales,
            totaldiscount: totaldiscount
        }).then(() => {
            alert(`Incco Discount ${totaldiscount}`);
        });
    };

    const adddiscounttodiscounttableone = () => {
        axios.put("http://localhost:5000/adddiscounttodiscounttableone", {
            storeid: storeid,
            totaldiscount: totaldiscount
        });
    };


    const finalpurchase = () => {
        if (storesales > 0) {
            if (storesales <= purchasebalance && storesales <= salebalance) {
                updatecalculatedpurchasebalance();
                updatecalculatedsellingbalance();
                discountcalculation();
                adddiscounttodiscounttable();
                navigate("/homemarketer");
            }

            if (storesales > purchasebalance && purchasebalanceone === "" && storesales <= salebalance) {
                alert("Store Balance is Low");
            } else {
                if (storesales > purchasebalance && purchasebalanceone !== "" && storesales <= salebalance) {
                    const addpurchasebalance = purchasebalance + purchasebalanceone;
                    if (storesales <= addpurchasebalance && storesales <= salebalance) {
                        // alert("addedpurchase balance is good and salebalance is good");
                        updatecalculatedstoresalesamount();
                        updatecalculatedpurchasebalanceone();
                        updatecalculatedsellingbalance();
                        discountcalculation();
                        adddiscounttodiscounttable();
                        navigate("/homemarketer");
                    } else {
                        alert("Store Balance Is Low");
                    }
                }
            }

            if (storesales <= purchasebalance && salebalanceone === "" && storesales > salebalance) {
                alert("Balance Is Low");
            } else {
                if (storesales > salebalance && salebalanceone !== "" && storesales <= purchasebalance) {
                    const addsalebalance = salebalance + salebalanceone;
                    if (storesales <= purchasebalance && storesales <= addsalebalance) {
                        updatecalculatedstoresalesamountone();
                        updatecalculatedsellingbalanceone();
                        updatecalculatedpurchasebalance();
                        discountcalculationone();
                        adddiscounttodiscounttableone();
                        navigate("/homemarketer");
                    } else {
                        alert("Balance Is Low");
                    }
                }
            }


            if (storesales > purchasebalance && storesales > salebalance && purchasebalanceone === "" && salebalanceone === "") {
                alert("Store And Marketer Balance is Low");
            } else {
                if (storesales > purchasebalance && storesales > salebalance && purchasebalanceone !== "" && salebalanceone === "") {
                    const addpurchasebalance = purchasebalance + purchasebalanceone;
                    if (storesales > purchasebalance && storesales > salebalance && storesales <= addpurchasebalance && salebalanceone === "") {
                        alert("Marketer Balance Is Low");
                    } else {
                        alert("Store And Marketer Balance is Low");
                    }
                } else {
                    if (storesales > purchasebalance && storesales > salebalance && purchasebalanceone === "" && salebalanceone !== "") {
                        const addsalebalance = salebalance + salebalanceone;
                        if (storesales > purchasebalance && storesales > salebalance && purchasebalanceone === "" && storesales <= addsalebalance) {
                            alert("Store Balance Is Low ");
                        } else {
                            alert("Store And Marketer Balance is Low");
                        }
                    } else {
                        if (storesales > purchasebalance && storesales > salebalance && purchasebalanceone !== "" && salebalanceone !== "") {
                            const addpurchasebalance = purchasebalance + purchasebalanceone;
                            const addsalebalance = salebalance + salebalanceone;
                            if (storesales <= addpurchasebalance && storesales <= addsalebalance) {
                                updatecalculatedstoresalesamount();
                                updatecalculatedpurchasebalanceone();
                                updatecalculatedstoresalesamountone();
                                updatecalculatedsellingbalanceone();
                                discountcalculationone();
                                adddiscounttodiscounttableone();
                                navigate("/homemarketer");
                            } else {
                                if (storesales > addpurchasebalance && storesales > addsalebalance) {
                                    alert("Store And Marketer Balance is Low");
                                } else {
                                    if (storesales > addpurchasebalance) {
                                        alert("Store Balance Is Low");
                                    } else {
                                        alert("Marketer Balance Is Low");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            alert("enter storesales amount");
        }
    };

    useEffect(() => {
        getmarketerid();
        getstoredatafromcalculatediscount();
        getmarketerdatafromcalculatediscount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeid]);

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
                <Modal isOpen={modalisopen} onRequestClose={() => { setIsopen(false); }}>
                    <div className='model'>
                        <h3>Enter Sales Amount</h3>
                        <input onChange={(e) => { setStoresales(e.target.value); }} type="number" /> <br />
                        <button className='btn' onClick={finalpurchase} type='button'>Confirm Sales</button><br /><br />
                        <button className='btn' onClick={closemodal}>close</button>
                    </div>
                </Modal>

            </div>
        </div>
    );
};

export default Sellingpage;