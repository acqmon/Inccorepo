import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Editcartquantity = () => {
    const navigate = useNavigate();
    const param = useParams();

    const [managerid, setManagerid] = useState("");
    const [productname, setProductname] = useState("");
    const [description, setDesctiption] = useState("");
    const [unit, setUnit] = useState("");
    const [rate, setRate] = useState("");
    const [oldqty, setOldqty] = useState("");
    const [orderquantity, setOrderquantity] = useState("");

    const updatequantity = () => {
        axios.put(`http://localhost:5000/updatequantitycart/${param.id}`, {
            managerid: managerid,
            orderquantity: orderquantity
        }).then(() => {
            // if (oldqty > orderquantity) {
            //     updateproductquntityinproductlist();
            // } else {
            //     if (oldqty < orderquantity) {
            //         updateexptaproductquntityinproductlist();
            //     }
            // }
            navigate('/mycart');
        });
    };

    const updatequantityone = () => {
        if (oldqty > orderquantity) {
            updateproductquntityinproductlist();
            updatequantity()
        } else {
            if (oldqty < orderquantity) {
                updateexptaproductquntityinproductlist();
            }
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
        axios.post(`http://localhost:5000/editquantitycart/${param.id}`, {
            managerid: managerid
        }).then((response) => {
            if (managerid !== "") {
                setProductname(response.data[0].productname);
                setDesctiption(response.data[0].description);
                setUnit(response.data[0].unit);
                setRate(response.data[0].rate);
                setOldqty(response.data[0].orderquantity);
                // console.log(response.data);
            } else {
                console.log("managerid is null");
            }
        });
    };


    const leftoverqty = oldqty - orderquantity;
    const updateproductquntityinproductlist = () => {
        axios.put("http://localhost:5000/editquantitycart", {
            leftoverqty: leftoverqty,
            productname: productname,
            description: description,
            unit: unit,
            rate: rate
        });
    };

    const extraqty = orderquantity - oldqty;
    const updateexptaproductquntityinproductlist = () => {
        axios.put("http://localhost:5000/updateexptaproductquntityinproductlist", {
            extraqty: extraqty,
            productname: productname,
            description: description,
            unit: unit,
            rate: rate
        }).then((response) => {
            console.log(response);
            if (response.data.messege) {
                alert(response.data.messege);
            }else{
                updatequantity()
            }
        });
    };

    useEffect(() => {
        getmanagerid();
    }, []);


    useEffect(() => {
        fillinput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerid]);

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
                <h3 className='headingregisteruser'>Edit Cart Quantity</h3>
                Item Name:<div className='inputdiv'><input className='input' defaultValue={productname} type="text" readOnly/></div>
                Description:<div className='inputdiv'><input className='input' defaultValue={description} type="text" readOnly/></div>
                Unit:<div className='inputdiv'><input className='input' defaultValue={unit} type="text" readOnly/></div>
                Rate:<div className='inputdiv'><input className='input' defaultValue={rate} type="number" readOnly/></div>
                Update Order Quantity:<div className='inputdiv'><input className='input' onChange={(e) => { setOrderquantity(e.target.value); }} placeholder={oldqty} type="number" /></div>
                <button className='btnregisteruser' onClick={updatequantityone} type='button'>Update Quantity</button>
            </form>
        </div>
    );
};

export default Editcartquantity;