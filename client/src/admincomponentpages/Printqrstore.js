import React, { useState, useEffect, useRef } from 'react';
import { useParams} from 'react-router-dom';
import axios from "axios";
import ReactToPrint from 'react-to-print';
import QRCode from 'react-qr-code';

const Printqrstore = () => {
    const param = useParams();
    const [storeid, setStoreid] = useState("");
    const [storename, setStorename] = useState("");
    const componentRef = useRef();

    const loaddata = () => {
        axios.post(`http://localhost:5000/getstoreqrdetails/${param.id}`).then((response) => {
            setStoreid(response.data[0].storeid);
            setStorename(response.data[0].storename);
        });
    };

    useEffect(() => {
        loaddata();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className='qrcodecontainer' ref={componentRef} >
                <h3 className='headingqrcode'>Scan-QR-Code</h3><br />
                <h5 className='headingqrcode'>{storename}</h5><br /><br />
                <div className='qrcode' style={{ height: "auto", margin: "0 auto", maxWidth: 300, width: "100%" }}>
                    <QRCode size={256} value={storeid} style={{ height: "auto", maxWidth: "100%", width: "100%" }} viewBox={`0 0 256 256`}/>
                </div>
            </div>

            <div className='btnprint'>
                <ReactToPrint
                    trigger={() => <button className='printbtn'>Print</button>}
                    content={() => componentRef.current}
                /> <br /><br />
            </div>
        </div>
    );
};

export default Printqrstore;