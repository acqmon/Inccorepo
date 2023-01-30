import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from "axios";

const Printqr = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const loaddata = () => {
        axios.get("http://localhost:5000/getstoreqrlist").then((response) => {
            setData(response.data);
        });
    };

    const getdatastore = (id) => {
        navigate(`/printqrstore/${id}`);
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
                        <th>Store-ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((qr, index) => (
                        <tr key={qr.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{qr.storeid}</td>
                            <td>
                                <button onClick={() => { getdatastore(qr.id); }}>Select Store</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Printqr;