import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import "./Usercomponent.css";

const Qrcode = () => {
  const [userid, setUserid] = useState("");

  const createqrcode = () => {
    axios.get("http://localhost:5000/loginuser").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].userid);
      }
    });
  };

  useEffect(() => {
    createqrcode();
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

  return (
    <div className='qrcodecontainer'>
      <h3 className='headingqrcode'>Scan_Code</h3><br />
      <div className='qrcode' style={{ height: "auto", margin: "0 auto", maxWidth: 300, width: "100%" }}>
        <QRCode size={256} value={userid}  style={{ height: "auto", maxWidth: "100%", width: "100%" }} viewBox={`0 0 256 256`}/>
      </div>
    </div>
  );
};

export default Qrcode;