import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Productlist = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productname, setProductname] = useState("");
    const [description, setDescription] = useState("");
    const [unit, setUnit] = useState("");
    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");

    const addproduct = () => {
        axios.post("http://localhost:5000/addproduct", {
            productname: productname,
            description: description,
            unit: unit,
            rate: rate,
            quantity: quantity
        }).then(() => {
            productunit();
        });
    };

    const productunit = () => {
        axios.put("http://localhost:5000/addproduct").then(()=>{
            loadproduct();
        })
    };

    const loadproduct = () => {
        axios.get("http://localhost:5000/addproduct").then((response) => {
            setProducts(response.data);
        });
    };

    const selectproduct = (id) => {
        axios.get(`http://localhost:5000/updateproduct/${id}`).then(() => {
            navigate(`/updateproductdetails/${id}`);
        });
    };
    const deleteproduct = (id) => {
        axios.delete(`http://localhost:5000/updateproduct/${id}`).then(()=>{
            loadproduct();
        })
    };

    useEffect(() => {
        loadproduct();
    },[]);

    return (
        <div className='table'>
            <div className='adminsystem'>
                <h2 className='headingtable'>Add New Product</h2>
                Product Name<input onChange={(e) => { setProductname(e.target.value); }} type="text" />
                Description<input onChange={(e) => { setDescription(e.target.value); }} type="text" />
                Unit<input onChange={(e) => { setUnit(e.target.value); }} type="text" />
                Rate<input onChange={(e) => { setRate(e.target.value); }} type="number" />
                Quantity<input onChange={(e) => { setQuantity(e.target.value); }} type="number" />
                <button className='btn' onClick={addproduct} type='button'>Add Product</button>
            </div>
            <div className='userrechargesystemadmin1'>
                <table>
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Product Name</th>
                            <th>description</th>
                            <th>Unit</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            {/* <th>UOM</th> */}
                            <th>RatePerUnit</th>
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
                                {/* <td>{product.uom}</td> */}
                                <td>{product.rateperunit}</td>
                                <td>
                                    <button onClick={() => { selectproduct(product.id); }} type='button'>Edit</button>
                                    <button onClick={() => { deleteproduct(product.id); }} type='button'>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Productlist;