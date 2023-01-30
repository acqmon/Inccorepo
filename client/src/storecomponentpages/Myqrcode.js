import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

const Myqrcode = () => {
    const [storeid, setStoreid] = useState("");
    const [storename, setStorename]= useState("")

    const createqrcode = () => {
        axios.get("http://localhost:5000/loginstore").then((response) => {
            if (response.data.loggedin === true) {
                setStoreid(response.data.user[0].storeid);
                setStorename(response.data.user[0].storename);
            }
        });
    };

    useEffect(() => {
        createqrcode();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('storeid');
        if (data) {
            setStoreid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('storeid', `${storeid}`);
    });

    return (
        <div>
            <div className='qrcodecontainer' >
                <h3 className='headingqrcode'>Scan_Qr-Code</h3><br /><br />
                <h5 className='headingqrcode'>{storename}</h5><br /><br /><br />
                <div className='qrcode' style={{ height: "auto", margin: "0 auto", maxWidth: 300, width: "100%" }}>
                    <QRCode size={256} value={storeid} style={{ height: "auto", maxWidth: "100%", width: "100%" }} viewBox={`0 0 256 256`}/>
                </div>
            </div>
        </div>
    );
};

export default Myqrcode;