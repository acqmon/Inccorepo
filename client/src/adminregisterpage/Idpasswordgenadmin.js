import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../userregisterpage/Registeruser.css";

const Idpasswordgenadmin = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [contact, setContact] = useState("");
    const [adminid, setAdminid] = useState("");
    const [password, setPassword] = useState("");

    const verifyuser = () => {
        axios.post("http://localhost:5000/adminidinputfield", {
            firstname: firstname,
            contact: contact
        }).then((response) => {
            setAdminid(response.data[0].adminid);
        });
    };

    const userpassword = () => {
        axios.put("http://localhost:5000/adminpassword", {
            adminid: adminid,
            password: password
        }).then(() => {
            cashcalculate();
            navigate("/homemanager");
        });
    };

    const cashcalculate = () => {
        axios.post("http://localhost:5000/cashcalculatemanager", {
            adminid: adminid
        });
    };

    return (
        <div>
            <div className='registerusercontainer'>
                <form className='formuserregister'>
                    {/* <h1 className='heading'>Id genarator</h1> */}
                    <h3 className='headingregisteruser'>verification</h3>
                    First Name <div className='inputdiv'><input className='input' onChange={(e) => { setFirstname(e.target.value); }} type="text" placeholder='verify firstname' /></div>

                    Contact Number <div className='inputdiv'><input className='input' onChange={(e) => { setContact(e.target.value); }} type="number" placeholder='verify contact number' /></div>

                    <button className='btnregisteruser' onClick={verifyuser} type='button'>VERIFY</button>

                    Genarated User-Id <div className='inputdiv'><input className='input' onChange={(e) => { setAdminid(e.target.value); }} value={adminid} type="text" readOnly /></div>

                    Set PassWord <div className='inputdiv'><input className='input' onChange={(e) => { setPassword(e.target.value); }} type="text" /></div>

                    <button className='btnregisteruser' onClick={userpassword} type='button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Idpasswordgenadmin;