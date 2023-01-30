import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import "./Managercomponent.css"

const Orderhistory = () => {
    const navigate = useNavigate();
    const [orderhistory, setOrderhistory] = useState([]);
    const [managerid, setManagerid] = useState("");


    const selectorder = (id) => {
        navigate(`/vieworder/${id}`);
    };

    const loaddata = () => {
        axios.post("http://localhost:5000/orderhistory", {
            managerid: managerid
        }).then((response) => {
            setOrderhistory(response.data);
        });
    };

    const getmanagerid = () => {
        axios.get("http://localhost:5000/loginadmin").then((response) => {
            if (response.data.loggedin === true) {
                setManagerid(response.data.user[0].adminid);
            }
        });
    };

    useEffect(() => {
        getmanagerid();
    }, []);

    useEffect(() => {
        loaddata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerid]);

    useEffect(() => {
        const data = localStorage.getItem('managerid');
        if (data) {
            setManagerid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('managerid', `${managerid}`);
    });

    return (
        <div className='table'>
            <h1 className='headingtable'>Orderhistory</h1>
            <table>
                <thead>
                    <tr>
                        <td>orderid</td>
                        <td>userid</td>
                        <td>Date</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {orderhistory.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.userid}</td>
                            <td>{moment(order.date).format("DD - MM - YYYY")}</td>
                            <td>
                                <button onClick={() => { selectorder(order.id); }} type='button' >View Order</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orderhistory;