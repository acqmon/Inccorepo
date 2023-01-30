import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../userregisterpage/Registeruser.css";

const Idpasswordgenmarketer = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [contact, setContact] = useState("");
    const [marketerid, setMarketerid] = useState("");
    const [password, setPassword] = useState("");

    const verifymarketer = () => {
        axios.post("http://localhost:5000/marketeridinputfield", {
            firstname: firstname,
            contact: contact
        }).then((response) => {
            setMarketerid(response.data[0].marketerid);
        });
    };

    const marketerpassword = () => {
        axios.put("http://localhost:5000/marketerpassword", {
            marketerid: marketerid,
            password: password
        }).then(() => {
            navigate("/");
        });
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>ID Generator Marketer</h3>
                    First Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" /></div>

                    Contact <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="text" /></div>

                    <button className='btnregisteruser' onClick={verifymarketer} type='button'>verify</button>

                    Genarated Marketer-Id <div className='inputdiv'><input className='input' onChange={(e) => { setMarketerid(e.target.value); }} value={marketerid} type="text" readOnly /></div>

                    Set Password <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="text" /></div>

                    <button className='btnregisteruser' onClick={marketerpassword} type='button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Idpasswordgenmarketer;