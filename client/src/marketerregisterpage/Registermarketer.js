import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../userregisterpage/Registeruser.css";

const Registerseller = () => {
    const navigate = useNavigate();

    const [role, setRole] = useState("marketer");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [contact, setContact] = useState("");
    const [firmname, setFirmname] = useState("");
    const [location, setLocation] = useState("");
    const [pincode, setPincode] = useState("");
    const [industry, setIndustry] = useState("");

    const marketerreg = () => {
        axios.post("http://localhost:5000/registermarketer", {
            firmname: firmname,
            location: location,
            pincode: pincode,
            industry: industry,
            firstname: firstname,
            lastname: lastname,
            contact: contact,
            role: role
        }).then(() => {
            console.log("successfulluy added marketer");
        });
    };

    const marketerid = () => {
        axios.put("http://localhost:5000/marketerid").then(() => {
            console.log("marketerid added");
        });
    };

    const genmarketerid = () => {
        marketerreg();
        marketerid();
        console.log(role);
        navigate("/idpasswordgenmarketer");
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    <h3 className='headingregisteruser'>Register Marketer</h3>
                    User Type <div className='inputdiv'><input className='input' onChange={(e) => { setRole(e.target.value); }} value={role} type="text" readOnly /></div>

                    First Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" /></div>

                    Last Name <div className='inputdiv'><input className='input' onChange={(e) => { setLastname(e.target.value); }} type="text" /></div>

                    Contact Number <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" /></div>

                    Firm Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirmname(e.target.value); }} type="text" /></div>

                    Address <div className='inputdiv'><input className='input' onChange={(e) => { setLocation(e.target.value); }} type="text" /></div>

                    Pin-Code <div className='inputdiv'><input className='input' onChange={(e) => { setPincode(e.target.value); }} type="number" /></div>

                    Industry <div className='inputdiv'><input className='input' onChange={(e) => { setIndustry(e.target.value); }} type="text" /></div>

                    <button className='btnregisteruser' onClick={genmarketerid} type='button'>Generate Marketer-Id</button>
                </form>
            </div>
        </div>
    );
};

export default Registerseller;