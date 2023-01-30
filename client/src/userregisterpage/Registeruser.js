import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Registeruser.css";

const Registeruser = () => {
    const navigate = useNavigate();

    const [role, setRole] = useState("user");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [contact, setContact] = useState("");

    const reguser = () => {
        axios.post("http://localhost:5000/registeruser", {
            firstname: firstname,
            lastname: lastname,
            contact: contact,
            role: role
        }).then(() => {
            console.log("success");
        });
    };

    const userid = () => {
        axios.put("http://localhost:5000/userid").then(() => {
            console.log("ok");
        });
    };

    const verificationpage = () => {
        reguser();
        userid();
        console.log(role);
        navigate("/generateuserid");
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>Register User</h3>
                    User Type  <div className='inputdiv'><input className='input' onChange={(e) => { setRole(e.target.value); }} placeholder={role} readOnly type="text" /></div>

                    First Name  <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" /></div>

                    Last Name  <div className='inputdiv'><input className='input' onChange={(e) => { setLastname(e.target.value); }} type="text" /></div>

                    Contact Number <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" /></div>

                    <button className='btnregisteruser' onClick={verificationpage} type='button'>Generate User-ID</button>
                </form>
            </div>
        </div>
    );
};

export default Registeruser;