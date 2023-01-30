import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../userregisterpage/Registeruser.css";

const Registeradmin = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [contact, setContact] = useState("");

    const regadmin = () => {
        axios.post("http://localhost:5000/registeradmin", {
            firstname: firstname,
            lastname: lastname,
            contact: contact,
        }).then(() => {
            console.log("success");
        });
    };

    const adminid = () => {
        axios.put("http://localhost:5000/adminid").then(() => {
            console.log("ok");
        });
    };

    const verificationpage = () => {
        regadmin();
        adminid();
        navigate("/idpasswordgenadmin");
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>Register</h3>
                    First Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" /></div>

                    Last Name <div className='inputdiv'><input className='input' onChange={(e) => { setLastname(e.target.value); }} type="text" /></div>

                    Contact Number <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" /></div>

                    <button className='btnregisteruser' onClick={verificationpage} type='button'>Generate agency-id</button>
                </form>
            </div>
        </div>
    );
};

export default Registeradmin;