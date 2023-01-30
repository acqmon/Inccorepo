import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../userregisterpage/Registeruser.css";

const Registerstore = () => {
    const navigate = useNavigate();

    const [role, setRole] = useState("store");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [contact, setContact] = useState("");
    const [storename, setStorename] = useState("");
    const [location, setLocation] = useState("");
    const [pincode, setPincode] = useState("");

    const storereg = () => {
        axios.post("http://localhost:5000/registerstore", {
            storename: storename,
            location: location,
            pincode: pincode,
            firstname: firstname,
            lastname: lastname,
            contact: contact,
            role: role
        }).then(() => {
            console.log("successfulluy added store");
        });
    };

    const storeid = () => {
        axios.put("http://localhost:5000/storeid").then(() => {
            console.log("storeid added");
        });
    };

    const verifystore = () => {
        storereg();
        storeid();
        console.log(role);
        navigate("/idpasswordgenstore");
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>Register Store</h3>
                    User Type <div className='inputdiv'><input className='input' onChange={(e) => { setRole(e.target.value); }} value={role} type="text" readOnly /></div>

                    First Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" /></div>

                    Last Name <div className='inputdiv'><input className='input' onChange={(e) => { setLastname(e.target.value); }} type="text" /></div>

                    Contact Number <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" /></div>

                    Store Name <div className='inputdiv'><input className='input' onChange={(e) => { setStorename(e.target.value); }} type="text" /></div>

                    Address <div className='inputdiv'><input className='input' onChange={(e) => { setLocation(e.target.value); }} type="text" /></div>

                    Pin-Code <div className='inputdiv'><input className='input' onChange={(e) => { setPincode(e.target.value); }} type="number" /></div>

                    <button className='btnregisteruser' onClick={verifystore} type='button'>Generate Store-ID</button>
                </form>
            </div>
        </div>
    );
};

export default Registerstore;