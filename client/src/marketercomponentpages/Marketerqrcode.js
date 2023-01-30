import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import "./Marketercomponent.css";

const Qrcode = () => {
  const [userid, setUserid] = useState("");

  const createqrcode = () => {
    axios.get("http://localhost:5000/loginmarketer").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].marketerid);
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
    <div className='qrpage'>
      <div className='qrmarketerheading'>
        <h1 className='headqrcodemarketer'>Qrcode</h1>
        <div className='marketerqrpage' style={{ height: "auto", margin: "0 auto", maxWidth: 300, width: "100%" }}>
          <QRCode size={256} value={userid} style={{ height: "auto", maxWidth: "100%", width: "100%" }} viewBox={`0 0 256 256`}/>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;