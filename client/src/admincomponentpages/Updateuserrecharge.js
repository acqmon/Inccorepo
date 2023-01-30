import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admincomponent.css'

const Updateuserrecharge = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [rechargeamount, setRechargeamount] = useState("");
    const [balance, setBalance] = useState("");

    const fillinput = () => {
        axios.get(`http://localhost:5000/selectupdateuserplan/${param.id}`).then((response) => {
            setRechargeamount(response.data[0].rechargeamount);
            setBalance(response.data[0].purchasebalance);
        });
    };

    const updateplan = () => {
        axios.put(`http://localhost:5000/updateuserplan/${param.id}`, {
            rechargeamount: rechargeamount,
            purchasebalance: balance
        }).then(() => {
            navigate("/userrechargesystem");
        });
    };

    useEffect(() => {
        fillinput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='updateuserrecharge'>
        
            <h1 className='heading'>Updateuserrecharge</h1><br /><br /><br />
            <input onChange={(e) => { setRechargeamount(e.target.value); }} value={rechargeamount} type="number" placeholder='Add Recharge Amount' /><br /><br />
            <input onChange={(e) => { setBalance(e.target.value); }} value={balance} type="number" placeholder='Add Balance Amount' /><br /><br />
            <button className='btn' onClick={updateplan} type='button'>Update User Plan</button><br /><br /><br /><br />
        </div>
        
    );
};

export default Updateuserrecharge;