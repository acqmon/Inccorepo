import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import Modal from 'react-modal';
import "./Usercomponent.css";

Modal.setAppElement('#root');

const Purchase = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [storeid, setStoreid] = useState("");
  const [purchasebalance, setPurchasebalance] = useState("");
  const [purchasebalanceone, setPurchasebalanceone] = useState("");
  const [salebalance, setSalebalance] = useState("");
  const [salebalanceone, setSalebalanceone] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountone, setDiscountone] = useState("");

  const [userpurchase, setUserpurchase] = useState("");

  const [modalisopen, setIsopen] = useState(false);

  const openmodal = () => {
    setIsopen(true);
  };

  const closemodal = () => {
    setIsopen(false);
    navigate("/homeuser");
  };


  const getuserid = () => {
    axios.get("http://localhost:5000/loginuser").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].userid);
      }
      console.log(response.data.user[0].userid);
    });
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

  const getdatafromcalculatediscount = () => {
    axios.post("http://localhost:5000/getuserhistoryfromcalculate", {
      userid: userid
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        console.log("response is zero");
      } else {
        if (response.data.length > 1) {
          console.log("data is greater than 1");
          setPurchasebalance(response.data[0].purchbalance);
          setPurchasebalanceone(response.data[1].purchbalance);
          console.log(response.data);
        } else {
          console.log("data is not empty");
          setPurchasebalance(response.data[0].purchbalance);
        }
      }
    });
  };

  const getstoredatafromcalculatediscount = () => {
    axios.post("http://localhost:5000/getstorehistoryfromcalculate", {
      storeid: storeid
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
    axios.put("http://localhost:5000/updatecalculatepurchasebalance", {
      userpurchase: userpurchase,
      purchasebalance: purchasebalance,
      userid: userid
    });
  };

  const updatecalculatedsellingbalance = () => {
    axios.put("http://localhost:5000/updatecalculatesellingbalance", {
      userpurchase: userpurchase,
      salebalance: salebalance,
      storeid: storeid
    });
  };

  const updateduserpurchase = userpurchase - purchasebalance;
  const updateduserpurchaseone = updateduserpurchase;
  const updatecalculateduserpurchaseamount = () => {
    axios.put("http://localhost:5000/updatecalculateduserpurchaseamount", {
      purchasebalance: purchasebalance,
      userid: userid
    });
  };
  const updatecalculatedpurchasebalanceone = () => {
    axios.put("http://localhost:5000/updatecalculatepurchasebalanceone", {
      updateduserpurchaseone: updateduserpurchaseone,
      purchasebalanceone: purchasebalanceone,
      userid: userid
    });
  };

  const updatepurchaseuser = userpurchase - salebalance;
  const updatedpurchaseuserone = updatepurchaseuser;
  const updatecalculateduserpurchaseamountone = () => {
    axios.put("http://localhost:5000/updatecalculateduserpurchaseamountone", {
      salebalance: salebalance,
      storeid: storeid
    });
  };
  const updatecalculatedsellingbalanceone = () => {
    axios.put("http://localhost:5000/updatecalculatesellingbalanceone", {
      updatedpurchaseuserone: updatedpurchaseuserone,
      salebalanceone: salebalanceone,
      storeid: storeid
    });
  };

  const discountamount = userpurchase * discount / 100;
  const discountcalculation = () => {
    axios.post("http://localhost:5000/discountcalculate", {
      userid: userid,
      storeid: storeid,
      userpurchase: userpurchase,
      discountamount: discountamount
    }).then(() => {
      alert(`Incco Discount ${discountamount}`);
    });
  };

  const addstorediscounttodiscounttable = () => {
    axios.put("http://localhost:5000/addstorediscounttodiscounttable", {
      storeid: storeid,
      discountamount: discountamount
    });
  };


  const discountsalebalance = salebalance * discount / 100;
  const discountsalebalancetwo = updatedpurchaseuserone * discountone / 100;
  const totaldiscount = discountsalebalance + discountsalebalancetwo;
  const discountcalculationone = () => {
    axios.post("http://localhost:5000/discountcalculateone", {
      userid: userid,
      storeid: storeid,
      userpurchase: userpurchase,
      totaldiscount: totaldiscount
    }).then(() => {
      alert(`Incco Discount ${totaldiscount}`);
    });
  };

  const addstorediscounttodiscounttableone = () => {
    axios.put("http://localhost:5000/addstorediscounttodiscounttableone", {
      storeid: storeid,
      totaldiscount: totaldiscount
    });
  };



  const finalpurchase = () => {
    if (userpurchase > 0) {

      if (userpurchase <= purchasebalance && userpurchase <= salebalance) {
        updatecalculatedpurchasebalance();
        updatecalculatedsellingbalance();
        discountcalculation();
        addstorediscounttodiscounttable();
        navigate("/homeuser");
      }

      if (userpurchase > purchasebalance && purchasebalanceone === "" && userpurchase <= salebalance) {
        alert("Balance Is Low");
      } else {
        if (userpurchase > purchasebalance && purchasebalanceone !== "" && userpurchase <= salebalance) {
          const addpurchasebalance = purchasebalance + purchasebalanceone;
          if (userpurchase <= addpurchasebalance && userpurchase <= salebalance) {
            updatecalculateduserpurchaseamount();
            updatecalculatedpurchasebalanceone();
            updatecalculatedsellingbalance();
            discountcalculation();
            addstorediscounttodiscounttable();
            navigate("/homeuser");
          } else {
            alert("Balance Is Low");
          }
        }
      }

      if (userpurchase > salebalance && salebalanceone === "" && userpurchase <= purchasebalance) {
        alert("Store Balance Is Low");
      } else {
        if (userpurchase > salebalance && salebalanceone !== "" && userpurchase <= purchasebalance) {
          const addsalebalance = salebalance + salebalanceone;
          if (userpurchase <= addsalebalance && userpurchase <= purchasebalance) {
            updatecalculateduserpurchaseamountone();
            updatecalculatedsellingbalanceone();
            updatecalculatedpurchasebalance();
            discountcalculationone();
            addstorediscounttodiscounttableone();
            navigate("/homeuser");
          } else {
            alert("Store Balance Is Low");
          }
        }
      }

      if (userpurchase > purchasebalance && userpurchase > salebalance && purchasebalanceone === "" && salebalanceone === "") {
        alert("User And Store Balance is Low");
      } else {
        if (userpurchase > purchasebalance && userpurchase > salebalance && purchasebalanceone !== "" && salebalanceone === "") {
          const addpurchasebalance = purchasebalance + purchasebalanceone;
          if (userpurchase > purchasebalance && userpurchase > salebalance && userpurchase <= addpurchasebalance && salebalanceone === "") {
            alert("Store Balance Is Low");
          } else {
            alert("User And Store Balance is Low");
          }
        } else {
          if (userpurchase > purchasebalance && userpurchase > salebalance && purchasebalanceone === "" && salebalanceone !== "") {
            const addsalebalance = salebalance + salebalanceone;
            if (userpurchase > purchasebalance && userpurchase > salebalance && purchasebalanceone === "" && userpurchase <= addsalebalance) {
              alert("User Balance Is Low");
            } else {
              alert("User And Store Balance is Low");
            }
          } else {
            if (userpurchase > purchasebalance && userpurchase > salebalance && purchasebalanceone !== "" && salebalanceone !== "") {
              const addpurchasebalance = purchasebalance + purchasebalanceone;
              const addsalebalance = salebalance + salebalanceone;
              if (userpurchase <= addpurchasebalance && userpurchase <= addsalebalance) {
                updatecalculateduserpurchaseamount();
                updatecalculatedpurchasebalanceone();
                updatecalculateduserpurchaseamountone();
                updatecalculatedsellingbalanceone();
                discountcalculationone();
                addstorediscounttodiscounttableone();
                navigate("/homeuser");
              } else {
                if (userpurchase > addpurchasebalance && userpurchase > addsalebalance) {
                  alert("User And Store Balance Is Low");
                }
                else {
                  if (userpurchase > addpurchasebalance) {
                    alert("User Balance Is Low");
                  }
                  else {
                    alert("Store Balance Is Low");
                  }
                }
              }
            }
          }
        }
      }
    } else {
      alert("Enter Purchase Amount");
    }
  };



  useEffect(() => {
    getuserid();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('userid');
    if (data) {
      setUserid(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userid', `${userid}`);
  });

  useEffect(() => {
    getdatafromcalculatediscount();
    getstoredatafromcalculatediscount();
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
          /> <br />
        </div>
      </div>
      <div className='model'>
        <Modal isOpen={modalisopen} onRequestClose={() => { setIsopen(false); }} style>
          <div className='model'>
            <h3>Enter Purchase Amount</h3> <br />
            <input onChange={(e) => { setUserpurchase(e.target.value); }} type="number" /> <br />
            <button className='btn' onClick={() => { finalpurchase(); }} type='button'>Purchase</button><br /><br />
            <button className='btn' onClick={closemodal}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Purchase;