import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Marketerrechargehistory = () => {
    const [marketerid, setMarketerid] = useState("");
    const [rechargehistory, setRechargehistory] = useState([]);

    const getrechargehistory = () => {
        axios.post("http://localhost:5000/getrechargehistorymarketer", {
            marketerid: marketerid
        }).then((response) => {
            setRechargehistory(response.data);
        });
    };

    useEffect(() => {
        getrechargehistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [marketerid]);

    const getmarketerid = () => {
        axios.get("http://localhost:5000/loginmarketer").then((response) => {
            if (response.data.loggedin === true) {
                setMarketerid(response.data.user[0].marketerid);
            }
        });
    };

    useEffect(() => {
        getmarketerid();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('Marketerid');
        if (data) {
            setMarketerid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Marketerid', `${marketerid}`);
    });

    return (
        <div className='table'>
            <h1 className='headingtable'>Recharge History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Recharge Amount</th>
                        <th>Balance Amount</th>
                        <th>Discount %</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rechargehistory.map((history, index) => (
                        <tr key={history.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{history.rechamount}</td>
                            <td>{history.sellingbalance}</td>
                            <td>{history.disc}</td>
                            <td>{moment(history.date).format("DD - MM - YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Marketerrechargehistory;