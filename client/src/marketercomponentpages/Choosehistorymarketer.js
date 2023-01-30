import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Choosehistorymarketer = () => {
    const navigate = useNavigate();
    const [marketerid, setMarketerid] = useState("");

    const navhistorysales = () => {
        navigate("/marketersaleshistory");
    };
    const navhistorysalespromotion = () => {
        navigate("/promotionsaleshistorymarketer");
    };
    const navmarketerrechargehistory = () => {
        navigate("/marketerrechargehistory");
    };

    const getmarketerid = () => {
        axios.get("http://localhost:5000/loginmarketer").then((response) => {
            if (response.data.loggedin === true) {
                setMarketerid(response.data.user[0].marketerid);
            }
        });
    };

    useEffect(() => {
        getmarketerid();
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('Marketerid');
        if (data) {
            setMarketerid(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Marketerid', `${marketerid}`);
    });

    return (
        <div className='marketerchoosehistory'>
            <div className='choosemrkhis'>
                <button className='hisbtnmrk' onClick={navhistorysales}>Sales History</button><br /><br />
                <button className='hisbtnmrk' onClick={navhistorysalespromotion}>Promotion History</button><br /><br />
                <button className='hisbtnmrk' onClick={navmarketerrechargehistory}>Recharge History</button>
            </div>
        </div>
    );
};

export default Choosehistorymarketer;