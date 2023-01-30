import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from "axios";

const Supplydetailsadmin = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);

    const loaddata = () => {
        axios.get("http://localhost:5000/getsupplydetails").then((response) => {
            setData(response.data);
        });
    };

    useEffect(() => {
        loaddata();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>slno</th>
                        <th>Bill Amount</th>
                        <th>Disc.Applicable Amount</th>
                        <th>Discount Rate</th>
                        <th>Discount Amount</th>
                        <th>UserId</th>
                        <th>ManagerId</th>
                        <th>Date</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((cash, index) => (
                        <tr key={cash.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{cash.billamount}</td>
                            <td>{cash.halfamount}</td>
                            <td>{cash.discountrate}</td>
                            <td>{cash.discountamount}</td>
                            <td>{cash.userid}</td>
                            <td>{cash.managerid}</td>
                            <td>{moment(cash.date).format("DD - MM - YYYY")}</td>
                            {/* <td>
                                <button>Collect Cash</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Supplydetailsadmin;