import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Managercomponent.css";

const Cartpage = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [managerid, setManagerid] = useState("");
    const [productname, setProductname] = useState("");
    const [description, setDesctiption] = useState("");
    const [unit, setUnit] = useState("");
    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [orderquantity, setOrderquantity] = useState(0);

    const updateproductqty = ()=>{
        axios.put(`http://localhost:5000/selecttocart/${param.id}`,{
            orderquantity: orderquantity
        })
    }

    const addtocart = () => {
        if (managerid !== "") {
            if (orderquantity <= quantity) {
                axios.post("http://localhost:5000/addtocart", {
                    productname: productname,
                    description: description,
                    unit: unit,
                    rate: rate,
                    orderquantity: orderquantity,
                    managerid: managerid
                }).then(() => {
                    updateproductqty()
                    navigate('/takeorders');
                });
            }
            else {
                alert(`Only ${quantity} Quantity Is Available`);
            }
        } else {
            alert("managerid is empty");
        }
    };


    const getmanagerid = () => {
        axios.get("http://localhost:5000/loginadmin").then((response) => {
            if (response.data.loggedin === true) {
                setManagerid(response.data.user[0].adminid);
            }
        });
    };

    const fillinput = () => {
        axios.post(`http://localhost:5000/selecttocart/${param.id}`).then((response) => {
            setProductname(response.data[0].productname);
            setDesctiption(response.data[0].description);
            setUnit(response.data[0].unit);
            setRate(response.data[0].rate);
            setQuantity(response.data[0].quantity);
            console.log(response.data);
        });
    };

    useEffect(() => {
        fillinput();
        getmanagerid();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className='registerusercontainer'>
            <form className='formuserregister'>
                <h3 className='headingregisteruser'>Cart Page</h3>
                Item Name <div className='inputdiv'><input className='input' defaultValue={productname} type="text" readOnly/></div>
                Description <div className='inputdiv'><input className='input' defaultValue={description} type="text" readOnly/></div>
                Unit <div className='inputdiv'><input className='input' defaultValue={unit} type="text" readOnly/></div>
                Rate <div className='inputdiv'><input className='input' defaultValue={rate} type="number" readOnly/></div>
                Available Quantity <div className='inputdiv'><input className='input' defaultValue={quantity} type="number" readOnly/></div>

                Add Order Quantity:
                 <div className='inputdiv'><input className='input' onChange={(e) => { setOrderquantity(e.target.value); }} type="number" placeholder='0' /></div>
                <button className='btnregisteruser' onClick={addtocart} type='button'>Add To Cart</button>
            </form>
        </div>
    );
};

export default Cartpage;