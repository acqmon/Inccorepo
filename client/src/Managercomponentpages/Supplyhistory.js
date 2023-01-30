import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import "./Managercomponent.css";

const Supplyhistory = () => {
    const [orderhistory, setOrderhistory] = useState([]);
    const [managerid, setManagerid] = useState("");

    const loaddata = () => {
        axios.post("http://localhost:5000/supplyhistorymanager", {
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
            <h1 className='headingtable'>Supply History</h1>
            <table>
                <thead>
                    <tr>
                        <td>Sl.No</td>
                        <td>Bill Amt</td>
                        <td>Half Amt</td>
                        <td>Disc.Rate</td>
                        <td>Disc.Amt</td>
                        <td>Userid</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {orderhistory.map((order, index) => (
                        <tr key={order.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{order.billamount}</td>
                            <td>{order.halfamount}</td>
                            <td>{order.discountrate}</td>
                            <td>{order.discountamount}</td>
                            <td>{order.userid}</td>
                            <td>{moment(order.date).format("DD - MM - YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Supplyhistory;