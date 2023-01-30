import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Admincomponent.css";

const Promotionpage = () => {
    const navigate = useNavigate();

    const [plans, setPlans] = useState([]);

    const [rechargeamount, setRechargeamount] = useState("");
    const [orderamount, setOrderamount] = useState("");
    const [cut, setCut] = useState("");

    const addpromotion = () => {
        axios.post("http://localhost:5000/addpromotionrechargesystem", {
            rechargeamount: rechargeamount,
            orderamount: orderamount,
            cut: cut
        }).then(()=>{
            getplans()
        })
    };

    const selectplan = (id) => {
        axios.get(`http://localhost:5000/selectpromotionplan/${id}`).then(() => {
            navigate(`/updatepromotionrecharge/${id}`);
        });
    };
    const deleteplan = (id) => {
        axios.delete(`http://localhost:5000/deletepromotionplan/${id}`);
    };

    const getplans = () => {
        axios.get("http://localhost:5000/addpromotionrechargesystem").then((response) => {
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
                Cut <input onChange={(e) => { setCut(e.target.value); }} type="text" />
                <button className='btn' onClick={addpromotion} type='button'>Add Promotion Recharge</button>
            </div>
            <div className='userrechargesystemadmin1'>
                <table>
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Type</th>
                            <th>Recharge Amount</th>
                            <th>Order Amount</th>
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