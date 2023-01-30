import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Updateproductdetails = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [productname, setProductname] = useState("");
    const [description, setDescription] = useState("");
    const [unit, setUnit] = useState("");
    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");

    const fillinput = () => {
        axios.get(`http://localhost:5000/updateproduct/${param.id}`).then((response) => {
            setProductname(response.data[0].productname);
            setDescription(response.data[0].description);
            setUnit(response.data[0].unit);
            setRate(response.data[0].rate);
            setQuantity(response.data[0].quantity);
        });
    };

    const updateproduct = () => {
        axios.put(`http://localhost:5000/updateproduct/${param.id}`, {
            productname: productname,
            description: description,
            unit: unit,
            rate: rate,
            quantity: quantity
        }).then(() => {
            navigate('/productlist');
        });
    };


    useEffect(() => {
        fillinput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='updateuserrecharge'>
            <h1 className='heading'>Updateproductdetails</h1><br /><br /><br />

            Product Name<input onChange={(e) => { setProductname(e.target.value); }} value={productname} type="text" /><br /><br />
            Description<input onChange={(e) => { setDescription(e.target.value); }} value={description} type="text" /><br /><br />
            Unit<input onChange={(e) => { setUnit(e.target.value); }} value={unit} type="text" /><br /><br />
            Rate<input onChange={(e) => { setRate(e.target.value); }} value={rate} type="number" /><br /><br />
            Quantity<input onChange={(e) => { setQuantity(e.target.value); }} value={quantity} type="number" /><br /><br />
            <button className='btn' onClick={updateproduct} type='button'>Add Product</button>
        </div>
    );
};

export default Updateproductdetails;