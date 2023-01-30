import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Store from '../components/Store';

const Homestore = () => {

    const [Role, setRole] = useState("");

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:5000/loginstore").then((response) => {
            // console.log(response)
            if (response.data.loggedin === true) {
                setRole(response.data.user[0].role);
                console.log(response.data);
            }
        });
    }, []);

    return (
        <div>
            {Role === "store" && <Store />}
        </div>
    );
};

export default Homestore;