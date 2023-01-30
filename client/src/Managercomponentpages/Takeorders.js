import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Managercomponent.css"

const Takeorders = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [managerid, setManagerid] = useState("");

    const selectproduct = (id) => {
        navigate(`/cartpage/${id}`);
    };

    const mycart = () => {
        navigate("/mycart");
    };

    const loaddata = () => {
        axios.get("http://localhost:5000/getproductlist").then((response) => {
            setProducts(response.data);
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
        loaddata();
    }, []);

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
            <h5 className='headingtable'>Order Page</h5>
            <div className='cart'><button className='btncart' onClick={mycart} type='button'>Cart</button></div>
            <table>
                <thead>
                    <tr>
                        <th>sl.no</th>
                        <th>Item</th>
                        <th>Desc</th>
                        <th>Unit</th>
                        <th>Rate</th>
                        <th>Avl.Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{product.productname}</td>
                            <td>{product.description}</td>
                            <td>{product.unit}</td>
                            <td>{product.rate}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button onClick={() => { selectproduct(product.id); }} type='button' >Select Item</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Takeorders;