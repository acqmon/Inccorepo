import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Marketersaleshistory = () => {
    const [marketerid, setMarketerid] = useState("");
    const [saleshistory, setSaleshistory] = useState([]);

    const getsaleshistory = () => {
        axios.post("http://localhost:5000/getsaleshistorymarketer", {
            marketerid: marketerid
        }).then((response) => {
            setSaleshistory(response.data);
        });
    };

    useEffect(() => {
        getsaleshistory();
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
            <h1 className='headingtable'>Sales History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Sales Amount</th>
                        <th>Discount Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {saleshistory.map((history, index) => (
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

export default Marketersaleshistory;