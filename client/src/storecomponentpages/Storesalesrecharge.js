import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Storesalesrecharge = () => {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);

  const loadplans = () => {
    axios.get("http://localhost:5000/rendersalesplansstore").then((response) => {
      setPlans(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const selectplan = (id) => {
    axios.get(`http://localhost:5000/selectstoresalesrecharge/${id}`).then(() => {
      navigate(`/selectstoresalesrecharge/${id}`);
    });
  };

  useEffect(() => {
    loadplans();
  }, []);

  const [storeid, setStoreid] = useState("");

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
    <div>
      <div className='table'>
        <h1 className='headingtable'>Store Sales Plans</h1>
        <table>
          <thead>
            <tr>
              <th>sl.no</th>
              <th>Recharge Amount</th>
              <th>Balance</th>
              <th>Discount %</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={plan.id}>
                <th scope='row'>{index + 1}</th>
                <td>{plan.rechargeamount}</td>
                <td>{plan.salesbalance}</td>
                <td>{plan.discount}</td>
                <td>
                  <button onClick={() => { selectplan(plan.id); }}>selectplan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Storesalesrecharge;