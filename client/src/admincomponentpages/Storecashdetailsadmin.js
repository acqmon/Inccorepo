import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Storecashdetailsadmin = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);

    const loaddata = () => {
        axios.get("http://localhost:5000/getstorecashdetailsdata").then((response) => {
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
                        <th>Store Discount To Users</th>
                        <th>Seller Discount To Store</th>
                        <th>Total Recharge Amount</th>
                        <th>Store ID</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((cash, index) => (
                        <tr key={cash.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{cash.storediscount}</td>
                            <td>{cash.sellerdiscount}</td>
                            <td>{cash.totalrechargeamount}</td>
                            <td>{cash.storeid}</td>
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

export default Storecashdetailsadmin;