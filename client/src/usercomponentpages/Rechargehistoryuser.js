import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import "./Usercomponent.css";

const Rechargehistoryuser = () => {
  const [rechargehistory, setRechargehistory] = useState([]);
  const [userid, setUserid] = useState("");

  const getrechargehistory = () => {
    axios.post("http://localhost:5000/getuserrechargehistory", {
      userid: userid
    }).then((response) => {
      setRechargehistory(response.data);
    });
  };

  useEffect(() => {
    getrechargehistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const getuserid = () => {
    axios.get("http://localhost:5000/loginuser").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].userid);
      }
    });
  };

  useEffect(() => {
    getuserid();
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
      <h1 className='headingtable'>Recharge History</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Recharge Amount</th>
              <th>Balance Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rechargehistory.map((history, index) => (
              <tr key={history.id}>
                <th scope='row'>{index + 1}</th>
                <td>{history.rechamount}</td>
                <td>{history.purchbalance}</td>
                <td>{moment(history.date).format("DD - MM - YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rechargehistoryuser;