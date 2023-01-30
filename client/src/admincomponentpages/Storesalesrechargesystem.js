import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Storesalesrechargesystem = () => {
    const navigate = useNavigate();

    const [plans, setPlans] = useState([]);
    const [amount, setAmount] = useState("");
    const [balance, setBalance] = useState("");
    const [discount, setDiscount] = useState("");

    const planslist = () => {
        axios.get("http://localhost:5000/storesalesrechargelist").then((response) => {
            setPlans(response.data);
        });
    };

    const addplan = () => {
        axios.post("http://localhost:5000/storesalesrechargesystem", {
            rechargeamount: amount,
            salesbalance: balance,
            discount: discount
        }).then(() => {
            planslist();
        });
    };

    const selectplan = (id) => {
        axios.get(`http://localhost:5000/selectupdatestoresalesplan/${id}`).then(() => {
            navigate(`/updatestoresalesrecharge/${id}`);
        });
    };

    const deleteplan = (id) => {
        axios.delete(`http://localhost:5000/deletestoresalesplan/${id}`).then(() => {
            planslist();
        });
    };

    useEffect(() => {
        planslist();
    }, []);

    return (
        <div className='table'>

            <div className='adminsystem'>
                <h1 className='headingtable'>Store Sales Recharge System</h1>
                <input onChange={(e) => { setAmount(e.target.value); }} type="number" placeholder='Add Recharge Amount' />
                <input onChange={(e) => { setBalance(e.target.value); }} type="number" placeholder='Add Balance Amount' />
                <input onChange={(e) => { setDiscount(e.target.value); }} type="number" placeholder='Add Discount %' />
                <button className='btn' onClick={addplan} type='button'>Add New User Plan</button>
            </div>

            <div className='userrechargesystemadmin1'>
                <table>
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Recharge Amount</th>
                            <th>Balance</th>
                            <th>Discount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, index) => (
                            <tr key={plan.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{plan.rechargeamount}</td>
                                <td>{plan.salesbalance}</td>
                                <td>{plan.discount}</td>
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

export default Storesalesrechargesystem;