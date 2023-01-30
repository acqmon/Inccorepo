import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../components/Store.css";

const Storeallrechargepage = () => {
    const navigate = useNavigate();
    const [storeid, setStoreid] = useState("");

    const navuserrecharge = () => {
        navigate("/userrecharge");
    };
    const navstorerecharge = () => {
        navigate("/storerecharge");
    };
    const navstoresalesrecharge = () => {
        navigate("/storesalesrecharge");
    };
    const navmarketersalesrecharge = () => {
        navigate("/marketersalesrecharge");
    };

    const getstoreid = () => {
        axios.get("http://localhost:5000/loginstore").then((response) => {
            if (response.data.loggedin === true) {
                setStoreid(response.data.user[0].storeid);
            }
        });
    };

    useEffect(() => {
        getstoreid();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('storeid');
        if (data) {
            setStoreid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('storeid', `${storeid}`);
    });

    return (
        <div className='storerechargeallpage'>
            <button className='btns1' onClick={navstorerecharge} type='button'>Store Recharge</button>
            <button className='btns1' onClick={navstoresalesrecharge} type='button'>Store Sales Recharge</button>

            <button className='btns1' onClick={navmarketersalesrecharge} type='button'>Marketer Sales Recharge</button>
            <button className='btns1' onClick={navuserrecharge} type='button'>User Recharge</button>
        </div>
    );
};

export default Storeallrechargepage;