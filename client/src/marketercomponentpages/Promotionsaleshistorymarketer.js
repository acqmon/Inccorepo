import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from 'moment';

const Promotionsaleshistorymarketer = () => {
    const [plans, setPlans] = useState([]);
    const [userid, setUserid] = useState("");

    const loadplans = () => {
        axios.post("http://localhost:5000/renderpromotionandsalehistory", {
            userid: userid
        }).then((response) => {
            setPlans(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        loadplans();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userid]);

    const getmarketerid = () => {
      axios.get("http://localhost:5000/loginmarketer").then((response) => {
        if (response.data.loggedin === true) {
          setUserid(response.data.user[0].marketerid);
        }
      });
    };
  
    useEffect(() => {
      getmarketerid();
    }, []);
  
    useEffect(() => {
      const data = localStorage.getItem('userid');
      if (data) {
        setUserid(data);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('userid', `${userid}`);
    });

    return (
        <div className='table'>
            <h1 className='headingtable'>Promotion History</h1>
            <table>
                <thead>
                    <tr>
                        <th>sl.no</th>
                        <th>Type</th>
                        <th>Order Amount</th>
                        <th>Confirmedby</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {plans.map((plan, index) => (
                        <tr key={plan.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{plan.type}</td>
                            <td>{plan.orderamount}</td>
                            <td>{plan.managerid}</td>
                            <td>{moment(plan.date).format("DD - MM - YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Promotionsaleshistorymarketer;