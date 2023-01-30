import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Managercomponent.css";

const Promotionorder = () => {
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const [type, setType] = useState("");
    const [orderamount, setOrderamount] = useState("");
    const [cut, setCut] = useState("");
    const [id, setId] = useState("");
    const [managerid, setManagerid] = useState("");

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

    const fillinput = () => {
        axios.post("http://localhost:5000/getpromotionorderdata", {
            userid: userid
        }).then((response) => {
            if (response.data.length === 0) {
                console.log("insert valid userid");
            } else {
                setType(response.data[0].type);
                setOrderamount(response.data[0].orderamount);
                setCut(response.data[0].cut);
                setId(response.data[0].id);
            }
            console.log(response.data);
        });
    };

    const confirmpromotionorder = () => {
        axios.put("http://localhost:5000/promotionordercalculate", {
            id: id,
            userid: userid,
            orderamount: orderamount
        }).then(() => {
            promotionorderhistory();
            navigate("/homemanager");
        });
    };

    const promotionorderhistory = () => {
        axios.post("http://localhost:5000/promotionorderhistory", {
            userid: userid,
            orderamount: orderamount,
            managerid: managerid
        });
    };

    useEffect(() => {
        getmanagerid();
        fillinput();
    });

    return (
        <div className='registerusercontainer'>
            <form className='formuserregister'>
                <h3 className='headingregisteruser'>Promotionorder</h3>
                User-ID <div className='inputdiv'><input className='input' onChange={(e) => { setUserid(e.target.value); }} type="text" /></div>
                Type <div className='inputdiv'><input className='input' defaultValue={type} type="text" readOnly/></div>
                Promotion Order Amount <div className='inputdiv'><input className='input' defaultValue={orderamount} type="number" readOnly/></div>
                Cut <div className='inputdiv'><input className='input' defaultValue={cut} type="text" readOnly/></div>
                <button className='btnregisteruser' onClick={confirmpromotionorder} type='button'>Place Promotion Order</button>
            </form>
        </div>
    );
};

export default Promotionorder;