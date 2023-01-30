import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Startapp.css";

const Startapp = () => {
    const navigate = useNavigate();

    const loginpage = () => {
        navigate("/selectlogintype");
    };
    const registerpage = () => {
        navigate("/chooseuser");
    };
    const agencypage = () => {
        navigate("/agencypage");
    };

    return (
        <div className='startapp'>
            <div className='startapp1'>
                <h1 className='headingstartapp'>Incco</h1>

                <div className='btnstartevents'>
                    <button className='btnstartapp' onClick={loginpage} type='button'>Login</button>

                    <button className='btnstartapp' onClick={registerpage} type='button'>Register</button>

                    <button className='btnstartapp' onClick={agencypage} type='button'>Agency_Log-In</button>

                </div>

            </div>
        </div>
    );
};

export default Startapp;