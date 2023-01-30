import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Updatemarketersalesrecharge = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [rechargeamount, setRechargeamount] = useState("");
    const [balance, setBalance] = useState("");
    const [discount, setDiscount] = useState("");

    const fillinput = () => {
        axios.get(`http://localhost:5000/selectupdatemarketersalesplan/${param.id}`).then((response) => {
            setRechargeamount(response.data[0].rechargeamount);
            setBalance(response.data[0].salesbalance);
            setDiscount(response.data[0].discount);
        });
    };

    const updateplan = () => {
        axios.put(`http://localhost:5000/updatemarketersalesplan/${param.id}`, {
            rechargeamount: rechargeamount,
            salesbalance: balance,
            discount: discount
        }).then(() => {
            navigate("/marketersalesrechargesystem");
        });
    };

    useEffect(() => {
        fillinput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='updateuserrecharge'>
            <h1 className='heading'>Updatemarketersalesrecharge</h1><br /><br /><br />
            <input onChange={(e) => { setRechargeamount(e.target.value); }} value={rechargeamount} type="number" placeholder='Add Recharge Amount' /><br /><br />
            <input onChange={(e) => { setBalance(e.target.value); }} value={balance} type="number" placeholder='Add Balance Amount' /><br /><br />
            <input onChange={(e) => { setDiscount(e.target.value); }} value={discount} type="number" placeholder='Add Discount %' /><br /><br />
            <button className='btn' onClick={updateplan} type='button'>Update User Plan</button><br /><br /><br /><br />
        </div>
    );
};

export default Updatemarketersalesrecharge;