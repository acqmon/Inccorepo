import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from 'moment';

const Promotionandsalehistory = () => {
  const [plans, setPlans] = useState([]);
  const [managerid, setManagerid] = useState("");

  const loadplans = () => {
    axios.post("http://localhost:5000/rederpromotionandsalehistorymanager",{
      managerid: managerid
    }).then((response) => {
      setPlans(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    loadplans();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [managerid]);

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
      <h1 className='headingtable'>Promotion History</h1>
      <table>
        <thead>
          <tr>
            <th>slno</th>
            <th>Type</th>
            <th>Order Amount</th>
            <th>userid</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={plan.id}>
              <th scope='row'>{index + 1}</th>
              <td>{plan.type}</td>
              <td>{plan.orderamount}</td>
              <td>{plan.userid}</td>
              <td>{moment(plan.date).format("DD - MM - YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Promotionandsalehistory;