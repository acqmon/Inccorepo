import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Updatesupply = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [billamount, setBillamount] = useState("");
    const [billamountone, setBillamountone] = useState("");
    const [discount, setDiscount] = useState("");


    const selectplan = (id) => {
        axios.post(`http://localhost:5000/selectsupplyplan/${param.id}`).then((response) => {
            setBillamount(response.data[0].billamount);
            setBillamountone(response.data[0].billamountone);
            setDiscount(response.data[0].discount);
        });
    };

    const udpateplan = () => {
        axios.put(`http://localhost:5000/addsupplydiscount/${param.id}`, {
            billamount: billamount,
            billamountone: billamountone,
            discount: discount
        }).then(() => {
            navigate("/supplydiscount");
        });
    };

    useEffect(() => {
        selectplan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Update supply</h1>
            Bill Amount From : <input onChange={(e) => { setBillamount(e.target.value); }} placeholder={billamount} type="number" /><br /><br />
            Bill Amount To : <input onChange={(e) => { setBillamountone(e.target.value); }} placeholder={billamountone} type="number" /><br /><br />
            Discount : <input onChange={(e) => { setDiscount(e.target.value); }} placeholder={discount} type="number" /><br /><br />
            <button onClick={udpateplan} type='button'>Update Supply Plan</button>
        </div>
    );
};

export default Updatesupply;