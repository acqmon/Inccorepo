import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Admin from '../components/Admin';
import Manager from "../components/Manager";

const Homemanager = () => {

    const [Role, setRole] = useState("");

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:5000/loginadmin").then((response) => {
            // console.log(response)
            if (response.data.loggedin === true) {
                setRole(response.data.user[0].role);
                console.log(response.data);
            }
        });
    }, []);

    return (
        <div>
            {Role === "admin" && <Admin />}
            {Role === "manager" && <Manager />}
        </div>
    );
};

export default Homemanager;