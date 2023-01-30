import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Managercomponent.css";

const Salesorder = () => {
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const [type, setType] = useState("");
    const [orderperphase, setOrderperphase] = useState("");
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

    const fillinput = () => {
        axios.post("http://localhost:5000/getsalesorderdata", {
            userid: userid
        }).then((response) => {
            if (response.data.length === 0) {
                console.log("insert valid userid");
            } else {
                setType(response.data[0].type);
                setOrderperphase(response.data[0].orderperphase);
                setCut(response.data[0].cut);
                setId(response.data[0].id);
            }
            console.log(response.data);
        });
    };

    const confirmsalesorder = () => {
        axios.put("http://localhost:5000/salesordercalculate", {
            id: id,
            userid: userid,
            orderperphase: orderperphase
        }).then(() => {
            salesorderhistory();
            navigate("/homemanager");
        });
    };

    const salesorderhistory = () => {
        axios.post("http://localhost:5000/salesorderhistory", {
            userid: userid,
            orderperphase: orderperphase,
            managerid: managerid
        });
    };

    useEffect(() => {
        getmanagerid();
        fillinput();
    });

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

    return (
        <div className='registerusercontainer'>
            <form className='formuserregister'>
                <h3 className='headingregisteruser'>Salesorder</h3>
                User-ID <div className='inputdiv'><input onChange={(e) => { setUserid(e.target.value); }} type="text" /></div>
                Type <div className='inputdiv'><input defaultValue={type} type="text" readOnly/></div>
                Sales Order Amount <div className='inputdiv'><input defaultValue={orderperphase} type="number" readOnly/></div>
                Cut <div className='inputdiv'><input defaultValue={cut} type="text" readOnly/></div>
                <button className='btnregisteruser' onClick={confirmsalesorder} type='button'>Place Sales Order</button>
            </form>
        </div>
    );
};

export default Salesorder;