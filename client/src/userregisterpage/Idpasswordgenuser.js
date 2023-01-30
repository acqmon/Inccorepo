import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Registeruser.css";

const Idpasswordgenuser = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [contact, setContact] = useState("");
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");

    const verifyuser = () => {
        axios.post("http://localhost:5000/useridinputfield", {
            firstname: firstname,
            contact: contact
        }).then((response) => {
            if (response.data.length > 0) {
                setUserid(response.data[0].userid);
            } else {
                alert("Please Insert Correct First Name and Contact Number");
            }
        });
    };

    const userpassword = () => {
        axios.put("http://localhost:5000/userpassword", {
            userid: userid,
            password: password
        }).then(() => {
            navigate("/");
        });
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>Verification</h3>
                    First Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" placeholder='verify first name' /></div>

                    Contact Number <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" placeholder='verify contact number' /></div>

                    <button className='btnregisteruser' onClick={verifyuser} type='button'>VERIFY</button>

                    Genarated User-Id <div className='inputdiv'><input className='input' onChange={(e) => { setUserid(e.target.value); }} value={userid} type="text" readOnly /></div>

                    Set PassWord <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="text" /></div>

                    <button className='btnregisteruser' onClick={userpassword} type='button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Idpasswordgenuser;