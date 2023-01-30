import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import moment from 'moment';
import "./Managercomponent.css";

const Vieworder = () => {
    const param = useParams();
    const [orderlist, setOrderlist] = useState([]);
    const [managerid, setManagerid] = useState("");

    const [firmname, setFirmname] = useState("");
    const [firmadd, setFirmadd] = useState("");
    const [pin, setpin] = useState("");
    const [contact, setContact] = useState("");

    const [date, setDate] = useState("");
    const [billnum, setBillnum] = useState("");

    const [storeid, setStoreid] = useState("");
    const [storename, setStorename] = useState("");
    const [storeadd, setStoreadd] = useState("");
    const [storepincode, setStorepincode] = useState("");
    const [storecontact, setStorecontact] = useState("");

    const componentRef = useRef();

    const carttotal = orderlist.reduce((total, item) => {
        return total + item.totalamount;
    }, 0);

    const loaddata = () => {
        axios.post(`http://localhost:5000/vieworder/${param.id}`, {
            managerid: managerid
        }).then((response) => {
            setOrderlist(response.data);
            console.log(response.data);
        });
    };

    const getadmin = () => {
        axios.get("http://localhost:5000/registeradmin", {
        }).then((response) => {
            setFirmname(response.data[0].supplyname);
            setFirmadd(response.data[0].address);
            setpin(response.data[0].pincode);
            setContact(response.data[0].contact);
        });
    };

    const getstoreid = () => {
        axios.post(`http://localhost:5000/getstoreidbill/${param.id}`, {
        }).then((response) => {
            setStoreid(response.data[0].userid);
        });
    };

    const getstoreadd = () => {
        axios.post("http://localhost:5000/getstoreaddbill", {
            storeid: storeid
        }).then((response) => {
            setStorename(response.data[0].storename);
            setStoreadd(response.data[0].location);
            setStorepincode(response.data[0].pincode);
            setStorecontact(response.data[0].contact);
        });
    };

    const getdate = () => {
        axios.post(`http://localhost:5000/getbilldate/${param.id}`, {
        }).then((response) => {
            setDate(response.data[0].date);
            setBillnum(response.data[0].id);
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
        getadmin();
        getstoreid();
        getdate();
        getmanagerid();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getstoreadd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeid]);

    useEffect(() => {
        loaddata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerid]);

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
            <div className='btnprint'>
                <ReactToPrint
                    trigger={() => <button className='printbtn'>Print / Download</button>}
                    content={() => componentRef.current}
                />
            </div>

            <div className='tablepage' ref={componentRef} >


                <h1 className='headinginvoice'>Invoice</h1><br /><br /><br />

                <div className='invoice'>

                    <div className='invoiceheading'>
                        <h3>Bill From</h3>
                        <div >
                            <p className='p'>
                                {firmname}<br />
                                {firmadd} <br />
                                {pin}<br />
                                {contact}<br />
                            </p>
                        </div>
                        <br />
                        <h3>Bill To</h3>
                        <div >
                            <p className='p'>
                                {storename}<br />
                                {storeadd}<br />
                                {storepincode}<br />
                                {storecontact}<br /></p>
                        </div>
                    </div><br />

                    <div className='invoicenumber'>
                        <h3>Date</h3>
                        <p>{moment(date).format("DD - MM - YYYY")}</p><br />
                        <h3>Invoice Number</h3>
                        <p>#{billnum}</p>
                    </div>

                </div>


                <table>
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Item Name</th>
                            <th>description</th>
                            <th>Unit</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {orderlist.map((order, index) => (
                            <tr key={order.id}>
                                <th scope='row'>{index + 1}</th>
                                <td className='wrap'>{order.productname}</td>
                                <td>{order.description}</td>
                                <td>{order.unit}</td>
                                <td>{order.rate}</td>
                                <td>{order.orderquantity}</td>
                                <td>{order.totalamount}</td>
                                {/* <td>
                                <button onClick={()=>{selectproduct(order.id)}} type='button' >Select Item</button>
                            </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='totalamount'>
                    <span>Total: {carttotal}</span>
                </div>
            </div>
        </div>
    );
};

export default Vieworder;