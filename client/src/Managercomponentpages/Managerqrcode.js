import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

const Qrcode = () => {
  const [userid, setUserid] = useState("");

  const createqrcode = () => {
    axios.get("http://localhost:5000/loginadmin").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].adminid);
      }
    });
  };

  useEffect(() => {
    createqrcode();
  }, []);

  return (
    <div className='qrcodecontainer'>
      <h1 className='headingqrcode'>Qrcode</h1>
      <div className='qrcode'>
      <QRCode size={300} value={userid} />
      </div>
    </div>
  );
};

export default Qrcode;