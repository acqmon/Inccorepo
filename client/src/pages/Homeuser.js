import React, { useState, useEffect } from 'react';
import axios from 'axios';

import User from '../components/User';

const Homeuser = () => {

    const [Role, setRole] = useState("");

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:5000/loginuser").then((response) => {
            // console.log(response)
            if (response.data.loggedin === true) {
                setRole(response.data.user[0].role);
                console.log(response.data);
            }
        });
    }, []);

    return (
        <div>
            {Role === "user" && <User />}
        </div>
    );
};

export default Homeuser;