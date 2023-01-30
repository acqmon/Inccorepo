import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Userrecharge = () => {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);

  const loadplans = () => {
    axios.get("http://localhost:5000/renderpurchaseplansuser").then((response) => {
      setPlans(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const selectplan = (id) => {
    axios.get(`http://localhost:5000/selectuserpurchaserecharge/${id}`).then(() => {
      navigate(`/selectuserpurchaserecharge/${id}`);
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
        <h1 className='headingtable'>User Purchase Plans</h1>

        <table>
          <thead>
            <tr>
              <th>sl.no</th>
              <th>Recharge Amount</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={plan.id}>
                <th scope='row'>{index + 1}</th>
                <td>{plan.rechargeamount}</td>
                <td>{plan.purchasebalance}</td>
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

export default Userrecharge;