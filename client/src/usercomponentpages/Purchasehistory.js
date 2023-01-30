import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import "./Usercomponent.css";

const Purchasehistory = () => {
    const [purchasehistory, setPurchasehistory] = useState([]);
    const [userid, setUserid] = useState("");

    const getpurchasehistory = () => {
        axios.post("http://localhost:5000/getuserpurchasehistory", {
            userid: userid
        }).then((response) => {
            setPurchasehistory(response.data);
        });
    };

    useEffect(() => {
        getpurchasehistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userid]);

    const getuserid = () => {
        axios.get("http://localhost:5000/loginuser").then((response) => {
            if (response.data.loggedin === true) {
                setUserid(response.data.user[0].userid);
            }
        });
    };

    useEffect(() => {
        getuserid();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('userid');
        if (data) {
            setUserid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userid', `${userid}`);
    });

    return (
        <div className='table'>
            <h1 className='headingtable'>Purchase History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Purchase Amount</th>
                        <th>Discount Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {purchasehistory.map((history, index) => (
                        <tr key={history.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{history.purchaseamount}</td>
                            <td>{history.discountamount}</td>
                            <td>{moment(history.date).format("DD - MM - YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Purchasehistory;