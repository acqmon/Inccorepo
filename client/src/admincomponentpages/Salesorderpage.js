import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Promotionpage = () => {
    const navigate = useNavigate();

    const [plans, setPlans] = useState([]);

    const [rechargeamount, setRechargeamount] = useState("");
    const [orderamount, setOrderamount] = useState("");
    const [phase, setPhase] = useState("");
    const [cut, setCut] = useState("");

    const addsalespromotion = () => {
        axios.post("http://localhost:5000/addsalesrechargesystem", {
            rechargeamount: rechargeamount,
            orderamount: orderamount,
            phase: phase,
            cut: cut
        }).then(()=>{
            getplans()
        })
    };

    const selectplan = (id) => {
        axios.get(`http://localhost:5000/selectsalesrechargeplan/${id}`).then(() => {
            navigate(`/updatesalespromotionrecharge/${id}`);
        });
    };
    const deleteplan = (id) => {
        axios.delete(`http://localhost:5000/deletesalesplan/${id}`).then(()=>{
            getplans()
        })
    };

    const getplans = () => {
        axios.get("http://localhost:5000/addsalesrechargesystem").then((response) => {
            setPlans(response.data);
        });
    };

    useEffect(() => {
        getplans();
    }, []);

    return (
        <div className='table'>
            <div className='adminsystem'>
                <h1 className='headingtable'>Promotion Recharge System</h1>
                Recharge Amount <input onChange={(e) => { setRechargeamount(e.target.value); }} type="number" />
                Order Amount <input onChange={(e) => { setOrderamount(e.target.value); }} type="number" />
                Phase <input onChange={(e) => { setPhase(e.target.value); }} type="number" />
                Cut <input onChange={(e) => { setCut(e.target.value); }} type="text" />
                <button className='btn' onClick={addsalespromotion} type='button'>Add Promotion Recharge</button>
            </div>
            <div className='userrechargesystemadmin1'>
                <table>
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Type</th>
                            <th>Recharge Amount</th>
                            <th>Order Amount</th>
                            <th>Phase</th>
                            <th>Order/Phase</th>
                            <th>Cut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, index) => (
                            <tr >
                                <th scope='row'>{index + 1}</th>
                                <td>{plan.type}</td>
                                <td>{plan.rechargeamount}</td>
                                <td>{plan.orderamount}</td>
                                <td>{plan.phase}</td>
                                <td>{plan.orderperphase}</td>
                                <td>{plan.cut}</td>
                                <td>
                                    <button onClick={() => { selectplan(plan.id); }} type='button'>Edit</button>
                                    <button onClick={() => { deleteplan(plan.id); }} type='button'>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Promotionpage;