import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Marketer from '../components/Marketer';

const Homemarketer = () => {

    const [Role, setRole] = useState("");

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:5000/loginmarketer").then((response) => {
            // console.log(response)
            if (response.data.loggedin === true) {
                setRole(response.data.user[0].role);
                console.log(response.data);
            }
        });
    }, []);

    return (
        <div>
            {Role === "marketer" && <Marketer />}
        </div>
    );
};

export default Homemarketer;