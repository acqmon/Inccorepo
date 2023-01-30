import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const Purchasehistorystore = () => {
    const [historyplans, setHistoryplans] = useState([]);
    const [storeid, setStoreid] = useState("");

    const history = () => {
        axios.post("http://localhost:5000/getstorepurchasehistory", {
            storeid: storeid
        }).then((response) => {
            setHistoryplans(response.data);
        });
    };

    useEffect(() => {
        history();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeid]);


    const getstoreid = () => {
        axios.get("http://localhost:5000/loginstore").then((response) => {
            if (response.data.loggedin === true) {
                setStoreid(response.data.user[0].storeid);
            }
        });
    };

    useEffect(() => {
        getstoreid();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('storeid');
        if (data) {
            setStoreid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('storeid', `${storeid}`);
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
                        <th>Purchased From</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {historyplans.map((historyplan, index) => (
                        <tr key={historyplan.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{historyplan.purchaseamount}</td>
                            <td>{historyplan.discountamount}</td>
                            <td>{historyplan.storeid}</td>
                            <td>{moment(historyplan.date).format("DD - MM - YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Purchasehistorystore;