import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Promotionrecharge = () => {
  const navigate = useNavigate();
  const [managerid, setManagerid] = useState("");
  const [plans, setPlans] = useState([]);

  const loadplans = () => {
    axios.get("http://localhost:5000/renderpromotionplans").then((response) => {
      setPlans(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const selectplan = (id) => {
    axios.get(`http://localhost:5000/selectpromotionplanmanager/${id}`).then(() => {
      navigate(`/selectpromotionplan/${id}`);
    });
  };

  useEffect(() => {
    loadplans();
  }, []);

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
      <h1 className='headingtable'>Promotion Recharge</h1>
      <table>
        <thead>
          <tr>
            <th>slno</th>
            <th>Recharge amount</th>
            <th>Order Amount</th>
            <th>Phase</th>
            <th>Cut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={plan.id}>
              <th scope='row'>{index + 1}</th>
              <td>{plan.rechargeamount}</td>
              <td>{plan.orderamount}</td>
              <td>{plan.phase}</td>
              <td>{plan.cut}</td>
              <td>
                <button onClick={() => { selectplan(plan.id); }}>selectplan</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Promotionrecharge;