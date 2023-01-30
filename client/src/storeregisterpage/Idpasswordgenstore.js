import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../userregisterpage/Registeruser.css";

const Idpasswordgenstore = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [contact, setContact] = useState("");
    const [storeid, setStoreid] = useState("");
    const [password, setPassword] = useState("");

    const verifystore = () => {
        axios.post("http://localhost:5000/storeidinputfield", {
            firstname: firstname,
            contact: contact
        }).then((response) => {
            if (response.data.length > 0) {
                setStoreid(response.data[0].storeid);
            } else {
                alert("Please Insert Correct First Name and Contact Number");
            }
        });
    };

    const insertdiscountstoreid = () => {
        axios.post("http://localhost:5000/insertstoreidinpurchasediscountstore", {
            storeid: storeid
        });
    };

    const storepassword = () => {
        axios.put("http://localhost:5000/storepassword", {
            storeid: storeid,
            password: password
        }).then(() => {
            insertdiscountstoreid();
            navigate("/");
        });
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>ID Generator Store</h3>
                    Firstname <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" /></div>

                    Contact <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" /></div>

                    <button className='btnregisteruser' onClick={verifystore} type='button'>Verify</button>

                    Genarated store-Id <div className='inputdiv'><input className='input' onChange={(e) => { setStoreid(e.target.value); }} value={storeid} type="text" readOnly /></div>

                    Set Password <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="text" /></div>

                    <button className='btnregisteruser' onClick={storepassword} type='button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Idpasswordgenstore;