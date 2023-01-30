import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Supplydiscount = () => {
    // const param = useParams();
    const navigate = useNavigate();
    const [billamount, setBillamount] = useState(0);
    const [billamountone, setBillamountone] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [plans, setPlans] = useState([]);

    const addplan = () => {
        axios.post("http://localhost:5000/addsupplydiscount", {
            billamount: billamount,
            billamountone: billamountone,
            discount: discount
        }).then(() => {
            loadplan();
        });
    };
    const loadplan = () => {
        axios.get("http://localhost:5000/addsupplydiscount").then((response) => {
            setPlans(response.data);
        });
    };

    const selectplan = (id) => {
        axios.post(`http://localhost:5000/selectsupplyplan/${id}`).then(() => {
            navigate(`/updatesupply/${id}`);
        });
    };

    const deleteplan = (id) => {
        axios.delete(`http://localhost:5000/addsupplydiscount/${id}`).then(() => {
            loadplan();
        });
    };


    useEffect(() => {
        loadplan();
    }, []);

    return (
        <div className='table'>
            <div className='adminsystem'>
                <h1 className='headingtable'>Supply Discount</h1>
                Bill Amount From : <input onChange={(e) => { setBillamount(e.target.value); }} type="number" placeholder='0' />
                Bill Amount To : <input onChange={(e) => { setBillamountone(e.target.value); }} type="number" placeholder='0' />
                Discount : <input onChange={(e) => { setDiscount(e.target.value); }} type="number" placeholder='0' />
                <button className='btn' onClick={addplan} type='button'>Add Supply Discount</button>
            </div>
            <div className='userrechargesystemadmin1'>
                <table>
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Bill Amount From</th>
                            <th>Bill Amount To</th>
                            <th>discount(%)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, index) => (
                            <tr key={plan.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{plan.billamount}</td>
                                <td>{plan.billamountone}</td>
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

export default Supplydiscount;