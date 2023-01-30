import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from "axios";

const Promotiondetailsadmin = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);

    const loaddata = () => {
        axios.get("http://localhost:5000/getpromotiondetails").then((response) => {
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
                        <th>Promotion Type</th>
                        <th>Order Amount</th>
                        <th>Phase</th>
                        <th>Order Per Phase</th>
                        <th>Cut</th>
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
                            <td>{cash.type}</td>
                            <td>{cash.orderamount}</td>
                            <td>{cash.phase}</td>
                            <td>{cash.orderperphase}</td>
                            <td>{cash.cut}</td>
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

export default Promotiondetailsadmin;