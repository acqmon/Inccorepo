import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Updatepromotionrecharge = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [rechargeamount, setRechargeamount] = useState("");
    const [orderamount, setOrderamount] = useState("");
    const [phase, setPhase] = useState("");
    const [cut, setCut] = useState("");

    const fillinput = () => {
        axios.get(`http://localhost:5000/selectsalesrechargeplan/${param.id}`).then((response) => {
            setRechargeamount(response.data[0].rechargeamount);
            setOrderamount(response.data[0].orderamount);
            setPhase(response.data[0].phase);
            setCut(response.data[0].cut);
        });
    };

    const updateplan = () => {
        axios.put(`http://localhost:5000/updatesalesrechargesystem/${param.id}`, {
            rechargeamount: rechargeamount,
            orderamount: orderamount,
            phase: phase,
            cut: cut
        }).then(() => {
            navigate("/homemanager");
        });
    };

    useEffect(() => {
        fillinput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='updateuserrecharge'>
            <h1 className='heading'>updatepromotionrecharge</h1><br /><br />
            <input onChange={(e) => { setRechargeamount(e.target.value); }} value={rechargeamount} type="number" placeholder='Add Recharge Amount' /><br /><br />
            <input onChange={(e) => { setOrderamount(e.target.value); }} value={orderamount} type="number" placeholder='Add orderamount Amount' /><br /><br />
            <input onChange={(e) => { setPhase(e.target.value); }} value={phase} type="number" placeholder='Add Phase' /><br /><br />
            <input onChange={(e) => { setCut(e.target.value); }} value={cut} type="text" placeholder='Add cut' /><br /><br />
            <button className='btn' onClick={updateplan} type='button'>Update User Plan</button><br /><br /><br /><br />
        </div>
    );
};

export default Updatepromotionrecharge;