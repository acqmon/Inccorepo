import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Managercomponent.css";

const Mycart = () => {
    const navigate = useNavigate();
    const [cartitems, setCartitems] = useState([]);
    const [managerid, setManagerid] = useState("");
    const [updateqty, setUpdateqty] = useState("");
    const [updateproductname, setUpdateproductname] = useState("");
    const [updateunit, setUpdateunit] = useState("");
    const [updaterate, setUpdaterate] = useState("");
    const [updatedescription, setUpdatedescription] = useState("");

    const carttotal = cartitems.reduce((total, item) => {
        return total + item.totalamount;
    }, 0);

    const editquantity = (id) => {
        navigate(`/editcartquantity/${id}`);
    };

    const selectproductqty = (id) => {
        axios.post(`http://localhost:5000/deletecartitem/${id}`, {
        }).then((response) => {
            setUpdateqty(response.data[0].orderquantity);
            setUpdateproductname(response.data[0].productname);
            setUpdatedescription(response.data[0].description);
            setUpdateunit(response.data[0].unit);
            setUpdaterate(response.data[0].rate);
        }).then(()=>{
            removeitem(id)
        })
    };
    useEffect(()=>{
        updatequantityproductlist()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[updateqty])
    const updatequantityproductlist = () => {
        axios.put("http://localhost:5000/deletecartitem", {
            updateqty: updateqty,
            updateproductname: updateproductname,
            updatedescription: updatedescription,
            updateunit: updateunit,
            updaterate: updaterate
        })
    };
    const removeitem = (id) => {
        axios.delete(`http://localhost:5000/deletecartitem/${id}`, {
        }).then(() => {
            loaddata();
        });
    };
    const clearcart = () => {                               //delete method not woriking
        axios.post("http://localhost:5000/clearcart", {
            managerid: managerid
        }).then(() => {
            loaddata();
        });
    };

    const migrate = () => {
        axios.post("http://localhost:5000/migratecarttoorderitems", {
            managerid: managerid
        }).then(() => {
            navigate("/ordercheckoutpage");
            clearcart();
        });
    };

    const loaddata = () => {
        axios.post("http://localhost:5000/getitemsfromcart", {
            managerid: managerid
        }).then((response) => {
            setCartitems(response.data);
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
    }, []);

    useEffect(() => {
        loaddata();
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
        <div className='table'>
            <h3 className='headingtable'>My Cart</h3>
            {/* <h1>Orderid : </h1><br /> */}
            <table>
                <thead>
                    <tr>
                        <th>sl.no</th>
                        <th>Item</th>
                        <th>Desc</th>
                        {/* <th>Unit</th> */}
                        <th>Rate/Item</th>
                        <th>Order Qty</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems.map((items, index) => (
                        <tr key={items.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{items.productname}</td>
                            <td>{items.description}</td>
                            {/* <td>{items.unit}</td> */}
                            <td>{items.rate}</td>
                            <td>{items.orderquantity}</td>
                            <td>{items.totalamount}</td>
                            <td>
                                <button onClick={() => { editquantity(items.id); }} type='button' >Edit Quantity</button><br />
                                <button onClick={() => { selectproductqty(items.id); }} type='button'>Remove Item</button><br /><br />
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot style={{ fontSize: "medium" }}>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Grand Total</td>
                        <td>{carttotal}</td>
                    </tr>
                </tfoot>
            </table>
            {/* <button className='btn' onClick={clearcart} type='button'>Cleart Cart</button><br /> */}
            <button className='btn' onClick={migrate} type='button'>Place Order</button>
        </div>
    );
};

export default Mycart;